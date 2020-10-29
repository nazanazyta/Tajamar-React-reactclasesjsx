import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
// import PrimeraClase from './components/PrimeraClase/PrimeraClase';
//import Deportes from './components/Deportes/Deportes';
//import Numeros from './components/Numeros/Numeros';
import Comics from './components/Comics/Comics';

ReactDOM.render(
  <React.StrictMode>
    {/* <PrimeraClase titulo="Componente 1" inicio="16"/>
    <PrimeraClase titulo="Componente 2" inicio="99"/> */}
    {/* <Deportes /> */}
    {/* <Numeros /> */}
    <Comics />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
