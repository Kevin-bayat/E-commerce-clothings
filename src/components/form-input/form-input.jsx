import React from "react";

import "./form-input.scss";

const FormInput = ({ label, changeHandler, ...otherInputProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        {...otherInputProps}
        onChange={changeHandler}
      />
      {label ? (
        <label
          className={`${
            otherInputProps?.value?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
