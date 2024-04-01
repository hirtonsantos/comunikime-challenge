import styled, { keyframes } from "styled-components";

const Appaer = keyframes`
from{opacity:0;
  transform:TranslateX(-100px)
 }
to{opacity:1;
  transform:TranslateX(0px)
 }
`;
export const Container = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: var(--light-grey);
`;
export const Div = styled.div`
  background-color: var(--light-grey);
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  animation: ${Appaer} 1s;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
  }
  input {
    background: var(--white);
    border-radius: 5px;
  }
  button {
    margin-top: 10px;
    margin-bottom: 20px;
    transition: 0.5s;
    :hover {
      background: var(--dark-medium-green);
    }
  }
  a {
    display: flex;
    justify-content: center;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Error = styled.ul`
  text-align: start;
  font-size: 10px;
  color: rgb(240, 42, 42);
  li {
    list-style: none;
    padding-left: 10px;
  }
`;
