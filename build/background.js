let tabActiveId;
let windowActiveId;
let pageAccessTime;
let pageLeaveTime;
let url;
let hostname;

async function checkAndStoreSession() {
    if (pageAccessTime) {
        //! Đặt thời gian rời khỏi trang
        pageLeaveTime = Date.now();
        //! Lưu trữ phiên truy cập trước
        let dateObj = new Date();
        let date = `${dateObj.getFullYear()}-${
            dateObj.getMonth() + 1
        }-${dateObj.getDate()}`;
        let { session } = await chrome.storage.local.get({ session: {} });
        if (!session[date]) {
            session[date] = {};
        }
        if (!session[date][hostname]) {
            session[date][hostname] = 0;
        }
        session[date][hostname] += pageLeaveTime - pageAccessTime;
        chrome.storage.local.set({ session });
    }
}

async function startSession() {
    //! Lấy thông tin của tab hiện tại
    let [tab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
    });

    //! Kiểm tra url xem có hợp lệ không
    if (tab ? tab.url.startsWith('http') : false) {
        url = tab.url;
        let urlObj = new URL(url);
        hostname = urlObj.hostname;
        pageAccessTime = Date.now();
    } else {
        pageAccessTime = undefined;
        pageLeaveTime = undefined;
        url = undefined;
    }
}

//@ Sự kiện thay đổi tabs
chrome.tabs.onActivated.addListener(async (tabInfo) => {
    tabActiveId = tabInfo.tabId;
    await checkAndStoreSession();
    await startSession();
});

//@ Sự kiện thay đổi window
chrome.windows.onFocusChanged.addListener(async (windowId) => {
    await checkAndStoreSession();
    if (windowId !== -1) {
        windowActiveId = windowId;
        await startSession();
    }
});

//@ Sự kiện thay đổi url
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (
        tabId === tabActiveId &&
        tab.windowId === windowActiveId &&
        changeInfo.status === 'complete' &&
        tab.url !== url
    ) {
        await checkAndStoreSession();
        await startSession();
    }
});

chrome.action.onClicked.addListener(async () => {
    await checkAndStoreSession();
});
