import React from 'react';
import Notification from '../notification/Notification';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total > 0 && (
      <ul>
        <li className={style.itemStatistics}>Good: {good}</li>
        <li className={style.itemStatistics}>Neutral: {neutral}</li>
        <li className={style.itemStatistics}>Bad: {bad}</li>
        <li className={style.itemStatistics}>Total: {total}</li>
        <li className={style.positiv}>
          Positive feedback: {positivePercentage} %
        </li>
      </ul>
    )}
    {total === 0 && <Notification message="No feedback given" />}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
