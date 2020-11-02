import React, { Component } from 'react';
//PARA ROUTER NECESITAMOS AGREGAR UNOS COMPONENTES DE LA
//LIBRERÍA DEL ROUTER-DOM (npm install --save react-router-dom)
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//TODOS LOS COMPONENTES ENTRE LOS QUE DESEEMOS
//NAVEGAR ESTARÁN AQUÍ DECLARADOS
import Home from './Rutas/Home';
import Cine from './Rutas/Cine';
import Musica from './Rutas/Musica';
import Tele from './Rutas/Tele';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/musica" component={Musica} />
                    <Route path="/tele" component={Tele} />
                    <Route path="/cine" component={Cine} />
                </Switch>
            </BrowserRouter>
        )
    }
}
