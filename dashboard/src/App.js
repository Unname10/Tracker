import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from '~/components/DefaultLayout';
import { routes } from '~/Routes';
import './GlobalState.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {routes.map((page, index) => {
                        const PageElement = page.element;
                        return (
                            <Route
                                key={index}
                                path={page.path}
                                element={
                                    <DefaultLayout>
                                        <PageElement />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
