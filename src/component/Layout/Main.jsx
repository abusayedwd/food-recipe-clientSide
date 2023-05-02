import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../share/Header';
import Footer from '../share/Footer';

const Main = () => {
        return (
                <div className=' container mx-auto'>
                        <Header></Header>
                     <Outlet></Outlet> 
                     <Footer></Footer>  
                </div>
        );
};

export default Main;