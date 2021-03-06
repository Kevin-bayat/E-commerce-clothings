import React, { Component } from "react";

import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import { signInWithGoogle } from "../../firebase/firebase.util";
import { CustomButtonContainer } from "../custom-button/custom-button.styled";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <form onSubmit={this.submitHandler}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            required
            changeHandler={this.changeHandler}
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            required
            changeHandler={this.changeHandler}
          />
          <div className="buttons">
            <CustomButtonContainer type="submit">Sign In</CustomButtonContainer>
            <CustomButtonContainer onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButtonContainer>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
