import React from "react";
import css from "./Feedback.module.css";
import Statistics from "./Statistics.jsx";
import FeedbackOptions from "./FeedbackOptions.jsx";
import Section from "./Section.jsx";
import Notification from "./Notification.jsx";
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedbackIncrement = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotalFeedback = () => {
    this.setState((prevState) => ({
      total: prevState.total + 1,
      positivePercentage: (this.state.good / this.state.total) * 100,
    }));
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const total = good + bad + neutral;
    const positivePercentage = (good / total) * 100 || 0;
    return (
      <div className={css.feedback}>
        <Section title={"Please leave feedback"} />
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedbackIncrement}
        />

        <Section title={"Statistics"} />
        {total >= 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification />
        )}
      </div>
    );
  }
}

export default Feedback;
