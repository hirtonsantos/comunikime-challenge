import styled, { keyframes } from "styled-components";

const Appear = keyframes`
from{opacity:0;
  transform:TranslateX(100px)
 }
to{opacity:1;
  transform:TranslateX(0px)
 }
`;

export const Container = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  background: var(--light-grey);
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: var(--light-grey);
  animation: ${Appear} 1s;
  a {
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 19px 26px 19px;
  width: 100%;
  box-sizing: border-box;
  max-width: 400px;

  button {
    margin-top: 15px;
    transition: 0.5s;
    :hover {
      background: var(--dark-medium-green);
    }
  }

  input {
    background-color: var(--white);
  }
`;

export const Span = styled.span`
  font-size: 12px;
  color: #999999;
  margin-top: 10px;
`;
export const SpanH = styled(Span)`
  margin: 0px;
  color: black;
`;

export const DivSpan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
