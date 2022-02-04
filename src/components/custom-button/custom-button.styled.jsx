import styled from "styled-components";

const getCustomButton = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleSignInButton;
  } else return InvertButton;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${getCustomButton}
`;

export const GoogleSignInButton = styled.button`
  color: #fff;
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
export const InvertButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
