import React from 'react';
import ReactDOM from 'react-dom/client';

import { TestimonialProvider } from '~/widgets/Testimonial/TestimonialProvider';
import { MediaProvider } from '~/pages/AcademiesPages/AcademyWrapper/MediaSection/MediaProvider';

import './sass/global.scss';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const dataProviders = [TestimonialProvider, MediaProvider];

const withProviders = (providers, component) =>
  providers.reduce((Acc, Curr) => <Curr>{Acc}</Curr>, <>{component}</>);

root.render(
  <React.StrictMode>{withProviders(dataProviders, <App />)}</React.StrictMode>
);
