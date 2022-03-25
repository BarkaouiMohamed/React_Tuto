import React, {
    Component
} from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'PEPOLLS'
        }

        console.log('LifeCycleB constructor')
    }

    static getDerivedFromProps(props, state) {
        console.log('LifeCycleB getDerivedFromProps')

    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevPro,prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name:'PEPOLLS'
        })
    }

    render() {
        console.log('LifeCycleB render')
        return ( 
            <div> 
                <div>LifeCycleA</div> 
                <button onClick={this.changeState}>Change State</button>
            <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA