import React from 'react'

// const Greet = ({name, heroname}) => {
    // return <h1>Hello {name}, Hero: {heroname}</h1>
// }
const Greet = props => {
    const {name, heroname} = props;
    return <h1>Hello {name}, Hero: {heroname}</h1>
}

export default Greet