import ThemeContext from './ThemeContext';
import { useState, useEffect, useContext } from 'react';
import DataContext from '~/store/DataContext/DataContext';

function ThemeProvider({ children }) {
    const { setting } = useContext(DataContext);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (setting.theme ? setting.theme !== theme : false) {
            setTheme(setting.theme);
        }
    }, [setting]);

    const setAndStoreTheme = () => {
        setTheme((prevTheme) => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            chrome.storage.local.set({ setting: { ...setting, theme: nextTheme } });
            return nextTheme;
        });
    };

    const values = { theme, setAndStoreTheme };

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
}
export default ThemeProvider;
