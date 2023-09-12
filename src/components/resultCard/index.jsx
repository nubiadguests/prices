import { useState } from "react";
import ProductCard from "../card";
import productData from "../data/data";
import {
  ButtonContainer,
  Cancel,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  ContainerCard,
  ContainerMain,
  Discount,
  FinalPrice,
  Infos,
  LineVertical,
  MainContainer,
  Prices,
  Promotion,
  ResultContainer,
  TextInfo,
  TotalContainer,
  TotalPrice,
} from "./styles";
import RowCard from "../rowCard";
import discount from "../../assets/discount.svg";


function ProductList() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const totalDiscount = selectedProducts.reduce(
    (acc, product) => acc + (product.discount || 0),
    0
  );

  const oldTotalPrice = selectedProducts.reduce(
    (acc, product) => acc + parseFloat(product.oldPrice),
    0
  );

  const totalPrice = selectedProducts.reduce(
    (acc, product) => acc + parseFloat(product.newPrice),
    0
  );

  const handleProductSelect = (product, isSelected) => {
    if (isSelected) {
      setSelectedProducts([...selectedProducts, product]);
    } else {
      const updatedSelectedProducts = selectedProducts.filter(
        (selectedProduct) => {
          return selectedProduct !== product;
        }
      );
      setSelectedProducts(updatedSelectedProducts);
    }
  };

  const handleProductHide = (product) => {
    const updatedSelectedProducts = selectedProducts.filter(
      (selectedProduct) => {
        return selectedProduct !== product;
      }
    );
    setSelectedProducts(updatedSelectedProducts);
  };

  return (
    <>
    <MainContainer>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductSelect={handleProductSelect}
            onProductHide={handleProductHide}
            selectedProduct={selectedProducts}
          />
        ))}
      </div>
      <ContainerMain>
        <h1> Resumo da contratação </h1>
        <p>{selectedProducts.length} módulos </p>
      </ContainerMain>

      <ContainerCard>
        {selectedProducts.length > 0 && (
          <div>
            {selectedProducts.map((product) => (
              <RowCard
              key={product.id}
              product={product}
              onProductHide={() => handleProductHide(product)}
              />
              ))}
          </div>
        )}
      </ContainerCard>
      <LineVertical />

      <ResultContainer>
        <Infos>
          <TextInfo>Valor total:</TextInfo>
          <TextInfo>Total de descontos:</TextInfo>
          <Cancel>Cancele a qualquer momento</Cancel>
          <Promotion>Promoção por tempo limitado</Promotion>
        </Infos>
          <Prices>
            <TotalPrice>R${oldTotalPrice.toFixed(2)}</TotalPrice>
            <Discount>
              <img src={discount}/>
              R${totalDiscount.toFixed(2)}</Discount>
          </Prices>
        
      </ResultContainer>
      <LineVertical />

      <TotalContainer>
        <Infos>
        <FinalPrice>Total a pagar:</FinalPrice>
        </Infos>
        <Prices>
          <FinalPrice>
        R${totalPrice.toFixed(2)}
          </FinalPrice>
        </Prices>
      </TotalContainer>
      
      <LineVertical />

      <CheckboxContainer>
      <CheckboxInput type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
      <CheckboxLabel>Marque para reconhecer nossa <span> Política de Privacidade e Termos de Uso </span></CheckboxLabel>
    </CheckboxContainer>

      <ButtonContainer>
      <button> próximo </button>
      </ButtonContainer>
    </MainContainer>

    </>
  );
}

export default ProductList;
