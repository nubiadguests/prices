import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 2rem;
  position: relative;
`;

export const Span = styled.span`
  background-color: #c5831e;
  padding: 5px;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
`;

export const Card = styled.div`
  width: 300px;
  height: auto;
  border-radius: 8px;
  border-right: 1px solid #c1c1c1;
  border-bottom: 1px solid #c1c1c1;
  border-left: 1px solid #c1c1c1;
  border-top: 2px solid #c5831e;
  padding: 20px;

  margin: 3rem 0;
  
  text-align: center;
  display: inline-block;
  display: grid;
  grid-template-rows: auto auto auto auto 1fr auto;

  @media (max-width: 340px) {
    width: 100%;
  }
  @media (max-width: 340px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ContainerPrices = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const OldPrice = styled.div`
  text-decoration: line-through;
  color: red;
  margin-right: 10px;
`;

export const NewPrice = styled.div`
  font-size: 22px;
  color: #000;
  font-weight: bold;

  span {
    font-size: 16px;
    color: #000;
  }
`;

export const PlanFeatures = styled.ul`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  padding: 0;
  list-style-type: none;
`;

export const PlanFeature = styled.li`
  margin-left: 2px;
  margin-bottom: 16px;
  display: flex;
  text-align: left;
  align-items: center;

  img {
    margin-right: 4px;
  }
`;

export const P = styled.p`
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  color: ${({ color }) => (color ? "#C5831E" : "#000")};
`;

export const Button = styled.button`
  padding: 16px 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  background-color: #c5831e;

  img {
    margin-right: 1rem ;
    width: 12% ;
    height: auto;
  }
`;

 
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
`;

export const TopSeller = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #c5831e; 
  padding: 5px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  z-index: 1; 
`;

export const AccordionButton = styled.span`

  cursor: pointer;
  font-weight: bold;
  margin: 0 10px;
`;

export const PlanFeaturesContainer = styled.div`
  display: ${({ accordionOpen }) => (accordionOpen ? "block" : "none")};
`;
