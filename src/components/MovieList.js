import React from 'react';
import Movie from "./Movie";
import { FormattedMessage } from 'react-intl';
import * as d3 from "d3";
export default class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      json: []
    };
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ json: data });
        this.drawChart(data)
      });

  }
  drawChart(data) {

    const canvas = d3.select(this.refs.canvas);
    
    const width = 700;
    const height = 500;
    const margin = { top:10, left:50, bottom: 40, right: 10};
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top -margin.bottom;

    const svg = canvas.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);
    
    let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    
    const y = d3.scaleLinear() 
        .domain([0, 10000000])
        .range([iheight, 0]);
    
    const x = d3.scaleBand()
    .domain(data.map(d => d.name) ) 
    .range([0, iwidth])
    .padding(0.1);

    const bars = g.selectAll("rect").data(data);

    bars.enter().append("rect")
    .attr("class", "bar")
    .style("fill", "steelblue")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.views))
    .attr("height", d => iheight - y(d.views))
    .attr("width", x.bandwidth())  

    g.append("g")
    .classed("x--axis", true)
    .call(d3.axisBottom(x))
    .attr("transform", `translate(0, ${iheight})`);  

    g.append("g")
    .classed("y--axis", true)
    .call(d3.axisLeft(y));
    
    }
  
  render() {
    console.log(this.state.json);
    return (
      <div>
        <table className="table">
          <FormattedMessage id='BackgroundTableHeader' children={msg =>
            <thead className={msg}>
              <tr>
                <th scope="col"><FormattedMessage id="#" /></th>
                <th scope="col"> <FormattedMessage id="Name" /></th>
                <th scope="col"> <FormattedMessage id="Director" /></th>
                <th scope="col"> <FormattedMessage id="Country" /></th>
                <th scope="col"> <FormattedMessage id="Budget" /></th>
                <th scope="col"> <FormattedMessage id="Release" /></th>
                <th scope="col"> <FormattedMessage id="Views" /></th>
              </tr>
            </thead>
          } />
          <tbody>
            {this.state.json.map((e, i) => <Movie key={i} offer={e} />)}
          </tbody>
        </table>
        <div ref="canvas" style={{marginTop:"7rem"}}></div> 
      </div>
    );
  }
}