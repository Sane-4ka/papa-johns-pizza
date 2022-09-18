import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';

import store from './redux/store';
import App from './App';
import './index.css';

const rootElement = document.getElementById("root")

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
} 



