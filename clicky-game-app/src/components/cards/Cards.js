import React, { Component } from "react";
import './Cards.css';
import Images from "../../Images.json";

class Cards extends Component {
    render() {
        const image = this.props.url;
        const boxStyle = {
            backgroundImage: image
        };
        console.log(Images);
        return <img className="cards" src={"../../images/dog-01.jpg"} style={boxStyle} />;
    }
}

export default Cards;