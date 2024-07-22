import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const mount = (el) => {
    ReactDOM.render(<React.StrictMode>
        <App />
        </React.StrictMode>
    , el);
}
if(process.env.NODE_ENV === 'development') {
    const element = document.querySelector('#dev-marketing-app');
    if(element) {
        mount(element);
    }
    
}
export {
    mount
}