import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";
import Emojis from "./Emojis";

class App extends React.Component {

  render() {
    return (
      <>
        <Greeting name="John" />
        <Emojis />
      </>
      );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;
