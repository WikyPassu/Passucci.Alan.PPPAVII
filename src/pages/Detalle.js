// import React from 'react'

// const Detalle = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Detalle;
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

const Detalle = () => {
    const {id} = useParams();
    const [pet, setPet] = useState({});
    const {nombre, edad, tipo, vacunado, observaciones} = pet;

    useEffect(() => {
        fetch("http://localhost:5500/mascotas")
        .then(res=>res.ok?res.json():Promise.reject(res.status + ": " + res.statusText))
        .then(mascota=>{
            console.log(mascota);
            setPet(mascota);
        })
        .catch(err=>console.error(err));
    }, [id]);

    return (
        <div>
            <Link to="/">Volver</Link>
            <h1>{nombre}</h1>
            <h1>{edad}</h1>
            <p>{tipo}</p>
            <p>{vacunado}</p>
            <p>{observaciones}</p>
        </div>
    );
};

export default Detalle;