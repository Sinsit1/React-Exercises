import React, { Component } from 'react';
import Item from './Item';

class ItemList extends React.Component {
    render() {

        const items = [
            {
              name:"Cereales con chocolate",
              description: "Cereales rellenos de chocolate",
              quantity: 2,
              category: "Cereales",
              price: 5
            },
            {
              name:"Hamburguesa con queso",
              description: "Hamburguesa rica y saludable",
              quantity: 1,
              category: "Fast-food",
              price: 15
            },
            {
              name:"Agua mineral",
              description: "Agua de un charco del Himalaya",
              quantity: 2,
              category: "Bebida",
              price: "jajejo"
            },
            {
                name:"Hamburguesa con queso",
                quantity: 1,
                category: "Fast-food",
                price: 15
              }
          ];
      return (
        <ul className="item-list">
          {items.map (function (item) {
              return (
                <li> 
                    <Item
                        name={item.name}
                        description={item.description}
                        quantity={item.quantity}
                        category={item.category}
                        price={item.price}
                    />
                </li>
              );
          })}
          
        </ul>
      );
    }
  }



  export default ItemList;