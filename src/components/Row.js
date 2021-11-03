import React from 'react';

const Row = ({pet, setMovieEdit, deleteMovie}) => {
    const {id, nombre, tipo} = pet;
    return (
        <tr>
            <td>{nombre}</td>
            <td>{tipo}</td>
            <td>
                <button >Ver Detalles</button>
                <button onClick={() => { setMovieEdit(pet) }}>Modificar</button>
                <button onClick={() => { deleteMovie(id) }}>Eliminar</button>
            </td>
        </tr>
    )
};

export default Row;