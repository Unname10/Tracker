import ThemeContext from './ThemeContext';
import { useState, useEffect } from 'react';

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const getSettingStorage = async () => {
            const { setting } = await chrome.storage.local.get({ setting });
            setTheme(setting.theme ? setting.theme : 'dark');
        };
        getSettingStorage();
    }, []);
    const values = { theme, setTheme };

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
}
export default ThemeProvider;
