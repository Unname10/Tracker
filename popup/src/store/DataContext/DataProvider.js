import { useEffect, useState } from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
    const [storageData, setStorageData] = useState({
        session: {},
        exclusion: [],
        setting: {},
    });

    useEffect(() => {
        chrome.storage.local.get((data) => {
            if (Object.keys(data).length !== 0) {
                if (
                    typeof data.session === 'object'
                        ? Object.keys(data.session).length !== 0
                        : false
                ) {
                    setStorageData((prevData) => ({
                        ...prevData,
                        session: data.session,
                    }));
                }
                if (
                    typeof data.exclusion === 'object'
                        ? data.exclusion.length !== 0
                        : false
                ) {
                    setStorageData((prevData) => ({
                        ...prevData,
                        exclusion: data.exclusion,
                    }));
                }
                if (
                    typeof data.setting === 'object'
                        ? Object.keys(data.setting).length !== 0
                        : false
                ) {
                    setStorageData((prevData) => ({
                        ...prevData,
                        setting: data.setting,
                    }));
                }
            }
        });
    }, []);

    return <DataContext.Provider value={storageData}>{children}</DataContext.Provider>;
}
export default DataProvider;
