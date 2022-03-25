import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
export class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName:'Parent'
    }
    this.greetParent = this.greetParent.bind(this)
  }
  greetParent(childName){
      alert(`Hello ${this.state.parentName} from ${childName}`) /* supported by ES6 */
  }
    render() {
    return (
      <div>
          <ChildComponent greetHandler={this.greetParent} />  
      </div>
    )
  }
}

export default ParentComponent