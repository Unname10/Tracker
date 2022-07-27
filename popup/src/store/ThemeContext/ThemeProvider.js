import ThemeContext from './ThemeContext';
import { useState, useEffect } from 'react';

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        chrome.storage.local.get((data) => {
            if (typeof data.setting === 'object' ? data.setting.theme : false) {
                setTheme(data.setting.theme);
            }
        });
    }, []);

    const values = { theme, setTheme };

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
}
export default ThemeProvider;
