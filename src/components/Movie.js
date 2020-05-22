import React from "react";
import { FormattedDate, FormattedNumber, FormattedPlural } from "react-intl";

export default class Movie extends React.Component {

  
  render() {
    return (
      <tr>
        <th scope="row">{this.props.offer.id}</th>
        <td>{this.props.offer.name}</td>
        <td>{this.props.offer.directedBy}</td>
        <td>{this.props.offer.country}</td>
        <td>
          <FormattedNumber value={this.props.offer.budget} 	 /> {' '}
          <FormattedPlural 
            value={this.props.offer.salary} 
        />
        </td>
        <td>
          <FormattedDate
            value={new Date(this.props.offer.releaseDate)}
            year="numeric"
            month="long"
            day="numeric"
          />
        </td>
        <td>
          <FormattedNumber value={this.props.offer.views} />
        </td>
      </tr>
    );
  }
}
