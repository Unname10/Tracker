import { useContext } from 'react';
import Header from '~/components/Header';
import Body from '~/components/Body';
import ThemeContext from '~/store/ThemeContext/ThemeContext';
import '~/GlobalState.scss';

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className="App"
            style={{
                backgroundColor: theme === 'dark' ? '#181818' : '#fff',
                transition: 'background-color 0.3s ease',
            }}
        >
            <Header />
            <Body />
        </div>
    );
}

export default App;
