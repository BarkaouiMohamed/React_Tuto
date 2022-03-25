import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: 'HELLO'
      }
      /* this.clickHandler= this.clickHandler.bind(this) 3 */
    }

/*     clickHandler(){
        this.setState({ message: 'Goodbye' }) 
        console.log(this)
    }  1-2 */

    clickHandler = () =>{
        this.setState({
            message:'GoodBye'
        }) /* 4 */
    }
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  you might not to use because of performance implications1 */}
          {/* <button onClick={() => this.clickHandler()}>Click</button> 2 arrow function the easiest way to pass parameters */}
          <button onClick={this.clickHandler}>Click</button> {/* 3 the best method  */}
          {/* react documentation suggest approach 3 or 4 */}
      </div>
    )
  }
}

export default EventBind