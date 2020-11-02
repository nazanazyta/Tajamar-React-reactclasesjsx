import React, { Component } from 'react'

export default class Collatz extends Component {
    state = ({
        numeros: []
        , fin:  0
    });
    numero = React.createRef();
    boton = React.createRef();
    realizarOperaciones = (e) => {
        
        this.setState({fin: 0});
        var num = this.numero.current.value;
        var array = this.state.numeros;
        e.preventDefault();
        if(num <= 0){
            alert("Introduce un número MAYOR que 0");
            this.numero.current.value = "";
            this.numero.current.focus();
            // this.setState({
            //     numeros: []
            //     , fin: 0
            // })
        }else{
            array.push(num);
            this.setState({fin: 1})
            while(num !== 1){
                if(num % 2 === 0){
                    num /= 2;
                    array.push(num);
                }else{
                    num = num * 3 + 1;
                    array.push(num);
                }
                // this.setState({
                //     array: array
                // });
            }
        }
    }
    vaciar = () => {
        this.setState({
            numeros: []
            , fin: 0
        });
        this.numero.current.value = "";
        this.numero.current.focus();
    }
    render() {
        return (
            <div style={{marginLeft: "2%"}}>
                <h1>Conjetura de Collatz: par =&gt; /2 ; impar =&gt; *3 + 1</h1>
                <form onSubmit={this.realizarOperaciones}>
                    <label htmlFor='num'>Introduce un número: </label>
                    <input type="number" ref={this.numero} name="num"/>
                    <button disabled={this.state.fin}>Reducir</button>
                    {!this.state.fin ?
                    (<button disabled={!this.state.fin}>Otro</button>):
                    (<button onClick={this.vaciar}>Otro</button>)
                    }
                </form>
                {!this.state.fin ?
                (<h3> </h3>) :
                this.state.numeros.map((num, i) => {
                    return (<h3 key={i}>{num}</h3>);
                })}
            </div>
        )
    }
}