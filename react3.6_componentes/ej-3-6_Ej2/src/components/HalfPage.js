import React, { Component } from 'react';
import App from '../App';

class HalfPage extends React.Component {

render () {
   return (
     <div className={this.props.data}>
     {this.props.children}
     </div>
   )
  }
}

export default HalfPage;
