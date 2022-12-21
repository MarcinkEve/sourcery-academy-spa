import React from 'react';
import ReactDOM from 'react-dom/client';

import { MediaProvider } from './components/MediaSection/MediaProvider';

import './sass/global.scss';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const dataProviders = [MediaProvider];

const withProviders = (providers, component) =>
  providers.reduce((Acc, Curr) => <Curr>{Acc}</Curr>, <>{component}</>);

root.render(
  <React.StrictMode>{withProviders(dataProviders, <App />)}</React.StrictMode>
);
