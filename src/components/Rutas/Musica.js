import React, {Component} from 'react';
import LogoMusica from './../../assets/images/musica.jpg';

class Musica extends Component{
    render(){
        return(
            <div>
                <h1 style={{color: "blue"}}>Componente Música</h1>
                <img src={LogoMusica} alt="#" />
            </div>
        )
    }
}

export default Musica;