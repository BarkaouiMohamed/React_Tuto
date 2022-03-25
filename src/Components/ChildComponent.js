import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler('child') }>GreetParent</button> {/* if you have to pass a parameter use arrow function */}
    </div>
  )
}

export default ChildComponent