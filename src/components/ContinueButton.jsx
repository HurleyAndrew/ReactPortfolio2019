import React from 'react'

class ContinueButton extends React.Component {
  render() {
    // let image = require("./images/" + `${this.props.text}` + ".png");
    // let styles = {
    //   backgroundColor: "yellow"
    // };

    // if (this.props.type === "delete") {
    //   styles.backgroundColor = "red";
    // } else if (this.props.type === "submit") {
    //   styles.backgroundColor = "green";
    // } else {
    //   styles.backgroundColor = "black";
    // }
    function handleClick() {
      console.log('clicked')
    }

    function prevPage() {
      console.log('previous page')
    }

    function nextPage() {
      console.log('next page')
    }

    return (
      <div className="buttonContainer" onClick={handleClick}>
        {/* <h4>{this.props.text}</h4> */}
        {/* <img src={this.image} className="arrowButton" alt={this.props.text} /> */}

        {console.log(this.props.text)}
      </div>
    )
  }
}
export default ContinueButton
