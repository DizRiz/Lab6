import React from "react";

const happy = '😄';
const sad = '😢';


class Emoji extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mood: happy }
        this.toggleMood = this.toggleMood.bind(this);
    }
  
    toggleMood() {
        const newMood = this.state.mood === happy ? sad : happy;
        this.setState({ mood: newMood });
    }

    render() {
        return (
            <>
                <h2>{this.state.mood}</h2>
                <button onClick={this.toggleMood}>Change Mood</button>

            </>
      );
    }
  }
  
  
  export default Emoji;
  