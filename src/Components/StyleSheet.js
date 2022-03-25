import React from 'react'
import './MyStyles.css'

function StyleSheets(props) {
  let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${className} font-xl `}>StyleSheets</h1> 
    </div>
  )
}

export default StyleSheets