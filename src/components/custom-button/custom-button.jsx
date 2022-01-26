import React from "react";

import "./custom-button.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "sign-in-google" : ""} ${
        inverted ? "inverted" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default CustomButton;
