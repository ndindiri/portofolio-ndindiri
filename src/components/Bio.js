import React, { Component } from "react";

class Bio extends Component {
  /** constructor() {
    super();
    this.state = { displayBio: false };
    // this.readMore = this.readMore.bind(this);
    // this.showLess = this.showLess.bind(this);
    // this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  } */
  state = { displayBio: false };
  /**
   * readMore() {
    this.setState({ displayBio: true });
  }
  showLess() {
    this.setState({ displayBio: false });
  }
   */
  /**toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  } */

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        {this.state.displayBio ? (
          <div>
            <p>I live in Nairobi, and I'm almost code every day.</p>
            <p>
              My favorite languege is javaScript, and I think React.js is
              awesome.
            </p>
            <p>Besides coding, I also love music and football!</p>
            {/* <button onClick={this.showLess}>Show less</button> */}
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            {/* <button onClick={this.readMore}>Read more</button> */}
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        {/* <Projects /> */}
      </div>
    );
  }
}

export default Bio;
