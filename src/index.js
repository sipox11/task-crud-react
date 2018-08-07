// React Framework
import React from 'react';
import ReactDOM from 'react-dom';

// Main styles
import './index.css';

// The actual app code
import App from './App';

// For progressive apps (allows working even without internet connection)
import registerServiceWorker from './registerServiceWorker';

// Render the app code within the root div element
ReactDOM.render(<App />, document.querySelector('div#root'));

// Execute service worker
registerServiceWorker();
