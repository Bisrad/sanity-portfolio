import React, { Component } from 'react';
import On from './On';
import Off from './Off';


class Toggle extends Component {
    constructor() {
      super();
      this.state = {
        name: 'React',
        showOn : true,
      };
    }
  
    render() {
      return (
        <div>
          <p onClick={() => this.toggle()}>
            Click This Text
          </p>
          <br />
          <br />
          <div style={{display : this.state.showOn ? 'inherit' : 'none'}}>
            <On/>
          </div>
          <div style={{display : this.state.showOn ? 'none' : 'inherit'}}>
            <Off/>
          </div>
        </div>
      );
    }
  
    toggle() {
          this.setState((prevState, props) => {
              return {showOn : !prevState.showOn };
          });
    }
  }
  
export default Toggle