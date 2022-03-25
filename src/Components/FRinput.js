import React from 'react'

/* function FRinput() {
  return (
    <div>
        <input></input>
    </div>
  )
} */

const FRinput = React.forwardRef((props, ref) =>{
    return (
        <div>
            <input type ="text" ref={ref}/> {/* this ref parameter will point to the value of the ref attribute from the parent component  */}
        </div>
    )
}) 
export default FRinput