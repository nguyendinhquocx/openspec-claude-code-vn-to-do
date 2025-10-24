# Hướng dẫn OpenSpec

Hướng dẫn cho AI coding assistants sử dụng OpenSpec để phát triển theo specs.

## QUAN TRỌNG: Ngôn ngữ Sử dụng

**BẮT BUỘC PHẢI DÙNG TIẾNG VIỆT** cho TẤT CẢ nội dung trong các file:
- `proposal.md` - Toàn bộ nội dung bằng tiếng Việt
- `tasks.md` - Toàn bộ nội dung bằng tiếng Việt
- `design.md` - Toàn bộ nội dung bằng tiếng Việt
- `spec.md` - Toàn bộ nội dung bằng tiếng Việt (trừ headers cấu trúc như `## ADDED Requirements`, `#### Scenario:`)
- Ghi chú code - Tiếng Việt
- Comments - Tiếng Việt

**Ngoại lệ** (giữ nguyên tiếng Anh):
- Headers cấu trúc: `## ADDED Requirements`, `## MODIFIED Requirements`, `## REMOVED Requirements`, `## RENAMED Requirements`
- Scenario headers: `#### Scenario:`
- Từ khóa kỹ thuật: `WHEN`, `THEN` (HOẶC CÁC TỪ KHÁC MÀY NHẬN THẤY QUAN TRỌNG)
- Tên biến, functions, class names trong code
- Command line instructions và paths

**Ví dụ đúng:**
```markdown
## ADDED Requirements
### Requirement: Xác thực Người dùng
Hệ thống PHẢI xác thực người dùng trước khi cho phép truy cập.

#### Scenario: Đăng nhập thành công
- **WHEN** người dùng nhập đúng tên đăng nhập và mật khẩu
- **THEN** hệ thống cấp quyền truy cập và tạo session token
```

## TL;DR Checklist nhanh

- Tìm kiếm công việc hiện có: `openspec spec list --long`, `openspec list` (chỉ dùng `rg` cho tìm kiếm full-text)
- Quyết định phạm vi: capability mới vs sửa capability hiện có
- Chọn một `change-id` duy nhất: kebab-case, bắt đầu bằng động từ (`add-`, `update-`, `remove-`, `refactor-`)
- Tạo khung: `proposal.md`, `tasks.md`, `design.md` (chỉ khi cần), và delta specs cho mỗi capability bị ảnh hưởng
- Viết deltas: dùng `## ADDED|MODIFIED|REMOVED|RENAMED Requirements`; bao gồm ít nhất một `#### Scenario:` cho mỗi requirement
- Validate: `openspec validate [change-id] --strict` và fix các vấn đề
- Yêu cầu phê duyệt: Không bắt đầu triển khai cho đến khi proposal được phê duyệt

## Quy trình 3 giai đoạn

### Giai đoạn 1: Tạo Changes

Tạo proposal khi mày cần:
- Thêm features hoặc functionality
- Thực hiện breaking changes (API, schema)
- Thay đổi architecture hoặc patterns
- Tối ưu performance (thay đổi behavior)
- Cập nhật security patterns

Triggers (ví dụ):
- "Giúp tao tạo change proposal"
- "Giúp tao lên kế hoạch thay đổi"
- "Giúp tao tạo proposal"
- "Tao muốn tạo spec proposal"
- "Tao muốn tạo spec"

Hướng dẫn khớp lỏng:
- Chứa một trong: `proposal`, `change`, `spec`
- Với một trong: `tạo`, `lên kế hoạch`, `làm`, `bắt đầu`, `giúp`

Bỏ qua proposal cho:
- Bug fixes (khôi phục behavior dự định)
- Typos, formatting, comments
- Dependency updates (không breaking)
- Thay đổi configuration
- Tests cho behavior hiện có

**Quy trình làm việc**
1. Xem lại `openspec/project.md`, `openspec list`, và `openspec list --specs` để hiểu ngữ cảnh hiện tại.
2. Chọn một `change-id` duy nhất bắt đầu bằng động từ và tạo khung `proposal.md`, `tasks.md`, `design.md` tùy chọn, và spec deltas trong `openspec/changes/<id>/`.
3. Soạn thảo spec deltas sử dụng `## ADDED|MODIFIED|REMOVED Requirements` với ít nhất một `#### Scenario:` cho mỗi requirement.
4. Chạy `openspec validate <id> --strict` và giải quyết mọi vấn đề trước khi chia sẻ proposal.

