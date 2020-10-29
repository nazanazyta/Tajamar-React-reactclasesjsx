//SI TRABAJAMOS CON ES6, SIEMPRE DEBEMOS
//IMPORTAR COMPONENT DE REACT
import React, {Component} from 'react';
import "./PrimeraClase.css";

//PODEMOS DECLARAR MÉTODOS FUERA DE LA CLASE CON
//LA SINTAXIS function. ES LO MISMO, PERO NO PODEMOS
//UTILIZAR VARIABLES DE LA CLASE
//PARA LLAMAR A LAS FUNCIONES EXTERNAS NO SE UTILIZA this
function miFuncion(){
    console.log("Estoy en mi función");
}

//CUALQUIER CLASE ES6 HEREDA DE COMPONENT Y SIEMPRE
//DEBE EMPEZAR CON MAYÚSUCLA O NO FUNCIONARÁ
class PrimeraClase extends Component{
    //PARA CREAR MÉTODOS DE LA CASE NO SE UTILIZA
    //NINGUNA PALABRE CLAVE (var, function, const, let)
    //LO MISMO PARA LAS VARIABLES
    contador = 1;
    metodoAccion = () => {
        console.log("Contador clase " + this.contador);
        this.contador++;
    }

    //PODEMOS MANEJAR VARIABLES DE ESTADO PARA LOS DIBUJOS
    //LAS VARIABLES DE ESTADO DEBEMOS DECLARARLAS PARA
    //PODER UTILIZARLAS
    //  state = {variable1: valor1, variable2: valor2};
    //PODEMOS COMBINAR PROPS QUE RECIBIMOS CON STATE
    //PARA VISUALIZAR LOS CAMBIOS
    state = { valor: parseInt(this.props.inicio) };
    incrementarEstado = () => {
        //VAMOS A TENER UN CONTADOR PARA DIBUJAR
        //SU INCREMENTO EN LA PÁGINA
        //CADA VEZ QUE ENTRAMOS AQUÍ, INCREMENTAMOS EL CONTADOR
        this.setState({
            valor: this.state.valor + 1
        });
    }

    //TODA CLASE CONTIENE UN MÉTODO RENDER
    //QUE SE UTILIZA PARA EL DIBUJO DEL COMPONENTE
    //EL MÉTODO RENDER SERÁ EVALUADO EN TODO
    //MOMENTO, Y AHÍ TENDREMOS EL CÓDIGO DEL RETURN
    render(){
        //DENTRO DEL RENDER PODEMOS DECLARAR TAMBIÉN
        //FUNCTIONES O VARIABLES, PERO DEBEMOS HACERLO
        //CON LA SINTAXIS ANTERIOR (var, const)
        //SÍ QUE HAY DIFERENCIA ENTRE EL RENDER Y FUERA,
        //RENDER SE EJECUTA CADA VEZ QUE EXISTEN
        //CAMBIOS EN EL DIBUJO
        var numero = 1;
        const hacerAlgo = () => {
            console.log("Contador  Render " + numero);
            numero++;
        }
        return(
            <React.Fragment>
                <h1 className="rojo">{this.props.titulo}</h1>
                <h2 className="azul">Estado: {this.state.valor}</h2>
                <button onClick={this.metodoAccion}>Incrementar contador</button>
                <button onClick={() => {
                    miFuncion();
                    //SI EL MÉTODO O LA VARIABLE ESTÁ EN RENDER NO LLEVA this
                    hacerAlgo();
                    this.incrementarEstado();
                }}>
                    Pulsar
                </button>
            </React.Fragment>
        )
    }
}

export default PrimeraClase;