import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './model.module.css'

class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contain: "images/background/background_998.jpg",
            body: "images/allbody/bodynew.png",
            bikinitop: "images/allbody/bikini_branew.png",
            bikinibottom: "images/allbody/bikini_pantsnew.png",
            feetleft: "images/allbody/feet_high_leftnew.png",
            model: "images/model/1000new.png",
            feetright: "images/allbody/feet_high_rightnew.png"
        }
    }
    render() {
        return (
            <div className={classes.contain} style={{ background: `url(${this.state.contain})` }}>
                <div className={classes.body} style={{ background: `url(${this.state.body})` }}></div>
                <div className={classes.model} style={{ background: `url(${this.state.model})` }}></div>
                <div className={classes.bikinitop} style={{ background: `url(${this.state.bikinitop})` }}></div>
                <div className={classes.bikinibottom} style={{ background: `url(${this.state.bikinibottom})` }}></div>
                <div className={classes.feetleft} style={{ background: `url(${this.state.feetleft})` }}></div>
                <div className={classes.feetright} style={{ background: `url(${this.state.feetright})` }}></div>

                <div
                    className={classes.bikinitop}
                    style={{
                        backgroundImage: `url(${this.props.model.topclothes})`,
                        backgroundSize: "cover",
                    }}
                ></div>
                <div
                    className={classes.bikinibottom}
                    style={{
                        backgroundImage: `url(${this.props.model.botclothes})`,
                        backgroundSize: "cover",
                    }}
                ></div>
                <div
                    className={classes.shoes}
                    style={{
                        backgroundImage: `url(${this.props.model.shoes})`,
                        backgroundSize: "cover",
                    }}
                ></div>
                <div
                    className={classes.handbags}
                    style={{
                        backgroundImage: `url(${this.props.model.handbags})`,
                        backgroundSize: "cover",
                    }}
                ></div>
                <div
                    className={classes.necklaces}
                    style={{
                        backgroundImage: `url(${this.props.model.necklaces})`,
                        backgroundSize: "cover",
                    }}
                ></div>
                <div
                    className={classes.hairstyle}
                    style={{
                        backgroundImage: `url(${this.props.model.hairstyle})`,
                        backgroundSize: "cover",
                    }}
                ></div>
                <div
                    className={classes.contain}
                    style={{
                        backgroundImage: `url(${this.props.model.background})`,
                        backgroundSize: "cover",
                    }}
                ></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        model: state.ModelReducer
    }
}

export default connect(mapStateToProps)(Model);