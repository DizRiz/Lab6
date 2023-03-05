import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "John"}
    }
  
    render() {
        return (
            <>
                <h2>Hello {this.props.name}</h2>
                <h2>Hello {this.state.name}</h2>

            </>
      );
    }
  }
  
  
  export default Greeting;
  