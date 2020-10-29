import React, {Component} from 'react';
import Numero from './Numero';

class Numeros extends Component{

    state = {
        numeros: [4,2,8,7,5,3,6,1,9]
        , suma: 0
    }
    
    sumarNum = num => {
        this.setState({suma: this.state.suma + num});
        //console.log(num);
    }

    nuevoNumero = () => {
        var misNumeros = this.state.numeros;
        misNumeros.push(parseInt((Math.random() * 9) + 1));
        this.setState({
            numeros: misNumeros
        });
    }

    render(){
        return(
            <div>
                <h1>Suma de números</h1>
                <h4 style={{color: "fuchsia"}}>Suma: {this.state.suma}</h4>
                {
                    this.state.numeros.map((num, i) => {
                        //return (<button type="button" key={i}>{num}</button>);
                        return (<Numero key={i} numero={num} sumarNumero={this.sumarNum}/>);
                    })
                }
                <br /><br />
                <button onClick={this.nuevoNumero}>Añadir número random</button>
            </div>
        )
    }
}

export default Numeros;