````markdown
# 🍞 ToastifyLite

[![npm version](https://img.shields.io/npm/v/toastify-lite.svg)](https://www.npmjs.com/package/toastify-lite)
[![GitHub stars](https://img.shields.io/github/stars/iamkumadev/toastify-lite?style=social)](https://github.com/iamkumadev/toastify-lite/stargazers)
[![license](https://img.shields.io/github/license/iamkumadev/toastify-lite)](LICENSE)
[![Demo](https://img.shields.io/badge/demo-live-green)](https://iamkumadev.github.io/toastify-lite/)

⚡ Lightweight, dependency-free toast notification plugin built with vanilla JavaScript and CSS.

---

## 🚀 Features

- ✅ Zero dependencies (works with or without jQuery)
- ✅ Auto-dismiss with animated progress bar
- ✅ Supports dark and light mode
- ✅ Multiple positions (`top-right`, `bottom-left`, etc.)
- ✅ Closable or sticky toasts
- ✅ Easy to customize with CSS variables or overrides
- ✅ Works in all modern browsers

---

## 📦 Installation

### 📁 Direct Download

- [Download ZIP](https://github.com/iamkumadev/toastify-lite/archive/refs/heads/main.zip)
- Add `toast.js` and `toast.css` to your project

### 📡 CDN

```html
<!-- Latest via jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-lite@1.0.0/dist/toast.css">
<script src="https://cdn.jsdelivr.net/npm/toastify-lite@1.0.0/dist/toast.js"></script>
````

### 📦 NPM

```bash
npm install toastify-lite
```

---

## 🛠️ Usage

```js
Toast.fire({
  message: "✅ Profile updated successfully!",
  type: "success",
  position: "top-right",
  duration: 4000,
  closable: true,
  dark: false
});
```

---

## 🔧 API Options

| Option     | Type      | Description                           | Default     |
| ---------- | --------- | ------------------------------------- | ----------- |
| `message`  | `string`  | The content of the toast              | —           |
| `type`     | `string`  | `success`, `error`, `info`, `warning` | `info`      |
| `duration` | `number`  | Time (ms) before auto-dismiss         | `3000`      |
| `position` | `string`  | `top-right`, `bottom-left`, etc.      | `top-right` |
| `closable` | `boolean` | Whether to show a close `×` button    | `true`      |
| `dark`     | `boolean` | Enable dark mode styling              | `false`     |

---

## 📁 Demo

👉 **[Live Demo on GitHub Pages](https://iamkumadev.github.io/toastify-lite/)**
Try out different toast types and settings in real-time.

---

## 🧪 Example Buttons (HTML)

```html
<button onclick="Toast.fire({ message: 'Done!', type: 'success' })">Success</button>
<button onclick="Toast.fire({ message: 'Oops!', type: 'error', dark: true })">Error (Dark)</button>
<button onclick="Toast.fire({ message: 'Just letting you know...', type: 'info' })">Info</button>
```

---

## 🤝 Contributing

Got feedback or want to suggest improvements?

* Open an [issue](https://github.com/iamkumadev/toastify-lite/issues)
* Or submit a [pull request](https://github.com/iamkumadev/toastify-lite/pulls)

---

## 📜 License

**MIT License**
© 2024 [Destiny Chukuma – James Kuma](https://github.com/iamkumadev)

```

---

Let me know when you've added and pushed this version.  
Then we’ll tackle the final piece: **minified dist + NPM publishing** 🚀
```
