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
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 950px) {
    order: 2;
    text-align: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #313131 0%, rgba(196, 131, 30, 0) 100%);
  mix-blend-mode: multiply;
  z-index: -9999;
  overflow: hidden;

  img {
    animation: ${fadeIn} 2s ease-in-out;
    width: 1000px; 
    height: 1000px;

    @media (max-width: 950px) {
      width: 900px; 
      height: 900px;
    }

    @media (max-width: 335px) {
      order: 1;
      width: 100%;
      height: auto; 
    }
  }

  @media (max-width: 950px) {
    order: 1;
  }
  `

export const StepContainer = styled.div`
  width: 70%;
  text-align: left;
  padding: 3rem;
  margin: 30px;
  margin-bottom: 20px;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; 
  text-align: left;
  padding-left: 3rem;
  margin: 0 1.5rem;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 950px) {
    flex-direction: row; 
  }
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
  padding: 10px 20px;
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
  flex-direction: column; 
  text-align: left;
  padding-left: 3rem;
  margin: 0 30px;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 950px) {
    flex-direction: row; 
  }
`;
