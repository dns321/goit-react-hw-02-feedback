import React from 'react';
import ProTypes from 'prop-types';

const Notification = ({ message }) => <p>{message}</p>;

Notification.propTypes = {
  message: ProTypes.string.isRequired,
};

export default Notification;
