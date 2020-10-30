import React, {Component} from 'react';
import LogoHome from './../../assets/images/home.jpg';

class Home extends Component{
    render(){
        return(
            <div>
                <h1 style={{color: "orange"}}>Componente Home</h1>
                <img src={LogoHome} alt="#" />
            </div>
        )
    }
}

export default Home;