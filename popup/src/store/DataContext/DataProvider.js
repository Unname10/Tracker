import DataContext from './DataContext';

function DataProvider({ children }) {
    let storageData = { session: {}, exclusion: [], setting: {} };
    chrome.storage.local.get((data) => {
        if (Object.keys(data).length !== 0) {
            storageData = data;
        }
    });

    return <DataContext.Provider value={storageData}>{children}</DataContext.Provider>;
}
export default DataProvider;
