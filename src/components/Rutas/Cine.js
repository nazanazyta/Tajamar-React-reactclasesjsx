import React, {Component} from 'react';
import LogoCine from './../../assets/images/cine.jpg';

class Cine extends Component{
    render(){
        return(
            <div>
                <h1 style={{color: "red"}}>Componente Cine</h1>
                <img src={LogoCine} alt="#" />
            </div>
        )
    }
}

export default Cine;