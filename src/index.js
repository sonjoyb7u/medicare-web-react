import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// AOS(scroll, css3, transition, transform, mousewheel, smooth, wow, animate)
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init({
  duration: 800,
  easing: 'ease-in-sine',
  delay: 400
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
