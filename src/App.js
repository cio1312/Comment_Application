import React, { Component } from "react";
import "./styles.css";
import data from "../Database.json";
import Helmet from "react-helmet";

import StarRatingComponent from "react-star-rating-component";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      comment: "",
      rating: 1
    };
  }

  change = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  addtodatabase = event => {
    var tdate = new Date();
    const rdate =
      tdate.getDate() +
      "/" +
      (tdate.getMonth() + 1) +
      "/" +
      tdate.getFullYear();
    console.log(rdate);
    let put = {
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment,
      date: rdate,
      rating: this.state.rating
    };
    data.push(put);
    console.log(data);
  };

  show = event => {
    let store = [];
    data.map((person, index) => {
      store.push(
        <div>
          <div id="name">{person.name}</div>
          <div id="say">{person.comment}</div>
          <div>{person.date}</div>
        </div>
      );
    });
    return store;
  };

  onStarClick(nextValue, prevValue, name) {
    console.log("nextvalue=" + nextValue);
    console.log("prevValue=" + prevValue);
    console.log("name=" + name);
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;
    return (
      <div id="inputs">
        <Helmet
          bodyAttributes={{
            style:
              'background-image : url("http://bgfons.com/uploads/paper/paper_texture296.jpg");'
          }}
        />
        <h3>Book Name:</h3>
        <h3 id="title">Comments:</h3>
        <p id="headings">Taittiriya Shakha</p>
        <img
          src="https://clipartart.com/images/old-open-book-clipart-8.png"
          alt="Smiley face"
          height="200"
          width="200"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={this.change}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={event => this.change(event)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Comment"
          name="comment"
          onChange={event => this.change(event)}
        />
        <br />

        <h4>Rating:{rating}</h4>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />

        <br />
        <input
          type="button"
          value="Comment"
          placeholder="Comment"
          onClick={event => this.addtodatabase(event)}
        />
        <br />

        <table id="comment">{this.show()}</table>
      </div>
    );
  }
}
export default App;
