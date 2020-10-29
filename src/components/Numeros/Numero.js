import React, {Component} from 'react';

class Numero extends Component{

    // sumar = () => {
    //     this.props.sumarNumero(this.props.numero);
    // }

    render(){
        return(
            <React.Fragment>
                <button type="button" onClick={() => {
                    this.props.sumarNumero(this.props.numero);
                     //this.sumar
                }}>
                    Sumar {this.props.numero}
                </button>
            </React.Fragment>
        )
    }
}

export default Numero;