import ThemeContext from './ThemeContext';
import { useState } from 'react';

function ThemeProvider({ children }) {
    let defaultTheme = 'dark';
    chrome.storage.local.get((data) => {
        if (data.setting ? data.setting.theme : data.setting) {
            defaultTheme = data.setting.theme;
        }
    });

    const [theme, setTheme] = useState(defaultTheme);

    const values = { theme, setTheme };

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
}
export default ThemeProvider;
