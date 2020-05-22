 
import React from 'react';
;

export default class Navbar extends React.Component {
  
  /**
   * Render del modulo.
   */
  render() {
    return (
      <nav style={{ alignItems: "center", background: '#00a1b5' }} className="navbar navbar-expamd-md navbar-light sticky-top ">
        <div className="container-fluid">
          
            <div className="navbar-brand" ><img src="https://i.imgur.com/R6oOTOn.png" alt="logo" style={{ width: '40%' }} /> </div>
        
        </div>
      </nav>
    );
  }
}