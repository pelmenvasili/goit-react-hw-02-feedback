import { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = feedback => {
    this.setState(prevState => ({
      ...prevState,
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.state.good;
    return total === 0 ? 0 : Math.round((positiveFeedback / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.root}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
