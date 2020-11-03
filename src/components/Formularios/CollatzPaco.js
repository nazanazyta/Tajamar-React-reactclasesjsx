import React, { Component } from 'react'

export default class CollatzPaco extends Component {
    //DECLARAMOS VARIABLE DE REFERENCIA PARA LA CAJA
    cajacollatz = React.createRef();
    state = {
        lista: []
    }

    generarCollatz = (e) => {
        e.preventDefault();
        //RECUPERAMOS EL NÚNERO DE LA CAJA
        var numero = parseInt(this.cajacollatz.current.value);
        //CREAMOS UNA VARIABLE PARA ASIGNAR CADA <li>
        var datos = [];
        //VAMOS A GENERAR HTML DINÁMICAMENTE Y CADA ELEMENTO
        //NECESITA DE UN key DISTINTO PARA ESTA SECUENCIA
        var contador = 1;
        while(numero !== 1){
            if(numero % 2 === 0){
                numero = numero / 2;
            }else{
                numero = numero * 3 + 1;
            }
            datos.push(<li key={contador}>{numero}</li>);
            contador++;
        }
        this.setState({
            lista: datos
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.generarCollatz}>
                    <label>Número Collatz: </label>
                    <input type="number" name="cajacollatz" ref={this.cajacollatz} />
                    <button>Generar Collatz</button>
                </form>
                <ul>{this.state.lista}</ul>
            </div>
        )
    }
}
