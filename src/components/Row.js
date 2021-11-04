import React from 'react';

const Row = ({pet, setPetEdit, deletePet}) => {
    const {id, nombre, tipo} = pet;
    return (
        <tr>
            <td>{nombre}</td>
            <td>{tipo}</td>
            <td>
                <button >Ver Detalles</button>
                <button onClick={() => { setPetEdit(pet) }}>Modificar</button>
                <button onClick={() => { deletePet(id) }}>Eliminar</button>
            </td>
        </tr>
    )
};

export default Row;