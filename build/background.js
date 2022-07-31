async function checkAndStoreSession(pageAccessTime, hostname) {
    let { exclusion } = await chrome.storage.local.get({ exclusion: [] });
    if (!exclusion.includes(hostname)) {
        let dateObj = new Date();
        let date = `${dateObj.getFullYear()}-${
            dateObj.getMonth() + 1
        }-${dateObj.getDate()}`;
        let { byDate } = await chrome.storage.local.get({ byDate: {} });
        if (!byDate[date]) {
            byDate[date] = {};
        }
        if (!byDate[date][hostname]) {
            byDate[date][hostname] = 0;
        }
        byDate[date][hostname] += dateObj - new Date(pageAccessTime);
        if (byDate[date][hostname]) {
            chrome.storage.local.set({ byDate });
        }
    }
}

chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === 'storeRecord') {
        checkAndStoreSession(msg.pageAccessTime, msg.hostname);
    }
});
