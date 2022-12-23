import React from 'react';
import ReactDOM from 'react-dom/client';

import { TestimonialProvider } from '~/components/TestimonialWrapper/TestimonialProvider';
import { MediaProvider } from './components/MediaSection/MediaProvider';

import './sass/global.scss';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const dataProviders = [TestimonialProvider, MediaProvider];

const withProviders = (providers, component) =>
  providers.reduce((Acc, Curr) => <Curr>{Acc}</Curr>, <>{component}</>);

root.render(
  <React.StrictMode>{withProviders(dataProviders, <App />)}</React.StrictMode>
);
