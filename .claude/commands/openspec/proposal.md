---
name: OpenSpec: Proposal
description: Tạo đề xuất thay đổi OpenSpec mới và validate nghiêm ngặt.
category: OpenSpec
tags: [openspec, change]
---
<!-- OPENSPEC:START -->
**Nguyên tắc bảo vệ**
- **BẮT BUỘC**: Tất cả nội dung trong `proposal.md`, `tasks.md`, `design.md`, và `spec.md` PHẢI viết bằng TIẾNG VIỆT (trừ headers cấu trúc và lệnh). Xem chi tiết tại `openspec/AGENTS.md`.
- Ưu tiên cách làm đơn giản, tối thiểu trước, chỉ thêm độ phức tạp khi được yêu cầu hoặc thực sự cần thiết.
- Giữ phạm vi thay đổi chặt chẽ theo kết quả được yêu cầu.
- Tham khảo `openspec/AGENTS.md` (nằm trong thư mục `openspec/`—chạy `ls openspec` hoặc `openspec update` nếu không thấy) nếu cần thêm quy ước hoặc làm rõ về OpenSpec.
- Xác định bất kỳ chi tiết mơ hồ nào và hỏi thêm câu hỏi cần thiết trước khi chỉnh sửa file.

**Các bước thực hiện**
1. Xem lại `openspec/project.md`, chạy `openspec list` và `openspec list --specs`, kiểm tra code hoặc docs liên quan (ví dụ qua `rg`/`ls`) để làm căn cứ cho đề xuất dựa trên hành vi hiện tại; ghi chú bất kỳ khoảng trống nào cần làm rõ.
2. Chọn một `change-id` duy nhất bắt đầu bằng động từ và tạo khung `proposal.md`, `tasks.md`, và `design.md` (khi cần) trong `openspec/changes/<id>/`.
3. Ánh xạ thay đổi thành các capabilities hoặc requirements cụ thể, chia nhỏ các nỗ lực đa phạm vi thành các spec deltas riêng biệt với mối quan hệ và trình tự rõ ràng.
4. Ghi lại lý do kiến trúc trong `design.md` khi giải pháp trải rộng nhiều hệ thống, giới thiệu pattern mới, hoặc yêu cầu thảo luận đánh đổi trước khi commit vào specs.
5. Soạn thảo spec deltas trong `changes/<id>/specs/<capability>/spec.md` (một thư mục cho mỗi capability) sử dụng `## ADDED|MODIFIED|REMOVED Requirements` với ít nhất một `#### Scenario:` cho mỗi requirement và tham chiếu chéo các capabilities liên quan khi cần.
6. Soạn thảo `tasks.md` như một danh sách có thứ tự các mục công việc nhỏ, có thể kiểm chứng, mang lại tiến độ người dùng nhìn thấy được, bao gồm validation (tests, tooling), và làm nổi bật các dependencies hoặc công việc có thể song song hóa.
7. Validate với `openspec validate <id> --strict` và giải quyết mọi vấn đề trước khi chia sẻ đề xuất.

**Tham khảo**
- Dùng `openspec show <id> --json --deltas-only` hoặc `openspec show <spec> --type spec` để kiểm tra chi tiết khi validation thất bại.
- Tìm kiếm các requirements hiện có với `rg -n "Requirement:|Scenario:" openspec/specs` trước khi viết mới.
- Khám phá codebase với `rg <keyword>`, `ls`, hoặc đọc file trực tiếp để đề xuất phù hợp với thực tế triển khai hiện tại.
<!-- OPENSPEC:END -->
