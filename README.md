# 🍞 ToastifyLite
A lightweight, customizable, vanilla JS toast notification plugin.

## 🚀 Features
- ✅ No dependencies (works with or without jQuery)
- ✅ Custom positions (top-left, top-right, bottom-center, etc.)
- ✅ Auto-dismiss with progress bar
- ✅ Supports light/dark mode
- ✅ Closable & non-dismissible options

## 📦 Installation

### Via CDN
```html
<link rel="stylesheet" href="toast.css">
<script src="toast.js"></script>
```

### Via NPM
```bash
npm install toastify-lite
```

## 🛠️ Usage
```js
Toast.fire({
  message: "Profile updated!",
  type: "success",
  duration: 4000,
  position: "top-right",
  closable: true,
  dark: false
});
```

## 📁 Demo
Open `demo/index.html` in a browser to try it out.

## 📜 License
MIT © Destiny Chukuma - James Kuma
