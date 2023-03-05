import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "World" }
        this.newName = this.newName.bind(this);
    }
  
    newName() {
        this.setState({ name: this.props.name})
    }

    render() {
        return (
            <>
                <h2>Hello {this.state.name}</h2>
                <button onClick={this.newName}>Hello!</button>

            </>
      );
    }
  }
  
  
  export default Greeting;
  