### Giai đoạn 2: Triển khai Changes

Theo dõi các bước này như TODOs và hoàn thành từng cái một.
1. **Đọc proposal.md** - Hiểu cái gì đang được build
2. **Đọc design.md** (nếu tồn tại) - Xem lại các quyết định kỹ thuật
3. **Đọc tasks.md** - Lấy checklist triển khai
4. **Triển khai tasks theo thứ tự** - Hoàn thành theo đúng thứ tự
5. **Xác nhận hoàn thành** - Đảm bảo mọi mục trong `tasks.md` đã hoàn thành trước khi cập nhật trạng thái
6. **Cập nhật checklist** - Sau khi tất cả công việc hoàn tất, đặt mọi task thành `- [x]` để danh sách phản ánh thực tế
7. **Cổng phê duyệt** - Không bắt đầu triển khai cho đến khi proposal được review và phê duyệt

### Giai đoạn 3: Lưu trữ Changes

Sau khi deploy, tạo PR riêng để:
- Di chuyển `changes/[name]/` → `changes/archive/YYYY-MM-DD-[name]/`
- Cập nhật `specs/` nếu capabilities thay đổi
- Dùng `openspec archive <change-id> --skip-specs --yes` cho changes chỉ liên quan tooling (luôn truyền change ID một cách rõ ràng)
- Chạy `openspec validate --strict` để xác nhận change đã lưu trữ pass checks

## Trước mọi Task

**Checklist Ngữ cảnh:**
- [ ] Đọc specs liên quan trong `specs/[capability]/spec.md`
- [ ] Kiểm tra pending changes trong `changes/` để tránh xung đột
- [ ] Đọc `openspec/project.md` cho các quy ước
- [ ] Chạy `openspec list` để xem các changes đang hoạt động
- [ ] Chạy `openspec list --specs` để xem các capabilities hiện có

**Trước khi Tạo Specs:**
- Luôn kiểm tra xem capability đã tồn tại chưa
- Ưu tiên sửa specs hiện có hơn tạo bản sao
- Dùng `openspec show [spec]` để xem lại trạng thái hiện tại
- Nếu yêu cầu mơ hồ, hỏi 1–2 câu làm rõ trước khi tạo khung

### Hướng dẫn Tìm kiếm

- Liệt kê specs: `openspec spec list --long` (hoặc `--json` cho scripts)
- Liệt kê changes: `openspec list` (hoặc `openspec change list --json` - deprecated nhưng vẫn có)
- Hiển thị chi tiết:
  - Spec: `openspec show <spec-id> --type spec` (dùng `--json` cho filters)
  - Change: `openspec show <change-id> --json --deltas-only`
- Tìm kiếm full-text (dùng ripgrep): `rg -n "Requirement:|Scenario:" openspec/specs`

## Bắt đầu Nhanh

### Lệnh CLI

```bash
# Lệnh thiết yếu
openspec list                  # Liệt kê các changes đang hoạt động
openspec list --specs          # Liệt kê specifications
openspec show [item]           # Hiển thị change hoặc spec
openspec validate [item]       # Validate changes hoặc specs
openspec archive <change-id> [--yes|-y]   # Lưu trữ sau khi deploy (thêm --yes cho chạy không tương tác)

# Quản lý project
openspec init [path]           # Khởi tạo OpenSpec
openspec update [path]         # Cập nhật instruction files

# Chế độ tương tác
openspec show                  # Nhắc để chọn
openspec validate              # Chế độ bulk validation

# Debugging
openspec show [change] --json --deltas-only
openspec validate [change] --strict
```

### Command Flags

- `--json` - Output có thể đọc bằng máy
- `--type change|spec` - Phân biệt các items
- `--strict` - Validation toàn diện
- `--no-interactive` - Tắt prompts
- `--skip-specs` - Lưu trữ mà không cập nhật spec
- `--yes`/`-y` - Bỏ qua confirmation prompts (lưu trữ không tương tác)

## Cấu trúc Thư mục

