import styled, { css } from "styled-components";

const breakpoints = {
  small: "576px",
  medium: "768px",
  large: "992px",
  xlarge: "1200px",
};

const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export const ContainerMain = styled.div`
  width: 100%; 
  ${respondTo.medium`
    width: 50%; 
  `}
  height: 200px;
  margin: 0 auto;
  color: #313131;

  h1 {
    font-family: Mulish;
    font-size: 2em;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
  }

  p {
    font-family: Mulish;
    font-size: 1.4em;
    font-style: normal;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 0.24px;
  }
`;

export const ContainerCard = styled.div`
  width: 100%; 

  ${respondTo.medium`
    width: 
  `}
  margin: 0 auto;
  color: #313131;
`;

export const LineVertical = styled.hr`
  width: 100%; 
  ${respondTo.medium`
    width: 50%; 
  `}
  margin: 0 auto;
  height: 1px;
  background: #c1c1c1;
  border: 1px solid #c1c1c1;
`;

export const ResultContainer = styled.div`
  width: 100%; 

  ${respondTo.medium`
    width: 50%; 
  `}
  height: 100%;
  border-radius: 8px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Prices = styled.div`
  text-align: right;
  padding: 20px;
  align-self: flex-start;
  justify-content: flex-start;

  img {
    margin-right: 5px;
    width: 20%;
  }
`;

export const Infos = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
`;

export const TextInfo = styled.p`
  font-family: Mulish;
  font-size: 1.4em;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const TotalPrice = styled.p`
  font-family: Mulish;
  font-size: 1.4em;
  font-style: normal;
  font-weight: 700;
  color: #ff6161;
  margin-bottom: 8px;
`;

export const Discount = styled.p`
  font-family: Mulish;
  font-size: 1.4em;
  font-style: normal;
  font-weight: 700;
  color: #2e73ff;
`;

export const TotalContainer = styled.div`
  width: 100%; 

  ${respondTo.medium`
    width: 50%; 
  `}
  height: 100px;
  border-radius: 8px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const FinalPrice = styled.p`
  font-family: Mulish;
  font-size: 1.4em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;

  button {
    display: flex;
    width: 25%;
    padding: 16px 40px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 6px;
    border: none;
    background: linear-gradient(180deg, #336cff 0%, #4bb3ff 50.52%, #336cff 100%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Mulish;
    font-size: 1.2em;
    font-style: normal;
    color: #fff;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  width: 75%;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
  margin-bottom: 3rem;
`;

export const CheckboxInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #333;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:checked {
    background-color: #333;
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 0.8em;

  span {
    color: #C5831E;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Cancel = styled.p`
  margin-top: 32px;
  margin-bottom: 8px;
  font-family: Mulish;
  font-size: 1em;
`;

export const Promotion = styled.p`
  font-family: Mulish;
  font-size: 1em;
`;

