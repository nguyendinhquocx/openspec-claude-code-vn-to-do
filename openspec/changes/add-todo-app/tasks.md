# Tasks: Triển khai App To-Do

## 1. Setup Project Structure
- [ ] 1.1 Tạo thư mục root cho app
- [ ] 1.2 Tạo file `index.html` với cấu trúc HTML5 cơ bản
- [ ] 1.3 Tạo file `styles.css` với CSS reset và biến màu cơ bản
- [ ] 1.4 Tạo file `app.js` với module pattern cơ bản
- [ ] 1.5 Tạo file `storage.js` để xử lý LocalStorage

## 2. Triển khai Data Storage
- [ ] 2.1 Viết hàm `loadTasks()` để đọc từ LocalStorage
- [ ] 2.2 Viết hàm `saveTasks()` để lưu vào LocalStorage
- [ ] 2.3 Viết hàm `clearStorage()` để xóa toàn bộ (optional, cho testing)
- [ ] 2.4 Test storage với data mẫu trong console

## 3. Triển khai Task Management Logic
- [ ] 3.1 Tạo Task model (id, text, completed, timestamp)
- [ ] 3.2 Viết hàm `addTask(text)` để thêm task mới
- [ ] 3.3 Viết hàm `deleteTask(id)` để xóa task
- [ ] 3.4 Viết hàm `updateTask(id, updates)` để sửa task
- [ ] 3.5 Viết hàm `toggleComplete(id)` để đánh dấu hoàn thành
- [ ] 3.6 Viết hàm `getAllTasks()` để lấy danh sách tasks

## 4. Triển khai UI Components
- [ ] 4.1 Tạo form nhập task mới (input + button)
- [ ] 4.2 Tạo container hiển thị danh sách tasks
- [ ] 4.3 Tạo template cho task item (checkbox, text, edit, delete buttons)
- [ ] 4.4 Viết hàm `renderTasks()` để render danh sách ra DOM
- [ ] 4.5 Viết hàm `renderTask(task)` để render một task item

## 5. Triển khai Event Handlers
- [ ] 5.1 Handle form submit để thêm task mới
- [ ] 5.2 Handle checkbox click để toggle complete
- [ ] 5.3 Handle delete button click để xóa task
- [ ] 5.4 Handle edit button click để sửa task (inline editing hoặc prompt)
- [ ] 5.5 Đảm bảo mỗi action đều trigger re-render và auto-save

## 6. Styling và UX
- [ ] 6.1 Style form input và button (theo design system: white, black, minimal)
- [ ] 6.2 Style task list (không viền, text đen, hover xám nhẹ)
- [ ] 6.3 Style task completed (text gạch ngang, màu xám)
- [ ] 6.4 Thêm responsive design cho mobile
- [ ] 6.5 Thêm smooth transitions cho hover và interactions

## 7. Testing và Polish
- [ ] 7.1 Test thêm task mới
- [ ] 7.2 Test xóa task
- [ ] 7.3 Test sửa task
- [ ] 7.4 Test toggle complete/incomplete
- [ ] 7.5 Test refresh page (data phải persist)
- [ ] 7.6 Test edge cases (empty input, long text, nhiều tasks)
- [ ] 7.7 Kiểm tra console không có errors

## 8. Documentation
- [ ] 8.1 Thêm comments tiếng Việt trong code
- [ ] 8.2 Tạo file README.md với hướng dẫn sử dụng cơ bản
- [ ] 8.3 Document cấu trúc data trong LocalStorage

## Dependencies giữa các tasks
- Task 2 (Storage) có thể làm song song với Task 3 (Logic)
- Task 4 (UI) phụ thuộc vào Task 3 đã xong
- Task 5 (Events) phụ thuộc vào Task 3 và 4
- Task 6 (Styling) có thể làm song song sau khi Task 4 xong
- Task 7 (Testing) phải sau khi Task 5 xong
- Task 8 (Docs) làm cuối cùng
