/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CloseButton, NewPrice, OldPrice, Prices, ProductCard, ProductInfo, Title } from './styles';


const RowCard = ({ product, onProductHide }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleHideCard = () => {
    setIsVisible(false);
    onProductHide(product);
  };

  return isVisible ? (
    <ProductCard>
      <CloseButton onClick={handleHideCard}>X</CloseButton>
      <ProductInfo>
        <Title>{product.title}</Title>
        <Prices>
          <OldPrice>R${product.oldPrice.toFixed(2)}</OldPrice>
          <NewPrice>R${product.newPrice.toFixed(2)} <span> /mês</span>
          </NewPrice>
        </Prices>
      </ProductInfo>
    </ProductCard>
  ) : null;
};

export default RowCard;
