import React from "react";
import "./Notification.scss";

const Notification = () => {
  return (
    <div className="container">
      <div className="alert">
        <p>
          <b>Message: </b> &nbsp;
        </p>
        <p>
          To verify your account, check your email for a verification link.
          &nbsp;
        </p>
        <p className="v-link">Resend Link</p>
      </div>
    </div>
  );
};

export default Notification;
