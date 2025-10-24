# data-storage Specification

## Purpose
TBD - created by archiving change add-todo-app. Update Purpose after archive.
## Requirements
### Requirement: Lưu Trữ LocalStorage
Hệ thống MUST sử dụng LocalStorage của browser để lưu trữ dữ liệu tasks persistent.

#### Scenario: Lưu tasks tự động
- **WHEN** bất kỳ thao tác nào thay đổi danh sách tasks (thêm, xóa, sửa, toggle)
- **THEN** toàn bộ danh sách tasks được serialize thành JSON
- **THEN** JSON được lưu vào LocalStorage với key "todoAppTasks"
- **THEN** không cần người dùng nhấn nút "Save" thủ công

#### Scenario: Xử lý lỗi khi lưu
- **WHEN** LocalStorage không khả dụng (quota exceeded, privacy mode)
- **THEN** app vẫn hoạt động bình thường trong session hiện tại
- **THEN** hiển thị warning nhẹ "Dữ liệu sẽ không được lưu lại" (optional)
- **THEN** không crash app

### Requirement: Tải Dữ Liệu Khi Khởi Động
Hệ thống MUST tự động tải lại tasks đã lưu khi người dùng mở app.

#### Scenario: Load tasks thành công
- **WHEN** app khởi động (page load)
- **THEN** đọc data từ LocalStorage key "todoAppTasks"
- **THEN** parse JSON thành array tasks
- **THEN** render toàn bộ tasks ra UI
- **THEN** nếu không có data, khởi tạo array rỗng

#### Scenario: Xử lý dữ liệu corrupt
- **WHEN** data trong LocalStorage bị corrupt hoặc invalid JSON
- **THEN** app không crash, khởi tạo array rỗng
- **THEN** clear LocalStorage key cũ
- **THEN** log error vào console để debug (không hiển thị cho user)

### Requirement: Cấu Trúc Dữ Liệu Task
Hệ thống MUST lưu trữ tasks theo cấu trúc data nhất quán và đầy đủ thông tin.

#### Scenario: Task object structure
- **WHEN** một task được tạo hoặc lưu
- **THEN** task PHẢI có trường `id` (string hoặc number, unique)
- **THEN** task PHẢI có trường `text` (string, nội dung task)
- **THEN** task PHẢI có trường `completed` (boolean, trạng thái hoàn thành)
- **THEN** task NÊN có trường `createdAt` (timestamp, thời gian tạo)

#### Scenario: Serialize và deserialize
- **WHEN** lưu tasks vào LocalStorage
- **THEN** sử dụng `JSON.stringify()` để convert array thành string
- **WHEN** đọc tasks từ LocalStorage
- **THEN** sử dụng `JSON.parse()` để convert string thành array

### Requirement: Tạo ID Duy Nhất
Hệ thống MUST đảm bảo mỗi task có ID duy nhất để tránh xung đột.

#### Scenario: Tạo ID cho task mới
- **WHEN** tạo task mới
- **THEN** ID có thể là timestamp (`Date.now()`) hoặc UUID đơn giản
- **THEN** ID không được trùng với bất kỳ task nào đang tồn tại
- **THEN** ID không thay đổi trong suốt vòng đời của task

### Requirement: Quản Lý Storage Capacity
Hệ thống MUST hoạt động hiệu quả trong giới hạn của LocalStorage.

#### Scenario: Ước lượng storage usage
- **WHEN** có hàng nghìn tasks trong danh sách
- **THEN** mỗi task chiếm khoảng 100-200 bytes (text + metadata)
- **THEN** LocalStorage limit thông thường 5-10MB đủ cho ~25,000-50,000 tasks
- **THEN** app không cần implement pagination cho use case thông thường

#### Scenario: Clear storage (optional)
- **WHEN** developer cần clear storage để testing
- **THEN** có thể gọi `localStorage.removeItem('todoAppTasks')` từ console
- **THEN** hoặc implement nút "Clear All" trong UI (không bắt buộc trong MVP)

