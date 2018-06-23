import React, { Component } from "react";
import Cards from "../cards";

import Images from "../../Images.json";

import "./GameSpace.css";

/////////////////////////////////////////////////////////////////

class GameSpace extends Component {
  // STATE GOES HERE
  state = {
    cards: [],
    alreadyClicked: []
  };

  // METHODS GO HERE
  componentDidMount() {
    this.setState({
      backgroundImage: Images
    });
  }

  // JSX GOES HERE
  render() {
    return (
        <div className="game-space-container">
            {/* what does "this" refer to here? */}
        {Images.map(images=> {
          return <Cards key={Images.id} id={Images.id} backgroundImage={Images.url} />;
        })}
      </div>
    );
  }
}

export default GameSpace;
