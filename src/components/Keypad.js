import React, { Component } from 'react';

const Keypad = () => {

    const keyUpHandler = () => {
        console.log('Entering password...')
    }

    return(
        <input type="password" onKeyUp={keyUpHandler}/>
    )
}

export default Keypad