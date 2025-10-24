/**
 * Storage Module - Quản lý LocalStorage cho tasks
 * Theo spec: data-storage/spec.md
 */

const TaskStorage = (() => {
    const STORAGE_KEY = 'todoAppTasks';

    /**
     * Load tasks từ LocalStorage
     * @returns {Array} Mảng tasks hoặc [] nếu không có data
     */
    function loadTasks() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            if (!data) {
                return [];
            }

            const tasks = JSON.parse(data);

            // Validate data structure
            if (!Array.isArray(tasks)) {
                console.error('[Storage] Data không phải array, khởi tạo lại');
                return [];
            }

            return tasks;
        } catch (error) {
            // Xử lý corrupt data - không crash app
            console.error('[Storage] Lỗi khi load tasks:', error);
            localStorage.removeItem(STORAGE_KEY); // Clear corrupt data
            return [];
        }
    }

    /**
     * Lưu tasks vào LocalStorage
     * @param {Array} tasks - Mảng tasks cần lưu
     * @returns {boolean} True nếu lưu thành công
     */
    function saveTasks(tasks) {
        try {
            const json = JSON.stringify(tasks);
            localStorage.setItem(STORAGE_KEY, json);
            return true;
        } catch (error) {
            // LocalStorage không khả dụng (quota exceeded, privacy mode)
            console.warn('[Storage] Không thể lưu tasks:', error);
            // App vẫn hoạt động bình thường trong session
            return false;
        }
    }

    /**
     * Xóa toàn bộ tasks (dùng cho testing)
     */
    function clearStorage() {
        try {
            localStorage.removeItem(STORAGE_KEY);
            console.log('[Storage] Đã xóa toàn bộ tasks');
        } catch (error) {
            console.error('[Storage] Lỗi khi xóa storage:', error);
        }
    }

    // Public API
    return {
        loadTasks,
        saveTasks,
        clearStorage
    };
})();