```
openspec/
├── project.md              # Quy ước project
├── specs/                  # Sự thật hiện tại - cái gì ĐÃ được build
│   └── [capability]/       # Single focused capability
│       ├── spec.md         # Requirements và scenarios
│       └── design.md       # Technical patterns
├── changes/                # Proposals - cái gì NÊN thay đổi
│   ├── [change-name]/
│   │   ├── proposal.md     # Tại sao, cái gì, impact
│   │   ├── tasks.md        # Checklist triển khai
│   │   ├── design.md       # Quyết định kỹ thuật (tùy chọn; xem tiêu chí)
│   │   └── specs/          # Delta changes
│   │       └── [capability]/
│   │           └── spec.md # ADDED/MODIFIED/REMOVED
│   └── archive/            # Completed changes
```

## Tạo Change Proposals

### Decision Tree

```
Yêu cầu mới?
├─ Bug fix khôi phục spec behavior? → Fix trực tiếp
├─ Typo/format/comment? → Fix trực tiếp
├─ New feature/capability? → Tạo proposal
├─ Breaking change? → Tạo proposal
├─ Architecture change? → Tạo proposal
└─ Không rõ? → Tạo proposal (an toàn hơn)
```

### Cấu trúc Proposal

1. **Tạo thư mục:** `changes/[change-id]/` (kebab-case, bắt đầu bằng động từ, duy nhất)

2. **Viết proposal.md:**
```markdown
## Tại sao
[1-2 câu về vấn đề/cơ hội bằng tiếng Việt]

## Cái gì Thay đổi
- [Danh sách bullet các thay đổi bằng tiếng Việt]
- [Đánh dấu breaking changes với **BREAKING**]

## Impact
- Specs bị ảnh hưởng: [liệt kê capabilities bằng tiếng Việt]
- Code bị ảnh hưởng: [key files/systems]
```

3. **Tạo spec deltas:** `specs/[capability]/spec.md`
```markdown
## ADDED Requirements
### Requirement: Tên Feature bằng tiếng Việt
Hệ thống PHẢI cung cấp... [mô tả bằng tiếng Việt]

#### Scenario: Trường hợp thành công
- **WHEN** người dùng thực hiện hành động [mô tả bằng tiếng Việt]
- **THEN** kết quả mong đợi [mô tả bằng tiếng Việt]

## MODIFIED Requirements
### Requirement: Tên Feature Hiện có
[Toàn bộ requirement đã sửa bằng tiếng Việt]

## REMOVED Requirements
### Requirement: Tên Feature Cũ
**Lý do**: [Tại sao xóa - tiếng Việt]
**Migration**: [Cách xử lý - tiếng Việt]
```
Nếu nhiều capabilities bị ảnh hưởng, tạo nhiều delta files trong `changes/[change-id]/specs/<capability>/spec.md`—một cho mỗi capability.

4. **Tạo tasks.md:**
```markdown
## 1. Triển khai
- [ ] 1.1 Tạo database schema
- [ ] 1.2 Triển khai API endpoint
- [ ] 1.3 Thêm frontend component
- [ ] 1.4 Viết tests
```
**Lưu ý**: Tất cả mô tả tasks PHẢI bằng tiếng Việt.

5. **Tạo design.md khi cần:**
Tạo `design.md` nếu bất kỳ điều nào sau đây áp dụng; nếu không thì bỏ qua:
- Thay đổi cắt ngang (nhiều services/modules) hoặc một architectural pattern mới
- External dependency mới hoặc thay đổi data model đáng kể
- Độ phức tạp về security, performance, hoặc migration
- Sự mơ hồ có lợi từ quyết định kỹ thuật trước khi coding

Khung `design.md` tối thiểu:
```markdown
## Ngữ cảnh
[Background, constraints, stakeholders]

## Mục tiêu / Không phải Mục tiêu
- Mục tiêu: [...]
- Không phải Mục tiêu: [...]

## Quyết định
- Quyết định: [Cái gì và tại sao]
- Các lựa chọn đã xem xét: [Options + lý do]

## Rủi ro / Đánh đổi
- [Rủi ro] → Giảm thiểu

## Kế hoạch Migration
[Các bước, rollback]

## Câu hỏi Mở
- [...]
```

## Format File Spec

### Quan trọng: Format Scenario

