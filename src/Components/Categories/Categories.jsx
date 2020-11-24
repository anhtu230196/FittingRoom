import React, { Component } from 'react';
import { connect } from 'react-redux';


class Categories extends Component {
    render() {
        return (
            <div className="btn-group">
                {this.props.categories.map((category, index) => (
                    <button className="btn btn-warning mx-1" key={index} onClick={() => { this.chooseTypeCategory(category.type) }}>
                        {category.showName}
                    </button>
                ))}

            </div>
        );
    }

    chooseTypeCategory = (typeOfCategory) => {
        this.props.dispatch({
            type: 'SET_CATEGORY',
            payload: typeOfCategory
        })
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(Categories);