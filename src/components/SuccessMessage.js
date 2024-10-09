import React from 'react';

const SuccessMessage = ({ message }) => {
  return (
    <div className="alert alert-success mt-3">
      {message}
    </div>
  );
};

export default SuccessMessage;
