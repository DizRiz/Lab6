import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";

class App extends React.Component {

  render() {
    return (
      <>
        <Greeting name="World"/>
      </>
      );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;
