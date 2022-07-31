import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DataProvider from './store/DataContext/DataProvider';
import ThemeProvider from './store/ThemeContext/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DataProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </DataProvider>
    </React.StrictMode>
);
