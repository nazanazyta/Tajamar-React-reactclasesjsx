import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul style={{listStyle: "none"}}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/musica">Música</a></li>
                    <li><a href="/tele">Tele</a></li>
                    <li><a href="/cine">Cine</a></li>
                </ul>
            </div>
        )
    }
}