**ĐÚNG** (dùng #### headers):
```markdown
#### Scenario: Đăng nhập người dùng thành công
- **WHEN** cung cấp credentials hợp lệ
- **THEN** trả về JWT token
```

**SAI** (đừng dùng bullets hoặc bold):
```markdown
- **Scenario: Đăng nhập người dùng**  ❌
**Scenario**: Đăng nhập người dùng     ❌
### Scenario: Đăng nhập người dùng      ❌
```

Mọi requirement PHẢI có ít nhất một scenario.

### Cách viết Requirement

- Dùng PHẢI/BẮT BUỘC cho normative requirements (tránh nên/có thể trừ khi có chủ đích không normative)

### Delta Operations

- `## ADDED Requirements` - Capabilities mới
- `## MODIFIED Requirements` - Behavior đã thay đổi
- `## REMOVED Requirements` - Features deprecated
- `## RENAMED Requirements` - Thay đổi tên

Headers khớp với `trim(header)` - khoảng trắng bị bỏ qua.

#### Khi nào dùng ADDED vs MODIFIED

- ADDED: Giới thiệu một capability hoặc sub-capability mới có thể đứng độc lập như một requirement. Ưu tiên ADDED khi thay đổi là trực giao (ví dụ, thêm "Cấu hình Slash Command") thay vì thay đổi ngữ nghĩa của requirement hiện có.
- MODIFIED: Thay đổi behavior, scope, hoặc tiêu chí chấp nhận của requirement hiện có. Luôn paste toàn bộ nội dung requirement đã cập nhật (header + tất cả scenarios). Archiver sẽ thay thế toàn bộ requirement bằng cái mày cung cấp ở đây; partial deltas sẽ làm mất các chi tiết trước đó.
- RENAMED: Dùng khi chỉ tên thay đổi. Nếu mày cũng thay đổi behavior, dùng RENAMED (tên) cộng MODIFIED (nội dung) tham chiếu tên mới.

Sai lầm thường gặp: Dùng MODIFIED để thêm một concern mới mà không bao gồm text trước đó. Điều này gây mất chi tiết tại thời điểm archive. Nếu mày không thực sự thay đổi requirement hiện có, thêm requirement mới trong ADDED thay vào đó.

Viết requirement MODIFIED đúng cách:
1) Xác định requirement hiện có trong `openspec/specs/<capability>/spec.md`.
2) Copy toàn bộ requirement block (từ `### Requirement: ...` qua các scenarios của nó).
3) Paste nó trong `## MODIFIED Requirements` và edit để phản ánh behavior mới.
4) Đảm bảo header text khớp chính xác (không phân biệt khoảng trắng) và giữ ít nhất một `#### Scenario:`.

Ví dụ cho RENAMED:
```markdown
## RENAMED Requirements
- FROM: `### Requirement: Đăng nhập`
- TO: `### Requirement: Xác thực Người dùng`
```

## Khắc phục Sự cố

### Lỗi Thường gặp

**"Change must have at least one delta"**
- Kiểm tra `changes/[name]/specs/` tồn tại với .md files
- Xác minh files có operation prefixes (## ADDED Requirements)

**"Requirement must have at least one scenario"**
- Kiểm tra scenarios dùng format `#### Scenario:` (4 dấu thăng)
- Đừng dùng bullet points hoặc bold cho scenario headers

**Silent scenario parsing failures**
- Format chính xác yêu cầu: `#### Scenario: Tên`
- Debug với: `openspec show [change] --json --deltas-only`

### Mẹo Validation

```bash
# Luôn dùng strict mode cho comprehensive checks
openspec validate [change] --strict

# Debug delta parsing
openspec show [change] --json | jq '.deltas'

# Kiểm tra requirement cụ thể
openspec show [spec] --json -r 1
```

## Happy Path Script

