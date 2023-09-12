import styled from 'styled-components';

export const ProductCard = styled.div`
  width: 890px;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 20px;
`;

export const Prices = styled.div`
  text-align: right;
  margin: 20px;
`;

export const OldPrice = styled.span`
  font-size: 14px;
  color: #FF6161;
  text-decoration: line-through;
  margin-right: 10px;
`;

export const NewPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #18181B;

  span{
    font-size: 15px;
    font-weight: 400;
  }
`;