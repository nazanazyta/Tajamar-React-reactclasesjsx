import React, {Component} from 'react';
import LogoTele from './../../assets/images/tele.jpg';

class Tele extends Component{
    render(){
        return(
            <div>
                <h1 style={{color: "green"}}>Componente Tele</h1>
                <img src={LogoTele} alt="#" />
            </div>
        )
    }
}

export default Tele;