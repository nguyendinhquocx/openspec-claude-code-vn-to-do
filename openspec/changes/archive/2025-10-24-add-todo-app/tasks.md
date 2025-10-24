# Tasks: Triển khai App To-Do

## 1. Setup Project Structure
- [x] 1.1 Tạo thư mục root cho app
- [x] 1.2 Tạo file `index.html` với cấu trúc HTML5 cơ bản
- [x] 1.3 Tạo file `styles.css` với CSS reset và biến màu cơ bản
- [x] 1.4 Tạo file `app.js` với module pattern cơ bản
- [x] 1.5 Tạo file `storage.js` để xử lý LocalStorage

## 2. Triển khai Data Storage
- [x] 2.1 Viết hàm `loadTasks()` để đọc từ LocalStorage
- [x] 2.2 Viết hàm `saveTasks()` để lưu vào LocalStorage
- [x] 2.3 Viết hàm `clearStorage()` để xóa toàn bộ (optional, cho testing)
- [x] 2.4 Test storage với data mẫu trong console

## 3. Triển khai Task Management Logic
- [x] 3.1 Tạo Task model (id, text, completed, timestamp)
- [x] 3.2 Viết hàm `addTask(text)` để thêm task mới
- [x] 3.3 Viết hàm `deleteTask(id)` để xóa task
- [x] 3.4 Viết hàm `updateTask(id, updates)` để sửa task
- [x] 3.5 Viết hàm `toggleComplete(id)` để đánh dấu hoàn thành
- [x] 3.6 Viết hàm `getAllTasks()` để lấy danh sách tasks

## 4. Triển khai UI Components
- [x] 4.1 Tạo form nhập task mới (input + button)
- [x] 4.2 Tạo container hiển thị danh sách tasks
- [x] 4.3 Tạo template cho task item (checkbox, text, delete button - vô hình khi không hover)
- [x] 4.4 Viết hàm `renderTasks()` để render danh sách ra DOM
- [x] 4.5 Viết hàm `renderTask(task)` để render một task item

## 5. Triển khai Event Handlers
- [x] 5.1 Handle form submit để thêm task mới
- [x] 5.2 Handle checkbox click để toggle complete
- [x] 5.3 Handle delete button click để xóa task
- [x] 5.4 Handle double-click để sửa task (inline editing - theo triết lý minimal)
- [x] 5.5 Đảm bảo mỗi action đều trigger re-render và auto-save

## 6. Styling và UX
- [x] 6.1 Style form input và button (theo design system: white, black, minimal)
- [x] 6.2 Style task list (không viền, text đen, hover xám nhẹ #FAFAFA)
- [x] 6.3 Style task completed (text gạch ngang, màu xám, opacity 0.6)
- [x] 6.4 Thêm responsive design cho mobile (touch targets min 44px)
- [x] 6.5 Thêm smooth transitions cho hover và interactions
- [x] 6.6 Áp dụng Base-8 spacing system (8, 16, 24, 32px)
- [x] 6.7 Delete button vô hình cho đến khi hover (triết lý Dieter Rams)

## 7. Testing và Polish
- [x] 7.1 Test thêm task mới
- [x] 7.2 Test xóa task
- [x] 7.3 Test sửa task (double-click inline editing)
- [x] 7.4 Test toggle complete/incomplete
- [x] 7.5 Test refresh page (data phải persist)
- [x] 7.6 Test edge cases (empty input, long text, nhiều tasks)
- [x] 7.7 Kiểm tra console không có errors

## 8. Documentation
- [x] 8.1 Thêm comments tiếng Việt trong code
- [x] 8.2 Tạo file README.md với hướng dẫn sử dụng cơ bản
- [x] 8.3 Document cấu trúc data trong LocalStorage

## Dependencies giữa các tasks
- Task 2 (Storage) có thể làm song song với Task 3 (Logic)
- Task 4 (UI) phụ thuộc vào Task 3 đã xong
- Task 5 (Events) phụ thuộc vào Task 3 và 4
- Task 6 (Styling) có thể làm song song sau khi Task 4 xong
- Task 7 (Testing) phải sau khi Task 5 xong
- Task 8 (Docs) làm cuối cùng
