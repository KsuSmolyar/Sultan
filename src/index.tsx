import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './variables.css';
import './index.css';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';

import { routes } from './router';
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter(routes, { basename: '/Sultan' });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
