# UI Interface Specification - Improvements

## MODIFIED Requirements

### Requirement: Form Nhập Task
Hệ thống MUST cung cấp form nhập liệu tối giản tuyệt đối - chỉ input field, không button.

#### Scenario: Hiển thị form
- **WHEN** người dùng nhìn vào form
- **THEN** chỉ thấy input text với placeholder "Nhập công việc mới..."
- **THEN** KHÔNG hiển thị nút "Thêm" hoặc bất kỳ button nào
- **THEN** input tự động focus khi load trang
- **THEN** submit hoàn toàn bằng phím Enter

#### Scenario: Visual feedback tối giản khi focus
- **WHEN** người dùng focus vào input
- **THEN** KHÔNG hiển thị box-shadow outline
- **THEN** chỉ giữ background color nhạt để phân biệt vùng nhập
- **THEN** có thể thêm subtle border-bottom animation (optional)

### Requirement: Hiển Thị Task Items
Hệ thống MUST phân tách rõ ràng tasks chưa hoàn thành và đã hoàn thành - chỉ hiện tasks pending ở danh sách chính.

#### Scenario: Danh sách tasks chưa hoàn thành
- **WHEN** có tasks pending (chưa hoàn thành)
- **THEN** chỉ hiển thị tasks pending trong danh sách chính
- **THEN** tasks completed KHÔNG hiển thị trong danh sách chính
- **THEN** tasks pending giữ nguyên interaction như cũ (hover delete, double-click edit)

#### Scenario: Empty state cho pending tasks
- **WHEN** tất cả tasks đều đã hoàn thành
- **THEN** hiển thị message "Không có task nào. Nhập ở trên để bắt đầu."
- **THEN** KHÔNG ẩn section completed nếu có tasks completed

## ADDED Requirements

### Requirement: Section Tasks Đã Hoàn Thành
Hệ thống MUST hiển thị tasks đã hoàn thành trong một section riêng biệt, có thể collapse/expand.

#### Scenario: Hiển thị completed section
- **WHEN** có ít nhất 1 task completed
- **THEN** hiển thị section "Đã hoàn thành (X)" dưới danh sách pending
- **THEN** X là số lượng tasks completed
- **THEN** section có thể click để toggle expand/collapse
- **THEN** mặc định section ở trạng thái collapsed (ẩn tasks)

#### Scenario: Expand completed section
- **WHEN** người dùng click vào header "Đã hoàn thành (X)"
- **THEN** section expand và hiển thị danh sách tasks completed
- **THEN** icon indicator thay đổi (▶ → ▼)
- **THEN** tasks completed hiển thị với opacity thấp hơn (0.6)

#### Scenario: Collapse completed section
- **WHEN** người dùng click lại vào header đang expanded
- **THEN** section collapse và ẩn danh sách tasks
- **THEN** icon indicator thay đổi (▼ → ▶)
- **THEN** trạng thái collapse được lưu vào LocalStorage

#### Scenario: Khôi phục task từ completed
- **WHEN** người dùng uncheck checkbox của task trong completed section
- **THEN** task chuyển về trạng thái pending (completed = false)
- **THEN** task biến mất khỏi completed section
- **THEN** task xuất hiện trong danh sách pending ở vị trí đầu tiên
- **THEN** counter "Đã hoàn thành (X)" giảm đi 1

#### Scenario: Empty completed section
- **WHEN** không có task nào completed
- **THEN** KHÔNG hiển thị section "Đã hoàn thành"
- **THEN** chỉ hiển thị khi có ít nhất 1 task completed

### Requirement: Collapse State Persistence
Hệ thống MUST lưu trạng thái collapse/expand của completed section qua các sessions.

#### Scenario: Lưu collapse state
- **WHEN** người dùng toggle collapse/expand
- **THEN** trạng thái được lưu vào LocalStorage với key "completedSectionCollapsed"
- **THEN** lưu dưới dạng boolean (true = collapsed, false = expanded)

#### Scenario: Restore collapse state
- **WHEN** người dùng reload page
- **THEN** đọc trạng thái từ LocalStorage
- **THEN** render completed section theo trạng thái đã lưu
- **THEN** nếu không có state trong storage, mặc định collapsed
