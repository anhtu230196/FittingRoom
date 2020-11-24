import React, { Component } from 'react';
import Model from '../../Components/Body/Model';
import Categories from '../../Components/Categories/Categories';
import Products from '../../Components/Products/Products';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row p-5">
                        <div className="col-6">
                            <Categories />
                            <Products />
                        </div>
                        <div className="col-6">
                            <Model />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;