import { useEffect } from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
    let storageData;

    useEffect(() => {
        const getStorageData = async () => {
            const storage = await chrome.storage.local.get();
            storageData = storage ? storage : { session: {}, exclusion: [] };
        };
        getStorageData();
    }, []);

    return <DataContext.Provider value={storageData}>{children}</DataContext.Provider>;
}
export default DataProvider;
