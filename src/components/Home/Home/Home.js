import React from 'react';
import Header from '../Header/Header';
import MainProducts from '../MainProducts/MainProducts';
import Products from './../Products/Products';

const Home = () => {
    return (
        <div>

            <Products />
            <MainProducts />
        </div>
    );
};

export default Home;