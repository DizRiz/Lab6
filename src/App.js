import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";
import Emojis from "./Emojis";
import Calculator from "./Calculator";

class App extends React.Component {

  render() {
    return (
      <>
        <Greeting name="John" />
        <Emojis />
        <Calculator />
      </>
      );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;
