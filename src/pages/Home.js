import React from 'react'
import Crud from '../components/Crud';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className="container">
            <Header titulo="CRUD Mascotas"/>
            <Crud />
        </div>
    );
};

export default Home;
