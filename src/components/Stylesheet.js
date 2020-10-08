import React from 'react'
import '../styles/myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
        <h1 className= {`${className} font-xl backgr`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
