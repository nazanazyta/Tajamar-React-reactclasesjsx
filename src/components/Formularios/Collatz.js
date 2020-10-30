import React, { Component } from 'react'

export default class Collatz extends Component {
    numero = React.createRef();
    realizarOperaciones = (e) => {
        var num = this.numero.current.value;
        e.preventDefault();
        //console.log(this.numero.current.value);
        if(num < 0){

        }else{
            while(num != 1){
                if(num % 2 === 0){
                    num /= 2;
                }else{
                    num = num * 3 + 1;
                }
                console.log(num);
            }
        }
    }
    render() {
        return (
            <div>
                <h1>Conjetura de Collatz</h1>
                <form onSubmit={this.realizarOperaciones}>
                    <label htmlFor='num'>Introduce un número: </label>
                    <input type="number" ref={this.numero} name="num"/>
                    <button>Reducir</button>
                </form>
            </div>
        )
    }
}