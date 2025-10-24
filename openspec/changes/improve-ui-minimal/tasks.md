# Tasks: Cải Thiện UI Tối Giản

## 1. Loại Bỏ Nút "Thêm"
- [x] 1.1 Xóa `<button type="submit">Thêm</button>` khỏi HTML
- [x] 1.2 Cập nhật CSS để input full-width
- [x] 1.3 Test submit form chỉ bằng Enter
- [x] 1.4 Đảm bảo mobile vẫn submit được (virtual keyboard Enter)

## 2. Tối Giản Input Styling
- [x] 2.1 Xóa `box-shadow` trong `#taskInput:focus`
- [x] 2.2 Giữ background color nhạt để phân biệt
- [x] 2.3 Thêm subtle border bottom khi focus (optional)
- [ ] 2.4 Test trên nhiều browsers (Chrome, Firefox, Safari)

## 3. Tách Tasks Hoàn Thành
- [x] 3.1 Tạo section "Đã hoàn thành" trong HTML
- [x] 3.2 Viết hàm `filterTasks()` để phân nhóm pending/completed
- [x] 3.3 Render tasks pending vào list chính
- [x] 3.4 Render tasks completed vào completed section
- [x] 3.5 Hiển thị counter "Đã hoàn thành (X)" với số lượng

## 4. Toggle Collapse/Expand
- [x] 4.1 Thêm button/header để toggle completed section
- [x] 4.2 Viết logic collapse/expand với state
- [x] 4.3 Lưu trạng thái collapse vào LocalStorage
- [x] 4.4 Style collapsed/expanded states
- [x] 4.5 Thêm icon indicator (▶ collapsed, ▼ expanded)

## 5. Khôi Phục Task
- [x] 5.1 Khi uncheck task trong completed section → move về pending
- [x] 5.2 Re-render cả 2 sections sau khi toggle
- [x] 5.3 Update counter "Đã hoàn thành (X)"
- [x] 5.4 Auto-save sau mỗi thay đổi

## 6. Styling Completed Section
- [x] 6.1 Style header "Đã hoàn thành" với spacing phù hợp
- [x] 6.2 Style completed tasks (opacity thấp hơn)
- [x] 6.3 Thêm divider/separator giữa 2 sections
- [x] 6.4 Responsive cho mobile

## 7. Testing
- [ ] 7.1 Test submit form không có nút (chỉ Enter)
- [ ] 7.2 Test toggle collapse/expand
- [ ] 7.3 Test uncheck task để khôi phục
- [ ] 7.4 Test persist collapse state qua refresh
- [ ] 7.5 Test edge cases (0 completed, tất cả completed)

## 8. Polish
- [ ] 8.1 Smooth transition cho collapse/expand
- [ ] 8.2 Empty state cho completed section
- [ ] 8.3 Update README.md với features mới
- [ ] 8.4 Kiểm tra accessibility (keyboard navigation)

## Dependencies
- Task 1-2 có thể làm song song
- Task 3-4-5 phải tuần tự (filtering → collapse → restore)
- Task 6 sau khi Task 4 xong
- Task 7-8 làm cuối cùng
