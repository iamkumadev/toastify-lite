# 🍞 ToastifyLite

[![npm](https://img.shields.io/npm/v/toastify-lite.svg)](https://www.npmjs.com/package/toastify-lite)
[![GitHub stars](https://img.shields.io/github/stars/iamkumadev/toastify-lite.svg?style=social)](https://github.com/iamkumadev/toastify-lite/stargazers)
[![License](https://img.shields.io/github/license/iamkumadev/toastify-lite.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/demo-live-green)](https://iamkumadev.github.io/toastify-lite/)

Lightweight, dependency-free JavaScript toast notification plugin.


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
