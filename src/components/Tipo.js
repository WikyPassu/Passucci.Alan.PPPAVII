import React from 'react'

const Tipo = ({tipos, handleChange}) => {
    return (
        <select
        name="tipo"
        onChange={handleChange}>
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
