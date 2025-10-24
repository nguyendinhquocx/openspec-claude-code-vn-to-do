/**
 * App Module - Task Management Logic
 * Theo spec: task-management/spec.md và ui-interface/spec.md
 */

const TodoApp = (() => {
    let tasks = [];
    let editingTaskId = null; // Track task đang được edit

    // DOM elements
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');

    /**
     * Tạo ID duy nhất cho task mới
     * Sử dụng timestamp - đủ đơn giản cho use case này
     */
    function generateId() {
        return Date.now().toString();
    }

    /**
     * Tạo task mới
     * @param {string} text - Nội dung task
     * @returns {Object} Task object
     */
    function createTask(text) {
        return {
            id: generateId(),
            text: text.trim(),
            completed: false,
            createdAt: Date.now()
        };
    }

    /**
     * Thêm task mới
     * Theo spec: Requirement "Tạo Task Mới"
     */
    function addTask(text) {
        // Validate: không cho phép task rỗng
        const trimmedText = text.trim();
        if (!trimmedText) {
            return false;
        }

        const newTask = createTask(trimmedText);
        tasks.unshift(newTask); // Thêm vào đầu mảng (mới nhất trên cùng)

        saveAndRender();
        return true;
    }

    /**
     * Xóa task theo ID
     * Theo spec: Requirement "Xóa Task"
     */
    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveAndRender();
    }

    /**
     * Cập nhật task
     * Theo spec: Requirement "Sửa Task"
     */
    function updateTask(id, updates) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            // Nếu text mới rỗng, giữ nguyên text cũ (theo spec)
            if (updates.text !== undefined) {
                const newText = updates.text.trim();
                if (newText) {
                    task.text = newText;
                }
            }
            if (updates.completed !== undefined) {
                task.completed = updates.completed;
            }
            saveAndRender();
        }
    }

    /**
     * Toggle trạng thái hoàn thành
     * Theo spec: Requirement "Đánh Dấu Hoàn Thành"
     */
    function toggleComplete(id) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            saveAndRender();
        }
    }

    /**
     * Lấy tất cả tasks
     */
    function getAllTasks() {
        return tasks;
    }

    /**
     * Lưu vào storage và re-render UI
     */
    function saveAndRender() {
        TaskStorage.saveTasks(tasks);
        renderTasks();
    }

    /**
     * Render một task item
     * Theo spec UI: vô hình cho đến khi cần, controls xuất hiện khi hover
     */
    function renderTask(task) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.dataset.id = task.id;
        if (task.completed) {
            li.classList.add('completed');
        }

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleComplete(task.id));

        // Text span (có thể edit bằng double-click)
        const textSpan = document.createElement('span');
        textSpan.className = 'task-text';
        textSpan.textContent = task.text;

        // Double-click để edit inline
        textSpan.addEventListener('dblclick', () => startEditTask(task.id, textSpan));

        // Delete button (chỉ hiện khi hover - xử lý trong CSS)
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '×';
        deleteBtn.setAttribute('aria-label', 'Xóa task');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteTask(task.id);
        });

        li.appendChild(checkbox);
        li.appendChild(textSpan);
        li.appendChild(deleteBtn);

        return li;
    }

    /**
     * Bắt đầu edit task inline
     * Theo spec UI: edit bằng double-click, inline editing
     */
    function startEditTask(id, textElement) {
        if (editingTaskId) return; // Chỉ cho phép edit 1 task tại 1 thời điểm

        const task = tasks.find(t => t.id === id);
        if (!task) return;

        editingTaskId = id;
        const originalText = task.text;

        // Tạo input inline
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'task-edit-input';
        input.value = originalText;

        // Replace text span với input
        const parent = textElement.parentNode;
        parent.replaceChild(input, textElement);

        // Auto focus và select toàn bộ text
        input.focus();
        input.select();

        // Handle Enter để lưu
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                finishEdit(id, input.value, input, textElement);
            } else if (e.key === 'Escape') {
                cancelEdit(input, textElement);
            }
        });

        // Handle blur để lưu
        input.addEventListener('blur', () => {
            finishEdit(id, input.value, input, textElement);
        });
    }

    /**
     * Hoàn tất edit task
     */
    function finishEdit(id, newText, inputElement, originalTextElement) {
        if (!editingTaskId) return;

        updateTask(id, { text: newText });
        editingTaskId = null;

        // Replace input với text span
        const parent = inputElement.parentNode;
        parent.replaceChild(originalTextElement, inputElement);

        // Cập nhật text
        const task = tasks.find(t => t.id === id);
        if (task) {
            originalTextElement.textContent = task.text;
        }
    }

    /**
     * Hủy edit task
     */
    function cancelEdit(inputElement, originalTextElement) {
        if (!editingTaskId) return;

        editingTaskId = null;

        // Replace input với text span gốc
        const parent = inputElement.parentNode;
        parent.replaceChild(originalTextElement, inputElement);
    }

    /**
     * Render toàn bộ danh sách tasks
     * Theo spec UI: hiển thị theo thứ tự mới nhất trên cùng
     */
    function renderTasks() {
        // Clear danh sách hiện tại
        taskList.innerHTML = '';

        // Hiển thị/ẩn empty state
        if (tasks.length === 0) {
            emptyState.style.display = 'block';
            taskList.style.display = 'none';
        } else {
            emptyState.style.display = 'none';
            taskList.style.display = 'block';

            // Render từng task
            tasks.forEach(task => {
                const taskElement = renderTask(task);
                taskList.appendChild(taskElement);
            });
        }
    }

    /**
     * Handle form submit
     * Theo spec UI: submit bằng Enter hoặc click nút
     */
    function handleFormSubmit(e) {
        e.preventDefault();

        const text = taskInput.value;
        const success = addTask(text);

        if (success) {
            // Clear input và giữ focus
            taskInput.value = '';
            taskInput.focus();
        }
    }

    /**
     * Initialize app
     */
    function init() {
        // Load tasks từ storage
        tasks = TaskStorage.loadTasks();

        // Render initial state
        renderTasks();

        // Setup event listeners
        taskForm.addEventListener('submit', handleFormSubmit);

        console.log('[App] Initialized với', tasks.length, 'tasks');
    }

    // Auto-init khi DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Public API (dùng cho testing trong console)
    return {
        addTask,
        deleteTask,
        updateTask,
        toggleComplete,
        getAllTasks
    };
})();
