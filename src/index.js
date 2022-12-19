import React from 'react';
import ReactDOM from 'react-dom/client';

import { TestimonialProvider } from '~/components/TestimonialWrapper/TestimonialProvider';

import './sass/global.scss';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestimonialProvider>
      <App />
    </TestimonialProvider>
  </React.StrictMode>
);
