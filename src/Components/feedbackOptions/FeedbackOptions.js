import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="Counter_changes">
    {options.map(option => (
      <button
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
