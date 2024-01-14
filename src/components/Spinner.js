import React from 'react'
import loading from '../Fadingwheel.gif'
const Spinner = (props) => {
    return (
        <div className={`d-flex align-items-center justify-content-center flex-wrap my-3 ${props.vh} ${props.vw}`}>
            <img src={loading} alt="loading" />
        </div>
    )
}
export default Spinner;