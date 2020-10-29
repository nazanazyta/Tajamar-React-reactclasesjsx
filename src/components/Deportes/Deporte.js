import React, {Component} from 'react';

class Deporte extends Component{
    //state = {seleccionado: ""};
    seleccionarDeporte = () => {
        //console.log(this.props.deporte);
        //CUANDO EL USUARIO PULSE CLICK, CAMBIAMOS
        //EL VALOR DE state
        //this.setState({seleccionado: this.props.dep});
        //CUANDO PULSEMOS EL BOTÓN, LLAMAREMOS AL METODO
        //DEL PADRE QUE NOS HA ENVIADO CON PROPS
        this.props.selecFav(this.props.deporte);
    }
    render(){
        return(
            <React.Fragment>
                <li style={{color:"blue"}}>
                    {this.props.deporte}
                    <button onClick={this.seleccionarDeporte}>Seleccionar deporte</button>
                    {/* <span style={{color:"red"}}>
                        {this.state.seleccionado}
                    </span> */}
                </li>
            </React.Fragment>
        )
    }
}

export default Deporte;