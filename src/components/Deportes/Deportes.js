import React, {Component} from 'react';
import Deporte from './Deporte';

class Deportes extends Component{
    //TENDREMOS UN ESTADO CON UN ARRAY DE DEPORTES
    state = {
        deportes: ["Padel", "Tenis", "Petanca", "Futbol"]
        , nombre: "Alumno React"
        , seleccionado: ""
    }

    //MÉTODO LO EJECUTARÁ EL HIJO LLAMANDO AL PARENT
    //Y LE MANDA SU DEPORTE
    seleccionarFavorito = deportefavorito => {
        console.log("Favorito: " + deportefavorito);
        this.setState({seleccionado: deportefavorito});
    }

    contador = 1;
    nuevoDeporte = () => {
        //TENEMOS QUE CAMBIAR EL state DE DEPORTES
        //PRIMERO RECUPERAMOS LOS DEPORTES QUE TENGAMOS
        //EN EL state
        var deportes = this.state.deportes;
        deportes.push("Deporte " + this.contador);
        this.contador += 1;
        this.setState({
            deportes: deportes
        });
    }

    render(){
        return(
            <div>
                <h2>Deportes de {this.state.nombre}</h2>
                <h4 style={{color: "fuchsia"}}>{this.state.seleccionado}</h4>
                <button onClick={this.nuevoDeporte}>Crear nuevo deporte</button>
                <ul>
                    {
                        this.state.deportes.map((dep, i) => {
                            // return (<li key={i}>{dep}, {i}</li>);
                            return (<Deporte key={i} deporte={dep} selecFav={this.seleccionarFavorito}/>);
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Deportes;