import React from 'react';
import Row from './Row';

const Tabla = ({data, setPetEdit, deletePet}) => {
    return (
        <>
            <h2>Lista de Mascotas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.length?
                    data.map(pet => <Row 
                                    key={pet.id}
                                    pet={pet}
                                    setPetEdit={setPetEdit}
                                    deletePet={deletePet} />)
                    :<tr><td colSpan={3}>No hay datos</td></tr>
                }
                </tbody>
            </table>
        </>
    )
};

export default Tabla;