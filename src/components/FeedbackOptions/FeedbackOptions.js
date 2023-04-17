import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: null,
    };
  }

  handleButtonClick = option => {
    this.setState({
      activeButton: option,
    });
    this.props.onLeaveFeedback(option);
  };

  render() {
    const { options } = this.props;
    const { activeButton } = this.state;

    return (
      <ul className={css.list}>
        {options.map(option => (
          <li key={option} className={css.item}>
            <button
              className={`${css.button} ${
                activeButton === option ? css.activeButton : ''
              }`}
              onClick={() => this.handleButtonClick(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
