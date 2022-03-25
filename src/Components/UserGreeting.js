import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }
  render() {
      return(
          this.state.isLoggedIn && <div>Welcome PEPOLLS</div>
      )
/*       return (
          this.state.isLoggedIn ? (
          <div>Welcome PEPOLLS</div> ) : (
          <div>Welcome Guest</div> 
          )
      ) 
      is the best way 
      */
/*       let message 
      if (this.state.isLoggedIn){
          message = <div>Welcome PEPOLLS</div>
      }
      else {
          message = <div>Welcome Guest</div>
      }
      return <div>{message}</div> */

/*       if (this.state.isLoggedIn){
        return (
            <div>Welcome PEPOLLS</div>
        )}
        else {
            return (
                <div>Welcome Guest</div>
            )
        } */
    /* return (
        <div>
            <div>
                Welcome PEPOLLS
            </div>
            <div>
                Welcome Guest
            </div>
        </div>
    ) */

}
}

export default UserGreeting