```bash
# 1) Khám phá trạng thái hiện tại
openspec spec list --long
openspec list
# Tìm kiếm full-text tùy chọn:
# rg -n "Requirement:|Scenario:" openspec/specs
# rg -n "^#|Requirement:" openspec/changes

# 2) Chọn change id và tạo khung
CHANGE=add-two-factor-auth
mkdir -p openspec/changes/$CHANGE/{specs/auth}
printf "## Tại sao\n...\n\n## Cái gì Thay đổi\n- ...\n\n## Impact\n- ...\n" > openspec/changes/$CHANGE/proposal.md
printf "## 1. Triển khai\n- [ ] 1.1 ...\n" > openspec/changes/$CHANGE/tasks.md

# 3) Thêm deltas (ví dụ)
cat > openspec/changes/$CHANGE/specs/auth/spec.md << 'EOF'
## ADDED Requirements
### Requirement: Xác thực Hai yếu tố
Người dùng PHẢI cung cấp yếu tố thứ hai khi đăng nhập.

#### Scenario: OTP bắt buộc
- **WHEN** credentials hợp lệ được cung cấp
- **THEN** một OTP challenge được yêu cầu
EOF

# 4) Validate
openspec validate $CHANGE --strict
```

## Ví dụ Multi-Capability

```
openspec/changes/add-2fa-notify/
├── proposal.md
├── tasks.md
└── specs/
    ├── auth/
    │   └── spec.md   # ADDED: Xác thực Hai yếu tố
    └── notifications/
        └── spec.md   # ADDED: OTP email notification
```

auth/spec.md
```markdown
## ADDED Requirements
### Requirement: Xác thực Hai yếu tố
...
```

notifications/spec.md
```markdown
## ADDED Requirements
### Requirement: OTP Email Notification
...
```

## Best Practices

### Đơn giản Trước tiên

- Mặc định <100 dòng code mới
- Triển khai single-file cho đến khi chứng minh không đủ
- Tránh frameworks mà không có lý do rõ ràng
- Chọn patterns nhàm chán, đã chứng minh

### Triggers Độ phức tạp

Chỉ thêm độ phức tạp với:
- Dữ liệu performance cho thấy giải pháp hiện tại quá chậm
- Yêu cầu scale cụ thể (>1000 users, >100MB data)
- Nhiều use cases đã chứng minh yêu cầu abstraction

### Tham chiếu Rõ ràng

- Dùng format `file.ts:42` cho vị trí code
- Tham chiếu specs như `specs/auth/spec.md`
- Link các changes và PRs liên quan

### Đặt tên Capability

- Dùng verb-noun: `user-auth`, `payment-capture`
- Single purpose cho mỗi capability
- Quy tắc hiểu trong 10 phút
- Split nếu mô tả cần "VÀ"

### Đặt tên Change ID

- Dùng kebab-case, ngắn và mô tả: `add-two-factor-auth`
- Ưu tiên prefixes bắt đầu bằng động từ: `add-`, `update-`, `remove-`, `refactor-`
- Đảm bảo tính duy nhất; nếu đã được lấy, thêm `-2`, `-3`, v.v.

## Hướng dẫn Chọn Tool

| Task | Tool | Tại sao |
|------|------|---------|
| Tìm files theo pattern | Glob | Fast pattern matching |
| Tìm kiếm code content | Grep | Optimized regex search |
| Đọc files cụ thể | Read | Direct file access |
| Khám phá scope không biết | Task | Multi-step investigation |

## Khôi phục Lỗi

### Xung đột Changes

1. Chạy `openspec list` để xem các changes đang hoạt động
2. Kiểm tra specs chồng chéo
3. Phối hợp với các change owners
4. Xem xét kết hợp proposals

### Validation Failures

1. Chạy với `--strict` flag
2. Kiểm tra JSON output cho chi tiết
3. Xác minh spec file format
4. Đảm bảo scenarios được format đúng

### Thiếu Ngữ cảnh

1. Đọc project.md trước
2. Kiểm tra specs liên quan
3. Xem lại archives gần đây
4. Hỏi để làm rõ

## Tham khảo Nhanh

### Chỉ báo Giai đoạn

- `changes/` - Đề xuất, chưa được build
- `specs/` - Đã build và deploy
- `archive/` - Completed changes

### Mục đích Files

- `proposal.md` - Tại sao và cái gì
- `tasks.md` - Các bước triển khai
- `design.md` - Quyết định kỹ thuật
- `spec.md` - Requirements và behavior

### CLI Thiết yếu

```bash
openspec list              # Cái gì đang trong tiến trình?
openspec show [item]       # Xem chi tiết
openspec validate --strict # Có đúng không?
openspec archive <change-id> [--yes|-y]  # Đánh dấu hoàn thành (thêm --yes cho automation)
```

Nhớ: Specs là sự thật. Changes là đề xuất. Giữ chúng đồng bộ.
