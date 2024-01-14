import React, { Component } from 'react'
import loading from '../Fadingwheel.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className={`d-flex align-items-center justify-content-center flex-wrap my-3 ${this.props.vh} ${this.props.vw}`}>
                <img src={loading} alt="loading" />
            </div>
        )
    }
}
