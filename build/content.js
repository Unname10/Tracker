let pageAccessTime;

const stopRecord = () => {
    try {
        chrome.runtime.sendMessage({
            action: 'storeRecord',
            pageAccessTime,
            hostname: window.location.hostname,
        });
    } catch (e) {}
};

window.addEventListener('load', () => {
    if (!document.hidden) {
        // startRecord();
        pageAccessTime = new Date();
    }
});
window.addEventListener('focus', () => {
    pageAccessTime = new Date();
});
window.addEventListener('blur', () => {
    stopRecord();
});
window.addEventListener('beforeunload', function (e) {
    stopRecord();
});
