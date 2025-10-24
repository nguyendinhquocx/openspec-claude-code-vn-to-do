# Task Management Specification

## ADDED Requirements

### Requirement: Tạo Task Mới
Hệ thống MUST cho phép người dùng tạo task mới với nội dung text tùy ý.

#### Scenario: Thêm task thành công
- **WHEN** người dùng nhập text vào input và nhấn nút "Thêm" hoặc Enter
- **THEN** task mới được tạo với ID duy nhất, text đã nhập, trạng thái chưa hoàn thành, và timestamp hiện tại
- **THEN** task xuất hiện trong danh sách ngay lập tức
- **THEN** input được clear để sẵn sàng nhập task tiếp theo

#### Scenario: Ngăn chặn task rỗng
- **WHEN** người dùng submit form với input trống hoặc chỉ có whitespace
- **THEN** hệ thống không tạo task mới
- **THEN** input vẫn giữ focus để người dùng nhập lại

### Requirement: Xóa Task
Hệ thống MUST cho phép người dùng xóa bất kỳ task nào khỏi danh sách.

#### Scenario: Xóa task thành công
- **WHEN** người dùng click nút "Xóa" trên một task bất kỳ
- **THEN** task đó biến mất khỏi danh sách ngay lập tức
- **THEN** dữ liệu task bị xóa vĩnh viễn khỏi storage
- **THEN** các task khác không bị ảnh hưởng

### Requirement: Sửa Task
Hệ thống MUST cho phép người dùng chỉnh sửa nội dung text của task đã tồn tại.

#### Scenario: Sửa task thành công
- **WHEN** người dùng click nút "Sửa" hoặc double-click vào text của task
- **THEN** text của task chuyển thành input field cho phép chỉnh sửa
- **WHEN** người dùng hoàn tất chỉnh sửa (Enter hoặc blur)
- **THEN** nội dung mới được lưu và hiển thị
- **THEN** nếu text mới là rỗng, task không bị xóa mà giữ nguyên text cũ

### Requirement: Đánh Dấu Hoàn Thành
Hệ thống MUST cho phép người dùng đánh dấu task là hoàn thành hoặc chưa hoàn thành.

#### Scenario: Toggle trạng thái hoàn thành
- **WHEN** người dùng click vào checkbox của task chưa hoàn thành
- **THEN** task chuyển sang trạng thái hoàn thành với visual indicator (text gạch ngang, màu xám)
- **WHEN** người dùng click lại vào checkbox của task đã hoàn thành
- **THEN** task quay về trạng thái chưa hoàn thành với style bình thường

### Requirement: Liệt Kê Tasks
Hệ thống MUST hiển thị danh sách tất cả tasks theo thứ tự thời gian tạo.

#### Scenario: Hiển thị danh sách tasks
- **WHEN** người dùng mở app
- **THEN** tất cả tasks được hiển thị theo thứ tự mới nhất trên cùng
- **THEN** mỗi task hiển thị: checkbox, nội dung text, nút sửa, nút xóa
- **THEN** tasks đã hoàn thành và chưa hoàn thành đều hiển thị cùng nhau

#### Scenario: Danh sách rỗng
- **WHEN** chưa có task nào được tạo
- **THEN** hiển thị message thân thiện "Chưa có công việc nào. Thêm task mới để bắt đầu!"
