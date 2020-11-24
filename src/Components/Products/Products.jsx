import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';

class Products extends Component {
    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    {this.props.productList.filter(item => item.type === this.props.typeOfCategory).map((item, index) => {
                        return (
                            <div className="col-4">
                                <ProductItem key={index} item={item} />
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.products,
        typeOfCategory: state.choosenCategory
    }
}

export default connect(mapStateToProps)(Products);