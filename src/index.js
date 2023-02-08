import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/index';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // providing the Redux Store to the Entire Application
  <Provider store={store}>
    <App />
  </Provider>
);
