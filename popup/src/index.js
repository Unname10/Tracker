import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from '~/store/ThemeContext/ThemeProvider';
import DataProvider from './store/DataContext/DataProvider';

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
