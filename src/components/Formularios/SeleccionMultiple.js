import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    seleccionMultipleRef = React.createRef();
    state = {
        ingredientes: ["Leche", "Huevos", "Cacao", "Avellanas", "Azúcar", "Unicornio"]
        , seleccionados: ""
    }

    generarOptions = () => {
        var options = [];
        this.state.ingredientes.map((ingre, i) => {
            options.push(<option key={i} value={ingre}>{ingre}</option>);
        });
        return options;
    }

    mostrarSeleccionados = (e) => {
        e.preventDefault();
        var datos = "";
        //ESTAMOS UTILIZANDO Ref.current.value CUANDO SON SELECCIONES SIMPLES.
        //EN ESTE EJEMPLO NOS DEVUELVE UN ARRAY PARA ACCEDER A LOS OPTIONS
        //QUE ESTARÍA EN Ref.current.options. EN DICHO ARRAY RECORREMOS
        //Y PREGUNTAMOMS POR LOS QUE ESTÁN SELECCIONADOS
        var options = this.seleccionMultipleRef.current.options;
        //RECORREMOS TODOS LOS OPTIONS
        for (var i = 0; i < options.length; i++){
            //PREGUNTAMOS POR EL SELECCIONADOS (selected)
            if(options[i].selected){
                datos += options[i].value + ", ";
            }
        }
        this.setState({
            seleccionados: datos
        });
    }

    render() {
        return (
            <div>
                <h1>Selección múltiple</h1>
                <form onSubmit={this.mostrarSeleccionados}>
                    <select name="selectmultiple" size="10" ref={this.seleccionMultipleRef} multiple>
                        {this.generarOptions()}
                    </select>
                    <button>Mostrar seleccionados</button>
                </form>
                <h1 style={{color: "red"}}>{this.state.seleccionados}</h1>
            </div>
        )
    }
}
