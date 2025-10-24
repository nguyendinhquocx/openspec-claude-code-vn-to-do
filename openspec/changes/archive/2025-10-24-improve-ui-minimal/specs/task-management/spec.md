# Task Management Specification - Filtering

## ADDED Requirements

### Requirement: Phân Nhóm Tasks Theo Trạng Thái
Hệ thống MUST cung cấp khả năng phân nhóm tasks thành pending và completed để hiển thị riêng biệt.

#### Scenario: Filter pending tasks
- **WHEN** gọi hàm lấy danh sách pending tasks
- **THEN** trả về mảng chỉ chứa tasks có `completed = false`
- **THEN** thứ tự giữ nguyên (mới nhất trên cùng)

#### Scenario: Filter completed tasks
- **WHEN** gọi hàm lấy danh sách completed tasks
- **THEN** trả về mảng chỉ chứa tasks có `completed = true`
- **THEN** thứ tự giữ nguyên (mới nhất trên cùng)

#### Scenario: Count completed tasks
- **WHEN** cần đếm số lượng tasks completed
- **THEN** trả về số nguyên là số lượng tasks có `completed = true`
- **THEN** sử dụng cho counter "Đã hoàn thành (X)"
