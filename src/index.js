import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RouterProvider from './pages/RouterProvider';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { FacebookProvider } from 'react-facebook'
import { Provider as ProviderRedux } from 'react-redux';
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FacebookProvider appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}>
      <ProviderRedux store={store}>
        <RouterProvider />
      </ProviderRedux>
    </FacebookProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
