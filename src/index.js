import React from 'react' // import React library from node modules necessary for using JSX
import ReactDOM from 'react-dom/client' // provides DOM-specific methods
import App from './App'
import { BrowserRouter } from 'react-router-dom' // needed for routing on browser

// React DOM allow us to interact with the index.html DOM
// by rendering and updating components

const root = ReactDOM.createRoot(document.getElementById('root')); // create root for the REACT DOM tree


root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);