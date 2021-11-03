import React, { Component } from 'react';

class Titulo extends Component {
    render() { 
        return ( 
            <h1 className="title">{this.props.titulo}</h1>
        );
    }
}
 
export default Titulo;