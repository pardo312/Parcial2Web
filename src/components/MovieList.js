import React from 'react';
import Movie from "./Movie";
import {FormattedMessage} from 'react-intl';
export default class MovieList extends React.Component {

  constructor(props){
    super(props);
    this.state={
      json:[]
  	};
	}

	componentDidMount(){
    fetch("https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({ json: data });
    	console.log(data);
    });
  }

  render() {
    return (
      <div>
        <table className="table">
        <FormattedMessage id='BackgroundTableHeader' children={msg=> 
        <thead className={msg}>
          <tr>
              <th scope="col"><FormattedMessage id="#"/></th>
              <th scope="col"> <FormattedMessage id="Name"/></th>
              <th scope="col"> <FormattedMessage id="directedBy"/></th>
              <th scope="col"> <FormattedMessage id="Country"/></th>
              <th scope="col"> <FormattedMessage id="Budget"/></th>
              <th scope="col"> <FormattedMessage id="Release"/></th>
              <th scope="col"> <FormattedMessage id="Views"/></th>
            </tr>
            </thead>
          }/>
          <tbody>
              {this.state.json.map( (e,i) => <Movie key={i} offer={e}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}