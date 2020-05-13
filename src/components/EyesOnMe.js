import React, { Component } from 'react'

const EyesOnMe = () => {

    const focusHandler = () => {
        console.log("Good!")
    }

    const blurHandler = () => {
        console.log('Hey! Eyes on me!')
    }

    return(
        <button onFocus={focusHandler} onBlur={blurHandler}></button>
    )

}

export default EyesOnMe