import styled from "styled-components";


export const MainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const PaymentContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 1.4rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;


export const StepContainer = styled.div`
  width: 100%;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const H2 = styled.h2`
  color: #313131;
  font-family: Mulish;
  font-size: 1.5em;
  font-style: normal;
  font-weight: 700;
  margin: 10px 0;
`;

export const P = styled.p`
  color:  #313131;
  font-family: Mulish;
  font-size: 0.8em;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const H3 = styled.h2`
  color: #313131;
  font-family: Mulish;
  font-size: 1.3em;
  font-style: normal;
  font-weight: 700;
  margin: 10px 0;
`;

export const LineVertical = styled.hr`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
  margin-top: 1rem;
  height: 1px;
  background: #c1c1c1;
  border: 1px solid #c1c1c1;
`;

export const LineHorizontal = styled.hr`
  width: 1px;
  margin: 1rem;
  height: auto;
  background: #c1c1c1;
  border: 1px solid #c1c1c1;
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  justify-content: center;
  margin: 2rem 0;
`;

export const ResultContainer = styled.div`
  width: 100%;

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
  /* padding: 20px; */
  align-self: flex-start;
  justify-content: flex-start;
`;

export const Infos = styled.div`
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
`;

export const TextInfo = styled.p`
  font-family: Mulish;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const TotalPrice = styled.p`
  font-family: Mulish;
  font-size: 1em;
  font-style: normal;
  font-weight: 700;
  color: #313131;
  margin-bottom: 8px;
`;

export const Discount = styled.p`
  font-family: Mulish;
  font-size: 1em;
  font-style: normal;
  font-weight: 700;
  color: #313131;
`;

export const TotalContainer = styled.div`
  width: 100%;

  /* height: 100px; */
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
  font-size: 1.2em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Button = styled.button`
  display: flex;
  width: 100%; /* Altere para ocupar 100% da largura */
  padding: 16px 40px;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  border: none;
  border-radius: 6px;
  background: linear-gradient(180deg, #336cff 0%, #4bb3ff 50.52%, #336cff 100%);
  color: #fff;
  text-align: center;
  font-family: Mulish;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputsContainer = styled.div`
  width: 90%;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 54%;
    justify-content: center;
  }
`;