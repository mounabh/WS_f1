import React,{Component} from 'react'
class LifeCycle extends Component{
    constructor (props){
        super(props);
        this.state={}
   
        
    }
    componentDidMount(){
        alert(`The Component is Mounted`)
    }

    render(){
        return(
            <div>
                <h3>The LifeCycle </h3>
            </div>
        )
    }
}
export default LifeCycle;