import React, { Component } from "react";

const TITLES = [
  "a software engineer",
  "a programming lover",
  "a music lover",
  " a football lover",
  "an enthusiastic learner",
  "an adventure seeker",
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    // console.log('Title component has amounted');
    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    this.animateTitles();
  }

  componentWillMount() {
    // console.log('Title component will unmount!');

    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex, fadeIn: true });

      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);
    // console.log('this.titleInterval', this.titleInterval);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;

    const title = TITLES[titleIndex];
    return (
      <p
        className={fadeIn ? "title-fade-in" : "title-fade-out"}
        style={{ color: "green" }}
      >
        I am {title}
      </p>
    );
  }
}

export default Title;
