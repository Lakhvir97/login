import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(70, 171, 148, 1) 0%,
    rgba(98, 179, 209, 1) 100%,
    rgba(0, 0, 0, 1) 100%
  );
  height: 100vh;

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
  data {
  }
  main {
    justify-content: space-between;
  }
`;
