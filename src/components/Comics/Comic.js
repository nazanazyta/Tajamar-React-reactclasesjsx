//Práctica

import React, {Component} from 'react';

class Comic extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.comic.titulo}</h1>
                <img src={this.props.comic.imagen} alt="#"/>
                <p>{this.props.comic.descripcion}</p>
                {/* <button style={{backgroundColor: "green", color: "white"}} onClick={() => {
                    this.props.selecComic(this.props.comic);
                }}>Comic favorito</button>
                <button style={{backgroundColor: "red", color: "white"}} onClick={() => {
                    this.props.eliComic(this.props.index)
                }}>Eliminar cómic</button> */}
            </div>
        )
    }
}

export default Comic;