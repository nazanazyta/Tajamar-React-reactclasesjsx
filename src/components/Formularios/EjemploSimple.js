import React, { Component } from 'react'

export default class EjemploSimple extends Component {
    //PROPIEDADES PARA ENLAZAR LAS CAJAS <input>
    nombre = React.createRef();
    apellidos = React.createRef();

    //PARA DIBUJAR, NECESITAMOS UN STATE
    //ALMACENAR UN USUARIO EN STATE
    state = ({
        // usuario: null
        usuario: {}     //objeto vacío
    });

    //MÉTODO PARA CAPTURAR LAS ACCIONES
    recibirDatos = (e) => {
        e.preventDefault();
        console.log("Nombre: " + this.nombre.current.value);
        console.log("Apellidos: " + this.apellidos.current.value);
        var user = {
            nombre: this.nombre.current.value
            , apellidos: this.apellidos.current.value
        };
        this.setState({usuario: user});
    }

    render() {
        return (
            <div>
                <h1>Ejemplo Forms React</h1>
                {this.state.usuario.nombre &&
                (<h1 style={{backgroundColor: "blue", color: "white"}}>{this.state.usuario.nombre} {this.state.usuario.apellidos}</h1>)
                }
                <form onSubmit={this.recibirDatos}>
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="text" ref={this.nombre} name="nombre" onChange={this.recibirDatos} /><br />
                    <label htmlFor="apellidos">Apellidos: </label>
                    <input type="text" ref={this.apellidos} name="apellidos" onChange={this.recibirDatos} /><br />
                    <button>Enviar datos</button>
                </form>
            </div>
        )
    }
}
