import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={css.list}>
    <li className={`${css.item} ${css.good}`}>Good: {good}</li>
    <li className={`${css.item} ${css.neutral}`}>Neutral: {neutral}</li>
    <li className={`${css.item} ${css.bad}`}>Bad: {bad}</li>
    <li className={`${css.item} ${css.total}`}>Total: {total}</li>
    <li className={`${css.item} ${css.positive}`}>
      Positive feedback: {positivePercentage}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
