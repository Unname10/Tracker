async function checkAndStoreSession(pageAccessTime, hostname) {
    let dateObj = new Date();
    let date = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
    let { session } = await chrome.storage.local.get({ session: {} });
    if (!session.usageDate) {
        session.usageDate = 0;
    }
    if (!session.usageTime) {
        session.usageTime = 0;
    }
    if (!session[date]) {
        session[date] = {};
        session.usageDate += 1;
    }
    if (!session[date][hostname]) {
        session[date][hostname] = 0;
    }
    session[date][hostname] += dateObj - new Date(pageAccessTime);
    session.usageTime += dateObj - new Date(pageAccessTime);
    chrome.storage.local.set({ session });
}

chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === 'storeRecord') {
        checkAndStoreSession(msg.pageAccessTime, msg.hostname);
    }
});
