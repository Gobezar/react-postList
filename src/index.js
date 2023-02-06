import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthContext from './AuthContext'



const root = ReactDOM.createRoot(document.getElementById('root'));
const element = 
<AuthContext>
<App />
</AuthContext>
root.render(element);


