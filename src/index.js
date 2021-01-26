import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./components/App";
import Jokes from "./components/Jokes";
import Header from "./components/Header";
import "./index.css";

// import reportWebVitals from "./reportWebVitals";

// const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Header>
              <App />
            </Header>
          )}
        />
        <Route
          path="/jokes"
          render={() => (
            <Header>
              <Jokes />
            </Header>
          )}
        />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

/*
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log("I'm a ", this.name, "and I am  ", this.age);
  }
}

const animal1 = new Animal("Simba", 7);
animal1.speak();
console.log(animal1);

class Lion extends Animal {
  constructor(name, age, furColor, speed) {
    super(name, age);
    this.furColor = furColor;
    this.speed = speed;
  }
  roar() {
    console.log(
      "Rooar! I have ",
      this.furColor,
      "fur, and I can run ",
      this.speed,
      "miles an hour!"
    );
  }
}

const lion1 = new Lion("Mufasa", 20, "golden", 25);
lion1.speak();
lion1.roar();
console.log(lion1);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
*/
