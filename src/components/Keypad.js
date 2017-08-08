import React from 'react';

class Keypad extends React.Component {

  enteringPass = () => {
    console.log("Entering password...")
  }

  render(){
    return (
      <div>
        <input onKeyUp={this.enteringPass} type="password" />
      </div>
    )
  };


};
export default Keypad;
