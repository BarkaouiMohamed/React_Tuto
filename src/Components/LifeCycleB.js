import React, {
    Component
} from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'PEPOLLS'
        }

        console.log('LifeCycleB constructor')
    }

    static getDerivedFromProps(props, state) {
        console.log('LifeCycleB getDerivedFromProps')
        return null
    }

    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevPro,prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    render() {
        console.log('LifeCycleB render')
        return ( 
            <div> LifeCycleB </div>
        )
    }
}

export default LifeCycleB