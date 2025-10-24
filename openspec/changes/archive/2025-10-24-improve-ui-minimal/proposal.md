# Proposal: Cải Thiện UI Tối Giản Hơn

## Why

Sau khi review giao diện hiện tại, phát hiện một số điểm có thể tối giản hơn nữa theo triết lý "Less but better":

1. **Nút "Thêm" dư thừa**: User đã quen nhấn Enter để submit form, nút "Thêm" chỉ tốn không gian thị giác
2. **Input border quá rõ**: Focus outline màu đen quá nổi bật, làm gián đoạn trải nghiệm nhập liệu
3. **Tasks hoàn thành gây nhiễu**: Tasks đã hoàn thành vẫn hiển thị cùng với tasks chưa làm, làm mất focus vào công việc quan trọng

Cải thiện này giúp UI càng "biến mất" hơn, để user tập trung vào nội dung thay vì giao diện.

## What Changes

### 1. Loại bỏ nút "Thêm"
- Xóa button submit khỏi form
- Chỉ giữ lại input field với placeholder
- Submit hoàn toàn bằng phím Enter

### 2. Tối giản input styling
- Bỏ `box-shadow` outline khi focus
- Giữ lại background color nhạt để phân biệt vùng nhập
- Transition tinh tế hơn

### 3. Ẩn tasks hoàn thành vào section riêng
- Tasks hoàn thành không hiện trong danh sách chính
- Tạo section "Đã hoàn thành (X)" dưới tasks chưa làm
- Click để expand/collapse xem danh sách tasks đã hoàn thành
- Có thể uncheck để khôi phục task về danh sách chính

Không có breaking changes - chỉ cải thiện UX hiện tại.

## Impact

### Specs bị ảnh hưởng
- **ui-interface**: MODIFIED requirements về Form và Task display
- **task-management**: MODIFIED requirement về filtering/grouping tasks

### Code bị ảnh hưởng
- **index.html**: Xóa button, thêm collapsible section
- **styles.css**: Simplify input focus state, style collapsed section
- **app.js**: Logic phân nhóm completed/pending tasks, toggle collapse

### User Experience
- **Đơn giản hơn**: Không còn nút "Thêm", chỉ focus vào input
- **Tập trung hơn**: Tasks chưa làm không bị phân tâm bởi tasks đã xong
- **Linh hoạt hơn**: Có thể xem lại tasks đã hoàn thành khi cần, uncheck để khôi phục

## Phạm vi

**Trong scope**:
- Xóa submit button
- Simplify input focus styling
- Tách tasks completed vào collapsible section
- Toggle expand/collapse completed section
- Uncheck task để move về pending

**Ngoài scope**:
- Delete completed tasks permanently
- Archive/export completed tasks
- Statistics về completed tasks
