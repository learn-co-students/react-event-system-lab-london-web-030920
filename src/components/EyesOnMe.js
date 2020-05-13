import React from 'react'

const EyesOnMe = () => {

const focusMe = () => {
    console.log("Good!")
}

const blurMe = () => {
    console.log('Hey! Eyes on me!')
}


return <button onFocus={focusMe}    onBlur={blurMe}></button>
}


export default EyesOnMe