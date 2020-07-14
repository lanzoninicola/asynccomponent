import React from 'react';
import './Button.css'


const Button = (props) => {

    return (
        <button className="primary" onClick={() => props.onChangePage(props.page)}>{props.children}</button>
    )
}

export default Button;