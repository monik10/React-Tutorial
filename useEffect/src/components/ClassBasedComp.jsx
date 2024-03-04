/* eslint-disable no-unused-labels */
import  { Component } from 'react'

export default class ClassBasedComp extends Component {
    constructor()
    {
        super();
        this.state={
            count:0,
        }
    }
    // componentDidMount()
    // {
    //     // component didmount is used for side effect in class based component
    //     document.title=`This title is coming from class ${this.state.count}`
    //     console.log("check re-rendered or not")
    // }
  render() {
    //render method is not a best place for side effect
    return (
      <div>
       <h1>Class based Component</h1>
       <h2>{this.state.count}</h2>
       <button onClick={()=> this.setState({count:this.state.count+1})}>Increment</button>
      </div>
    )
  }
}
