import React, { useState, useEffect } from 'react';
import Tipo from './Tipo';

const initialForm = {
    id: null,
    nombre: "",
    edad: "",
    tipo: "",
    vacunado: false,
    observaciones: ""
};

const Formulario = ({createPet, updatePet, petEdit, setPetEdit, tipos}) => {

    const [form, setForm] = useState(initialForm);
    const {id, nombre, edad, tipo, vacunado, observaciones} = form;

    useEffect(() => {
        if(petEdit){
            setForm(petEdit);
        }
    }, [petEdit])

    const handleChange = e => {
        setForm(form => {
            return { ...form, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Enviando...");
        if(!nombre || !edad){
            alert("Faltan datos...");
            return;
        }
        if(id){
            updatePet(form);
        }
        else{
            createPet(form);
        }
        handleReset();
    };

    const handleReset = e => {
        setForm(initialForm);
        setPetEdit(null);
    };

    return (
        <>
            <h2>{id?"Modificar Mascota":"Agregar Mascota"}</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="nombre" 
                placeholder="Nombre" 
                autoComplete="off"
                onChange={handleChange}
                value={nombre} />
                <br/>
                <input 
                type="text" 
                name="edad" 
                placeholder="Edad" 
                autoComplete="off"
                onChange={handleChange}
                value={edad} />
                <br/>
                <Tipo
                tipos={tipos}
                handleChange={handleChange}/>
                <br/>
                <label>
                    <input
                    type="checkbox"
                    name="vacunado"
                    onChange={handleChange}
                    value={vacunado}/> Vacunado?
                </label>
                <br/>
                <textarea
                name="observaciones"
                placeholder="Observaciones"
                onChange={handleChange}
                value={observaciones}/>
                <br/>
                <input 
                type="submit" 
                value="Enviar"/>
                <input 
                type="reset" 
                onClick={handleReset}
                value="Limpiar"/>
            </form>
        </>
    );
}

export default Formulario;