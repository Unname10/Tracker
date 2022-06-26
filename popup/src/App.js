import Header from '~/components/Header';
import Body from '~/components/Body';

function storeSessionAndGetStorage() {
    chrome.runtime.connect({ name: 'popup' });
    chrome.runtime.onMessage.addListener((message) => {
        if (message.status === 'Success') {
            let storage = chrome.storage.local.get();
            storage.then((data) => {
                return data;
            });
        }
    });
}

function App() {
    // let storage = storeSessionAndGetStorage();
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    );
}

export default App;
