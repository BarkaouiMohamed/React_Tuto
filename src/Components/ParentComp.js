import React, { Component , PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoCom'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Pepolls'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'Pepolls'
            })
        } , 2000)
    }
    render() {
        console.log('****************PARENT COMPONENT****************')
    return (
      <div>
          Parent Component
          <MemoComp name={this.state.name}/>
          {/* <RegComp name={this.state.name}/>
          <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp