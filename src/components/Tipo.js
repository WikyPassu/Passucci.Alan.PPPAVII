import React from 'react'

const Tipo = ({tipos}) => {
    return (
        <select name="select">
            {
                tipos.map(tipo => {
                    return <option
                            key={tipo.id} 
                            value={tipo.descripcion}
                            >{tipo.descripcion}</option>
                })
            }
        </select>
    );
};

export default Tipo;
