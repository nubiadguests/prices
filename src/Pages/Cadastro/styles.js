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

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  margin: 0 auto;

  @media (max-width: 500px) {
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
  overflow: hidden;

  img {
    animation: ${fadeIn} 2s ease-in-out;
    width: 160%;
  height: 100vh;
  object-fit: cover;


  @media (max-width: 500px) {
    order: 1;
    width: 100%;
    height: auto; 
  }

  @media (max-width: 310px) {
    order: 1;
    width: 100vw;
    height: auto; 
  }
}
`;

export const StepContainer = styled.div`
  width: 60%;
  text-align: left;
  padding: 20px;
  margin: 0 auto;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  text-align: left;
  margin: 20px 0;
  justify-content: space-between;
  width: 60%;

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
  justify-content: center;
  height: 3rem;
  width: 150px;
  align-items: center;
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

  img{
    margin: 10px;
  }
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  margin: 10px 2px 0 10px;
`;

export const SpanContainer = styled.div`
   display: flex;
  flex-direction: column; 
  align-items: center;
  text-align: left;
  margin: 20px 0;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 950px) {
    flex-direction: row; 
  }
`;


export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;