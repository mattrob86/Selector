import React, {Component} from 'react';
import Shape from './shape';

class Selector extends Component {

constructor (){
super ();
this.state = {
  selectedShape: "square",
  selectedShape: "circle",
  selectedShape: "triangle",
  }
}

// this is where our methods  live

selectedShape = (shapeName) => {
  this.setShape({
    selectedShape: shapeName
  })
}


render(){
  return (
    <div className= 'container'>
    <div className= 'navbar'>
    <div> Selected: <span> {this.state.selectedShape}</span> </div>

    </div>
    <div className="shape-list">
    <Shape shape="square"/>
    <Shape shape="circle"/>
    <Shape shape="triangle"/>
    </div>
    </div>
  )
}

}
export default Selector
