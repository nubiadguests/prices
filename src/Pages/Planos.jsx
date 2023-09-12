
import right from "../assets/right.svg";
import { MainContainer } from "./styles";
import ProductList from "../components/resultCard";

function Planos() {
  return (
    <>
      <MainContainer>
        <h1>Faça uma simulação personalizada</h1>
        <div style={{display: "flex", alignItems: "center"}}>
        <img style={{width: "1.5rem", marginRight: "1rem"}} src={right} />
        <p>
          Selecione os módulos de seu interesse e calcule o valor do seu pacote
          de forma automática. Ganhe descontos progressivos na contratação de
          mais de 1 módulo.
        </p>
        </div>
      </MainContainer>
      <div>
        <ProductList />
      </div>
      
    </>
  );
}

export default Planos;
