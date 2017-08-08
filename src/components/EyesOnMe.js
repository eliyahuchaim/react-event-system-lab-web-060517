// Code EyesOnMe Component Here

import React from 'react';

  class EyesOnMe extends React.Component{

    logFocus = () => {
      console.log("Good!")
    }

    logBlur = () => {
      console.log("Hey! Eyes on me!")
    }


    render(){
      return (
        <div>
          <button onFocus={this.logFocus} onBlur={this.logBlur}>Click me bitch</button>
        </div>
      )
    }

  }


export default EyesOnMe;
