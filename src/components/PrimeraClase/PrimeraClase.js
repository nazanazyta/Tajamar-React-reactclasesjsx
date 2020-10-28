//SI TRABAJAMOS CON ES6, SIEMPRE DEBEMOS
//IMPORTAR COMPONENT DE REACT
import React, {Component} from 'react';
import "./PrimeraClase.css";

//CUALQUIER CLASE ES6 HEREDA DE COMPONENT Y SIEMPRE
//DEBE EMPEZAR CON MAYÚSUCLA O NO FUNCIONARÁ
class PrimeraClase extends Component{
    //TODA CLASE CONTIENE UN MÉTODO RENDER
    //QUE SE UTILIZA PARA EL DIBUJO DEL COMPONENTE
    //EL MÉTODO RENDER SERÁ EVALUADO EN TODO
    //MOMENTO, Y AHÍ TENDREMOS EL CÓDIGO DEL RETURN
    render(){
        return(
            <React.Fragment>
                <h1 className="rojo">Primer componente Class</h1>
            </React.Fragment>
        )
    }
}

export default PrimeraClase;