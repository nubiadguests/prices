import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #313131 0%, rgba(196, 131, 30, 0) 100%);
  mix-blend-mode: multiply;
  align-items: center;
  z-index: -9999;

  img {
    animation: ${fadeIn} 2s ease-in-out;
    width: 800px;
    height: 800px;
  }
`;

export const StepContainer = styled.div`
  width: 70%;
  height: 100%;
  text-align: left;
  padding: 3rem;
  margin: 30px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 70%;
  text-align: left;
  padding-left: 3rem;
  margin: 0 30px;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100%;
`;

export const H1 = styled.h1`
  font-family: Mulish;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
`;

export const Button = styled.button`
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #313131;
  color: #fff;
  border: none;
  cursor: pointer;
  text-align: center;
  font-family: mulish;
  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 3px;
  margin-top: 5px;
`;

export const SpanContainer = styled.div`
  display: flex;
  width: 70%;
  text-align: left;
  padding-left: 3rem;
  margin: 0 30px;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100%;
`;
