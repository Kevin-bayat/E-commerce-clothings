import React from "react";

import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input";
import { CustomButtonContainer } from "../custom-button/custom-button.styled";
// import {
//   auth,
//   createUserProfileInDocument,
// } from "../../firebase/firebase.util";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  submitHandler = async (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    console.log(this.state);

    // const { displayName, email, password, confirmPassword } = this.state;
    // if (password !== confirmPassword) {
    //   alert("password don't match");
    //   return;
    // }
    // try {
    //   const { user } = await auth.signInWithEmailAndPassword(email, password);
    //   await createUserProfileInDocument(user);
    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };
  changeHandler = (event) => {
    const { name, value } = event?.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I Dont Have A Account</h1>
        <form onSubmit={this.submitHandler}>
          <FormInput
            type="text"
            name="displayName"
            label="displayName"
            value={displayName}
            changeHandler={this.changeHandler}
          />
          <FormInput
            type="email"
            name="email"
            label="email"
            value={email}
            changeHandler={this.changeHandler}
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            changeHandler={this.changeHandler}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirmPassword"
            value={confirmPassword}
            changeHandler={this.changeHandler}
          />
          <CustomButtonContainer type="submit">Sign Up</CustomButtonContainer>
        </form>
      </div>
    );
  }
}
export default SignUp;
