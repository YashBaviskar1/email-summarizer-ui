import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header  from './components/Header';
import Fetch from './components/Fetch';
import EmployeeEmail from './components/EmployeeEmail';
import EmailDetails from './components/EmailDetails';
import Message from './components/Message';
import EmailContainer from './components/EmailContainer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <EmployeeEmail />
    <EmailContainer />
    <Message />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
