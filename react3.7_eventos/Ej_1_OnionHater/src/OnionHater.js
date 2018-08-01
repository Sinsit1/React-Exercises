import React, { Component } from 'react';

class OnionHater extends Component {
    render() {
      return (
        <div>
            <textarea onchange={onChange}>
                {if (textarea.value.contains('cebolla')){
                        alert('odio la cebolla')
                    }
                }
            </textarea>
        </div>
      );
    }
  }
  
  export default OnionHater;