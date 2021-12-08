import React from 'react'
import './mystyles.css'

function StyleSheets(props) {
    let className = props.primary ? 'primary' : ''
    console.log (props.primary)
    console.log(props)
    console.log(props.apple[0])
    
    return (
        <div>
            <h2 className = {className}>
                Stylesheets
            </h2>
        </div>
    )
}

export default StyleSheets
