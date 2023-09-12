/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  AccordionButton,
  Button,
  ButtonContainer,
  Card,
  Container,
  ContainerPrices,
  NewPrice,
  OldPrice,
  P,
  PlanFeature,
  PlanFeatures,
  PlanFeaturesContainer,
  Span,
  Title,
  TopSeller,
} from "./styles";
import ul from "../../assets/ul.svg";
import market from "../../assets/market.svg";

function ProductCard({ product, onProductSelect, selectedProduct }) {
  const [selected, setSelected] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleButtonClick = () => {
    setSelected(!selected);
    onProductSelect(product, !selected);
  };

  const handleAccordionClick = () => {
    setAccordionOpen(!accordionOpen);
  };

  useEffect(() => {
    function handleResize() {
      setAccordionOpen(window.innerWidth >= 900);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      {product.top && (
        <TopSeller>
          <Span>Top Seller Restaurantes</Span>
        </TopSeller>
      )}
      <Card>
        <P color>Gestão de</P>
        <Title>{product.title}</Title>
        <ContainerPrices>
          <OldPrice>R${product.oldPrice}</OldPrice>
          <NewPrice>
            R${product.newPrice} <span>/mês</span>
          </NewPrice>
        </ContainerPrices>
        <P>O que está incluso?
        {window.innerWidth < 900 && (
            <AccordionButton onClick={handleAccordionClick}>
              {accordionOpen ? "▲" : "▼"}
            </AccordionButton>
          )}
        </P>
        <PlanFeatures>
          
          <PlanFeaturesContainer accordionOpen={accordionOpen}>
            {product.planFeatures.map((feature, index) => (
              <PlanFeature key={index}>
                <img src={ul} alt={`Feature ${index}`} /> {feature}
              </PlanFeature>
            ))}
          </PlanFeaturesContainer>
        </PlanFeatures>
        <ButtonContainer>
          <Button
            onClick={handleButtonClick}
            style={{
              backgroundColor: selectedProduct.find(
                (select) => select === product
              )
                ? "#2E73FF"
                : "#c5831e",
            }}
          >
            <img src={market} alt="Market" />
            {selected ? "Selecionado" : "Adicionar plano"}
          </Button>
        </ButtonContainer>
      </Card>
    </Container>
  );
}

export default ProductCard;
