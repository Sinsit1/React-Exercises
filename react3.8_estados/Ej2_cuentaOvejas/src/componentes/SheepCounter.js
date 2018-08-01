import React, { Component } from 'react';
import './sheepcounter.css';
import './oveja.jpg';

import Oveja from './Oveja';

class SheepCounter extends Component {
    constructor (){
        super()
        this.state = {
            counter:0,
            sheep: []
        }
    this.onClickListener= this.onClickListener.bind(this);
    }
     onClickListener (event) {
         this.setState({
            counter: this.state.counter+1
         })
         this.createArraySheep();
    }

    createArraySheep (){
        this.state.sheep.push (<Oveja />);
    }
    render() {
        return (
            <div >
                <a 
                type="button" className='oveja'
                onClick={this.onClickListener}
                > ¡Toma oveja! 
                </a>
                <p className="contador">{this.state.counter}</p>
                {
                    this.state.sheep.map( function(x) {
                        return x;
                })
                }
            </div>
        );
      }
}

export default SheepCounter;