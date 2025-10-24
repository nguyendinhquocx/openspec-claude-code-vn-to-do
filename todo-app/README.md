# To-Do App

App quản lý công việc tối giản, theo triết lý "Ít hơn nhưng tốt hơn" của Dieter Rams.

## Tính năng

- ✅ Thêm/xóa/sửa tasks
- ✅ Đánh dấu hoàn thành
- ✅ Lưu trữ local (LocalStorage)
- ✅ UI tối giản, không icon, không nhiễu thị giác
- ✅ Responsive (desktop & mobile)

## Cách sử dụng

1. Mở file `index.html` trên browser
2. Nhập task vào ô input, nhấn Enter hoặc click "Thêm"
3. Click checkbox để đánh dấu hoàn thành
4. Double-click vào text để sửa task
5. Hover vào task và click "×" để xóa

## Cấu trúc code

```
todo-app/
├── index.html    # Cấu trúc HTML
├── styles.css    # Styling (Base-8 spacing, minimal colors)
├── app.js        # Task management logic
├── storage.js    # LocalStorage module
└── README.md     # File này
```

## Data structure

Tasks được lưu trong LocalStorage với key `todoAppTasks`:

```javascript
[
  {
    id: "1234567890",           // Timestamp unique ID
    text: "Học OpenSpec",       // Nội dung task
    completed: false,           // Trạng thái hoàn thành
    createdAt: 1234567890       // Timestamp tạo
  }
]
```

## Testing trong console

```javascript
// Xem tất cả tasks
TodoApp.getAllTasks()

// Thêm task
TodoApp.addTask("Task mới")

// Xóa toàn bộ storage (reset)
TaskStorage.clearStorage()
```

## Design principles

- **Vô hình cho đến khi cần**: Delete button chỉ hiện khi hover
- **Khoảng trắng là sự xa xỉ**: Base-8 spacing system (8, 16, 24, 32px)
- **Hướng dẫn, không trang trí**: Empty state 1 dòng ngắn gọn
- **Thiết kế tốt biến mất**: Inline editing, không modal popup

## Browser support

- Chrome, Firefox, Safari, Edge (modern versions)
- Yêu cầu: LocalStorage enabled
