import { useState } from "react";
import styled from "styled-components";
import Barman from "../assets/cadastro/barman.png";
import { TextField } from "@mui/material";

const Container = styled.div`
  display: flex;
  /* align-items: stretch; Para esticar o Container para ocupar a altura total */
  /* padding: 20px; */
  height: 100vh; /* Tornar o Container com altura total da viewport */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 100vh;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  text-align: left;
  flex-direction: column; /* Os inputs serão alinhados verticalmente */
  justify-content: center; /* Centraliza verticalmente */
  align-items: center; /* Centraliza horizontalmente */
`;

const ImageContainer = styled.div`
  flex: 1; /* Para o ImageContainer ocupar 50% da largura do Container */
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #313131 0%, rgba(196, 131, 30, 0) 100%);
  mix-blend-mode: multiply;
  align-items: center;
  z-index: -9999;

  img {
    width: 800px;
    height: 800px;
  }
`;

const StepContainer = styled.div`
  width: 80%;
  height: 100%;
  text-align: left;
  /* border: 1px solid #ccc; */
  padding: 20px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const H1 = styled.h1`
  font-family: Mulish;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })``;

function Cadastro() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    estabelecimento: "",
    senha: "",
    confirmaSenha: "",
    pagamento: "",
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgreementChange = () => {
    setAgreed(!agreed);
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Container>
      <ImageContainer>
        <img src={Barman} alt="Barman" />
      </ImageContainer>

      <FormContainer>
        <StepContainer style={{ display: step === 1 ? "block" : "none" }}>
          <H1 style={{ marginBottom: 10 }}>Complete os dados</H1>
          <TextField
            type="text"
            name="nome"
            label="Nome"
            variant="outlined"
            value={formData.nome}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />

          <TextField
            type="text"
            name="whatsapp"
            label="WhatsApp"
            variant="outlined"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />

          <TextField
            type="text"
            name="estabelecimento"
            label="Estabelecimento"
            variant="outlined"
            value={formData.estabelecimento}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />

          <div>
            <label>
              <CheckBox
                name="agreed"
                checked={agreed}
                onChange={handleAgreementChange}
                required
              />
              Concordo com as políticas do estabelecimento
            </label>
          </div>
        </StepContainer>

        <StepContainer style={{ display: step === 2 ? "block" : "none" }}>
          <h2>Etapa 2: Senha</h2>
          <TextField
            type="password"
            name="senha"
            label="Senha"
            variant="outlined"
            value={formData.senha}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            type="password"
            name="confirmaSenha"
            label="Confirme sua Senha"
            variant="outlined"
            value={formData.confirmaSenha}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </StepContainer>

        <StepContainer style={{ display: step === 3 ? "block" : "none" }}>
          <h2>Etapa 3: Informações de Pagamento</h2>
          <TextField
            type="text"
            name="pagamento"
            placeholder="Informações de Pagamento"
            value={formData.pagamento}
            onChange={handleChange}
          />
        </StepContainer>

        <ButtonContainer>
          {step > 1 && <Button onClick={prevStep}>Anterior</Button>}
          {step < 3 && (
            <Button onClick={nextStep}>
              {step === 2 ? "Próxima" : "Enviar"}
            </Button>
          )}
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}

export default Cadastro;
