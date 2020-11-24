import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductItem extends Component {
    render() {
        console.log(this.props.item)
        const { name, imgSrc_jpg } = this.props.item
        return (
            <div className="card p-1 m-2">
                <img src={imgSrc_jpg} alt="" />
                <p>{name}</p>
                <button className="btn btn-info" onClick={() => this.chooseClothes(this.props.item)}>Thử đồ</button>
            </div>
        );
    }
    chooseClothes = (cloth) => {
        this.props.dispatch({
            type: 'SET_CLOTHES',
            payload: {
                type: cloth.type,
                img: cloth.imgSrc_png
            }
        })
    }
}

export default connect()(ProductItem);