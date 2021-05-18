import './_alert.scss';

export const hideAlert = () => {
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
};

export const showAlert = (type, msg, time = 1.7) => {
    hideAlert();
    const markup =
        `<div class="alert ${type}" >
    <i class="fa fa-check fa-2x"></i>
    <span class="message-text">${msg}</span>
    <i class="fa fa-times fa-2x exit-button "></i>
  </div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, time * 1000);
};