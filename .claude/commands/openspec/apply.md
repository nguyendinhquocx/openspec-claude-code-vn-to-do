---
name: OpenSpec: Apply
description: Triển khai thay đổi OpenSpec đã được phê duyệt và giữ tasks đồng bộ.
category: OpenSpec
tags: [openspec, apply]
---
<!-- OPENSPEC:START -->
**Nguyên tắc bảo vệ**
- **BẮT BUỘC**: Tất cả code comments, ghi chú, và nội dung tài liệu PHẢI viết bằng TIẾNG VIỆT. Xem chi tiết tại `openspec/AGENTS.md`.
- Ưu tiên cách làm đơn giản, tối thiểu trước, chỉ thêm độ phức tạp khi được yêu cầu hoặc thực sự cần thiết.
- Giữ phạm vi thay đổi chặt chẽ theo kết quả được yêu cầu.
- Tham khảo `openspec/AGENTS.md` (nằm trong thư mục `openspec/`—chạy `ls openspec` hoặc `openspec update` nếu không thấy) nếu cần thêm quy ước hoặc làm rõ về OpenSpec.

**Các bước thực hiện**
Theo dõi các bước này như TODOs và hoàn thành từng cái một.
1. Đọc `changes/<id>/proposal.md`, `design.md` (nếu có), và `tasks.md` để xác nhận phạm vi và tiêu chí chấp nhận.
2. Làm việc qua các tasks theo thứ tự, giữ các chỉnh sửa tối thiểu và tập trung vào thay đổi được yêu cầu.
3. Xác nhận hoàn thành trước khi cập nhật trạng thái—đảm bảo mọi mục trong `tasks.md` đã hoàn thành.
4. Cập nhật checklist sau khi tất cả công việc đã xong để mỗi task được đánh dấu `- [x]` và phản ánh thực tế.
5. Tham chiếu `openspec list` hoặc `openspec show <item>` khi cần thêm ngữ cảnh.

**Tham khảo**
- Dùng `openspec show <id> --json --deltas-only` nếu cần thêm ngữ cảnh từ đề xuất trong khi triển khai.
<!-- OPENSPEC:END -->
