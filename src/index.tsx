import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle } from './styles';

import App from './app';
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
);
