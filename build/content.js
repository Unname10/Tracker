const startRecord = () => {
    try {
        chrome.runtime.sendMessage('startRecord');
    } catch (e) {}
};
const stopRecord = () => {
    try {
        chrome.runtime.sendMessage('stopRecord');
    } catch (e) {}
};
window.addEventListener('load', () => {
    if (!document.hidden) {
        startRecord();
    }
});
window.addEventListener('blur', () => {
    stopRecord();
});
window.addEventListener('focus', () => {
    startRecord();
});
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
    stopRecord();
});
