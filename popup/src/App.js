import Header from '~/components/Header';
import Body from '~/components/Body';
// import Footer from '~/components/Footer';

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
            {/* <Footer /> */}
        </div>
    );
}

export default App;
