import React from 'react';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="Counter_changes">
    {options.map(option => (
      <button
        className={style.btn}
        key={option}
        type="button"
        data-name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
