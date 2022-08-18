import styled from "styled-components";

const Div = styled.div`
  justify-content: center;
  display: flex;
  background-image: url(back.jpeg);

  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  align-items: center;
`;

const Form = styled.div`
  display: inline-flex;

  input {
    border: none;
    border-bottom: 1px solid grey;
    background-color: transparent;
    outline: none;
  }
  button {
    cursor: pointer;
    font-size: 20px;
    color: white;
    background-color: #4caf50;
    border: none;
    border-radius: 5px;
  }
  button:hover {
    background-color: #002ead;
    transition: 0.7s;
  }

  p {
    color: red;
  }
`;
export { Div, Form };
