import React, { Component } from "react";
import * as d3 from "d3";

class Animation extends Component {
    
    
    componentDidMount() { 
    const data = this.props.json;
    console.log(data)
    this.drawChart(data);
    }

    

    render() {
        return (<div>
        <div ref="canvas"></div> 
        </div>);
    }
}

export default Animation;