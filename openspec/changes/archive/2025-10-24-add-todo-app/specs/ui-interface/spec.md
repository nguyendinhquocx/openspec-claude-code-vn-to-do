# UI Interface Specification

## ADDED Requirements

### Requirement: Giao Diện Tối Giản
Hệ thống MUST có giao diện đơn giản, sạch sẽ, dễ sử dụng theo triết lý minimal design.

#### Scenario: Layout cơ bản
- **WHEN** người dùng mở app
- **THEN** hiển thị header với tiêu đề "To-Do App"
- **THEN** hiển thị form nhập task ở vị trí dễ thấy
- **THEN** hiển thị danh sách tasks bên dưới form
- **THEN** background màu trắng, text màu đen, không có icon không cần thiết

### Requirement: Form Nhập Task
Hệ thống MUST cung cấp form nhập liệu đơn giản và trực quan.

#### Scenario: Hiển thị form
- **WHEN** người dùng nhìn vào form
- **THEN** thấy input text với placeholder "Nhập công việc mới..."
- **THEN** thấy nút "Thêm" bên cạnh input
- **THEN** input tự động focus khi load trang
- **THEN** có thể submit bằng cách nhấn Enter hoặc click nút

#### Scenario: Visual feedback khi tương tác
- **WHEN** người dùng hover qua nút "Thêm"
- **THEN** nút chuyển sang màu xám nhạt
- **WHEN** người dùng focus vào input
- **THEN** input có outline màu đen mỏng

### Requirement: Hiển Thị Task Items
Hệ thống MUST hiển thị mỗi task theo triết lý "vô hình cho đến khi cần" - controls xuất hiện khi tương tác.

#### Scenario: Cấu trúc task item mặc định
- **WHEN** một task được render ở trạng thái bình thường
- **THEN** chỉ hiển thị checkbox ở bên trái và text nội dung task
- **THEN** không hiển thị nút "Sửa" hoặc "Xóa" (vô hình)
- **THEN** toàn bộ item có padding base-8 (16px vertical, 24px horizontal)
- **THEN** khoảng cách giữa các items là 8px

#### Scenario: Controls xuất hiện khi hover
- **WHEN** người dùng hover qua task item
- **THEN** background chuyển sang xám cực nhạt (#FAFAFA)
- **THEN** nút "×" (xóa) xuất hiện tinh tế ở bên phải
- **THEN** con trỏ chuột chuyển thành pointer trên toàn bộ text area để báo hiệu có thể edit

#### Scenario: Edit inline bằng double-click
- **WHEN** người dùng double-click vào text của task
- **THEN** text chuyển thành input field inline (không modal, không popup)
- **THEN** input tự động focus và select toàn bộ text
- **THEN** người dùng có thể Enter để lưu hoặc Esc để hủy

#### Scenario: Visual state cho task hoàn thành
- **WHEN** task ở trạng thái hoàn thành
- **THEN** text có gạch ngang (line-through)
- **THEN** text chuyển sang màu xám nhạt (#999)
- **THEN** opacity giảm xuống 0.6 để tạo cảm giác "đã xong"
- **THEN** checkbox được check

### Requirement: Responsive Design
Hệ thống MUST hoạt động tốt trên cả desktop và mobile.

#### Scenario: Hiển thị trên desktop
- **WHEN** màn hình rộng hơn 768px
- **THEN** container có max-width 600px và căn giữa
- **THEN** padding và spacing thoải mái

#### Scenario: Hiển thị trên mobile
- **WHEN** màn hình nhỏ hơn 768px
- **THEN** container full width với padding 16px
- **THEN** nút và controls vẫn đủ lớn để touch dễ dàng (min 44px)
- **THEN** text vẫn đọc được, không bị cắt

### Requirement: Typography
Hệ thống MUST sử dụng font chữ rõ ràng và dễ đọc, với thứ bậc tối thiểu nhưng rõ ràng.

#### Scenario: Font system
- **WHEN** render bất kỳ text nào
- **THEN** sử dụng font family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif (dùng font hệ thống để tải nhanh)
- **THEN** header sử dụng font-size 24px, font-weight 600, line-height 1.2
- **THEN** task text sử dụng font-size 16px, font-weight 400, line-height 1.6
- **THEN** màu text chính là #000 (đen thuần), text phụ là #999

### Requirement: Spacing System Base-8
Hệ thống MUST sử dụng spacing system dựa trên bội số của 8px để tạo nhịp điệu thị giác nhất quán.

#### Scenario: Spacing scale
- **WHEN** áp dụng margin hoặc padding
- **THEN** chỉ sử dụng các giá trị: 8px, 16px, 24px, 32px, 48px, 64px
- **THEN** không sử dụng giá trị lẻ (ví dụ: 15px, 20px, 25px)
- **THEN** khoảng trắng giữa sections là 32px
- **THEN** khoảng trắng giữa elements liên quan là 16px
- **THEN** khoảng trắng giữa items trong list là 8px

#### Scenario: Khoảng trắng như sự xa xỉ
- **WHEN** thiết kế layout tổng thể
- **THEN** container có max-width 560px (70ch) để dễ đọc
- **THEN** padding ngoài cùng là 24px (mobile) hoặc 32px (desktop)
- **THEN** không nén chật layout - ưu tiên khoảng trống hơn nhiều thông tin

### Requirement: Trạng Thái Trống
Hệ thống MUST hiển thị trạng thái trống (empty state) một cách hữu ích, hướng dẫn hành động thay vì trang trí.

#### Scenario: Danh sách tasks trống
- **WHEN** chưa có task nào trong danh sách
- **THEN** hiển thị text "Không có task nào. Nhập ở trên để bắt đầu." với màu xám (#999)
- **THEN** text căn giữa, font-size 14px
- **THEN** KHÔNG hiển thị illustration, icon, hoặc empty state artwork
- **THEN** KHÔNG hiển thị nhiều dòng text giải thích dài dòng
