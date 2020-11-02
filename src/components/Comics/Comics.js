//Práctica

import React, {Component} from 'react';
import Comic from './Comic';
import './Comics.css';

class Comics extends Component{
    state = {
        comics: [
            {
                titulo: "Spiderman",
                imagen:
                "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                descripcion: "Hombre araña"
            },
            {
                titulo: "Wolverine",
                imagen:
                "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                descripcion: "Lobezno"
            },
            {
                titulo: "Guardianes de la Galaxia",
                imagen:
                "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
                descripcion: "Yo soy Groot"
            },
            {
                titulo: "Avengers",
                imagen:
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                descripcion: "Los Vengadores"
            },
            {
                titulo: "Spawn",
                imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                descripcion: "Al Simmons"
            },
            {
                titulo: "Batman",
                imagen:
                "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                descripcion: "Murcielago"
            }
        ]
        , favorito: null
    }

    seleccionarComic = comic => {
        this.setState({favorito: comic});
    }

    crearComic = () => {
        var titulo = document.getElementById("cajatitulo").value;
        var imagen = document.getElementById("cajaimagen").value;
        var desc = document.getElementById("cajadesc").value;
        //CREAMOS UN ÚNICO CÓMIC
        var comic = {
            titulo: titulo
            , imagen: imagen
            , descripcion: desc
        };
        //RECUPERAMOS EL ARRAY DE CÓMICS
        var comics = this.state.comics;
        //INCLUIMOS EL CÓMIC DENTRO DEL ARRAY
        comics.push(comic);
        //ACTUALIZAMOS LA VARIABLE state PARA LA VISTA
        this.setState({comics: comics});
    }

    eliminarComic = index => {
        //QUEREMOS ELIMINAR UN CÓMIC ENTRE MUCHOS DE UN ARRAY
        //  Array.splice(INDICE, ELEMENTOS A ELIMINAR) => Array.splice(miComicEliminar, 1)
        var comics = this.state.comics;
        if(this.state.favorito === comics[index]){
            this.setState({
                favorito: null
            });
        }
        comics.splice(index, 1);
        this.setState({
            comics: comics
        });
    }

    updateComic = index => {
        var titulo = document.getElementById("cajatitulo").value;
        var imagen = document.getElementById("cajaimagen").value;
        var desc = document.getElementById("cajadesc").value;
        //RECUPERAMOS TODOS LOS CÓMICS
        var comics = this.state.comics;
        //RECUPERAMOS EL CÓMIC POR SU ÍNDICE
        var comic = comics[index];
        comic.titulo = titulo;
        comic.imagen = imagen;
        comic.descripcion = desc;
        //ACTUALIZAMOS ESTADO
        this.setState({comics: comics});
    }

    render(){
        return(
            <div className="margen">
                <div>
                    <br />
                    <label>Título: </label>
                    <input type="text" id="cajatitulo" />&nbsp;&nbsp;
                    <label>Imagen: </label>
                    <input type="text" id="cajaimagen" />&nbsp;&nbsp;
                    <label>Descripción: </label>
                    <input type="text" id="cajadesc" />&nbsp;&nbsp;
                    <button onClick={this.crearComic}>Nuevo cómic</button>
                </div>
                {/* {CONDICION && HTML} */}
                {this.state.favorito && 
                    (<div className="fav">
                        <h1 style={{color:"blue"}}>{this.state.favorito.titulo}</h1>
                        <img src={this.state.favorito.imagen} alt="#" />
                        <p>{this.state.favorito.descripcion}</p>
                    </div>)
                }
                {this.state.comics.map((comic, i) => {
                    // return(<Comic key={i} tit={comic.titulo} img={comic.imagen} descrip={comic.descripcion} />);
                    return(
                        <React.Fragment key={i}>
                            <Comic index={i} eliComic={this.eliminarComic} comic={comic} selecComic={this.seleccionarComic} />
                            <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {
                                this.updateComic(i);
                            }}>Modificar cómic</button>
                        </React.Fragment>
                    );
                })}
            </div>
        )
    }
}

export default Comics;