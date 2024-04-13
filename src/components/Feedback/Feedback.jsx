import React from "react";
import css from "./Feedback.module.css";
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    return (
      <div className={css.feedback}>
        <span className={css.title}>Please leave feedback </span>
        <div className={css.button}>
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <span className={css.feedbackStatistics}>Statistics</span>
        <br />
        <span>Good: {this.state.good}</span>
        <br />
        <span>Neutral: {this.state.neutral}</span>
        <br />
        <span>Bad: {this.state.bad}</span>
        <br />
        <span>
          Total: {this.state.good}+{this.state.neutral}+{this.state.bad};
        </span>
        <br />
          <span></span>
      </div>
    );
  }
}

export default Feedback;
