const Toast = (function () {
  const defaults = {
    message: '',
    type: 'info',
    duration: 4000,
    position: 'top-right',
    closable: true,
    icon: null,
    dark: false,
  };

  function createContainer(position) {
    let container = document.querySelector(`.toast-container.${position}`);
    if (!container) {
      container = document.createElement('div');
      container.className = `toast-container ${position}`;
      document.body.appendChild(container);
    }
    return container;
  }

  function createToast(options) {
    const config = { ...defaults, ...options };
    const container = createContainer(config.position);

    const toast = document.createElement('div');
    toast.className = `toast ${config.type} ${config.dark ? 'dark' : ''}`;

    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️',
    };

    const toastIcon = document.createElement('div');
    toastIcon.className = 'toast-icon';
    toastIcon.innerHTML = config.icon || icons[config.type] || '🔔';

    const toastMessage = document.createElement('div');
    toastMessage.className = 'toast-message';
    toastMessage.textContent = config.message;

    const progress = document.createElement('div');
    progress.className = 'toast-progress';
    progress.style.animation = `progressBar ${config.duration}ms linear forwards`;

    const style = document.createElement('style');
    style.textContent = `@keyframes progressBar { from { width: 100%; } to { width: 0%; } }`;
    document.head.appendChild(style);

    toast.appendChild(toastIcon);
    toast.appendChild(toastMessage);

    if (config.closable) {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'toast-close';
      closeBtn.innerHTML = '&times;';
      closeBtn.onclick = () => container.removeChild(toast);
      toast.appendChild(closeBtn);
    }

    toast.appendChild(progress);
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        if (toast.parentNode) container.removeChild(toast);
      }, 300);
    }, config.duration);
  }

  return { fire: createToast };
})();