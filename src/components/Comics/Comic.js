//Práctica

import React, {Component} from 'react';

class Comic extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.comic.titulo}</h1>
                <img src={this.props.comic.imagen} alt="#"/>
                <p>{this.props.comic.descripcion}</p>
                <button onClick={() => {
                    this.props.selecComic(this.props.comic);
                }}>Comic favorito</button>
            </div>
        )
    }
}

export default Comic;