---
name: OpenSpec: Archive
description: Lưu trữ thay đổi OpenSpec đã deploy và cập nhật specs.
category: OpenSpec
tags: [openspec, archive]
---
<!-- OPENSPEC:START -->
**Nguyên tắc bảo vệ**
- Ưu tiên cách làm đơn giản, tối thiểu trước, chỉ thêm độ phức tạp khi được yêu cầu hoặc thực sự cần thiết.
- Giữ phạm vi thay đổi chặt chẽ theo kết quả được yêu cầu.
- Tham khảo `openspec/AGENTS.md` (nằm trong thư mục `openspec/`—chạy `ls openspec` hoặc `openspec update` nếu không thấy) nếu cần thêm quy ước hoặc làm rõ về OpenSpec.

**Các bước thực hiện**
1. Xác định change ID cần lưu trữ:
   - Nếu prompt này đã bao gồm change ID cụ thể (ví dụ trong block `<ChangeId>` được điền bởi slash-command arguments), dùng giá trị đó sau khi trim khoảng trắng.
   - Nếu cuộc trò chuyện tham chiếu change một cách lỏng lẻo (ví dụ bằng title hoặc summary), chạy `openspec list` để hiện các ID có thể, chia sẻ các ứng viên liên quan, và xác nhận cái nào người dùng muốn.
   - Nếu không, xem lại cuộc trò chuyện, chạy `openspec list`, và hỏi người dùng change nào cần lưu trữ; đợi change ID được xác nhận trước khi tiếp tục.
   - Nếu vẫn không thể xác định được một change ID duy nhất, dừng lại và nói với người dùng là chưa thể lưu trữ gì.
2. Validate change ID bằng cách chạy `openspec list` (hoặc `openspec show <id>`) và dừng nếu change bị thiếu, đã được lưu trữ, hoặc chưa sẵn sàng để lưu trữ.
3. Chạy `openspec archive <id> --yes` để CLI di chuyển change và áp dụng spec updates mà không cần nhắc (chỉ dùng `--skip-specs` cho công việc chỉ liên quan đến tooling).
4. Xem lại command output để xác nhận các target specs đã được cập nhật và change đã đến `changes/archive/`.
5. Validate với `openspec validate --strict` và kiểm tra với `openspec show <id>` nếu có gì trông không ổn.

**Tham khảo**
- Dùng `openspec list` để xác nhận change IDs trước khi lưu trữ.
- Kiểm tra specs đã làm mới với `openspec list --specs` và giải quyết bất kỳ vấn đề validation nào trước khi bàn giao.
<!-- OPENSPEC:END -->
