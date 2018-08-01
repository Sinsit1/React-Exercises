import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Item extends Component {
    
    render() {
        return (
          <div className="item">
          <img />
            <div>
              <h5>{ this.props.name }</h5>
              <h6 className="text-muted">{ this.props.description }</h6>
            </div>
            <div className="badge badge-info">{ this.props.category }</div>
            <h5 className="price">{ this.props.price }€</h5>
          </div>
        );
      }
  }
  
  Item.defaultProps = {
    description: 'No hay descripción'
};
// Preguntar a Nasi
Item.propTypes ={
  name: PropTypes.element.isRequired,
  price: PropTypes.number.isRequired
};
  export default Item;
  