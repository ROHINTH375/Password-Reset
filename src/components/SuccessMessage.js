import React from 'react';
import { Link } from 'react-router-dom';

const SuccessMessage = () => {
  return (
    <div className="student-form">
      <h2>Success!</h2>
      <p>You can reset and change password anytime.</p>

      <div className="AA">
        <Link to="/forgot-password">
          <button className="AA">Go to Forgot Password</button>
        </Link>
      </div>

      <div className="bb">
        <Link to="/reset-password">
          <button className="space-between mt-5 ">Go to Reset Password</button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessMessage;
