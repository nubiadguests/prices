import { Fragment, useEffect, useState } from "react";
import Balada from "../../assets/cadastro/balada.png";
import Barman from "../../assets/cadastro/barman.png";
import { TextField } from "@mui/material";
import arrow from "../../assets/arrow.svg";
import {
  Button,
  ButtonContainer,
  CenteredDiv,
  CheckBox,
  Container,
  FormContainer,
  H1,
  ImageContainer,
  SpanContainer,
  StepContainer,
} from "./styles";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

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
  const [fieldErrors, setFieldErrors] = useState({});
  const [fieldErrors2, setFieldErrors2] = useState({});
  const [imageSrc, setImageSrc] = useState(Barman);
  const [imageVisible, setImageVisible] = useState(true);
  const [activeStep, setActiveStep] = useState(1);

  const [skipped, setSkipped] = useState(new Set());

  useEffect(() => {
    setImageVisible(true);
  }, [imageSrc]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      if (!isValidEmail(value)) {
        setFieldErrors({ ...fieldErrors, [name]: "Formato de email inválido" });
      } else {
        setFieldErrors({ ...fieldErrors, [name]: "" });
      }
    }

    if (name === "whatsapp") {
      if (!isValidPhoneNumber(value)) {
        setFieldErrors({
          ...fieldErrors,
          [name]: "Número de telefone inválido",
        });
      } else {
        setFieldErrors({ ...fieldErrors, [name]: "" });
      }
    }

    if (name === "senha") {
      if (value.length < 8) {
        setFieldErrors2({
          ...fieldErrors2,
          senha: "A senha deve ter pelo menos 8 caracteres",
        });
      } else {
        setFieldErrors2({ ...fieldErrors2, senha: "" });
      }
    }

    if (name === "confirmaSenha") {
      if (!value) {
        setFieldErrors2({
          ...fieldErrors2,
          confirmaSenha: "Campo obrigatório",
        });
      } else if (value !== formData.senha) {
        setFieldErrors2({
          ...fieldErrors2,
          confirmaSenha: "As senhas não coincidem",
        });
      } else {
        setFieldErrors2({ ...fieldErrors2, confirmaSenha: "" });
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleAgreementChange = () => {
    setAgreed(!agreed);
  };

  const nextStep = () => {
    if (step < 3 && isFormDataValid()) {
      if (agreed) {
        let newSkipped = skipped;
        setStep((prevStep) => prevStep + 1);
        setSkipped(newSkipped);

        if (step + 1 === 2) {
          setImageSrc(Balada);
          setImageVisible(false);
        }
      } else {
        setFieldErrors({
          ...fieldErrors,
          agreed: "Você deve concordar com as políticas do estabelecimento",
        });
      }
    }
  };

  const isFormDataValid = () => {
    const { nome, email, whatsapp, estabelecimento, senha, confirmaSenha } =
      formData;

    const errors = {};
    const errors2 = {};

    if (!nome) {
      errors.nome = "Campo obrigatório";
    }

    if (!email) {
      errors.email = "Campo obrigatório";
    }

    if (!whatsapp) {
      errors.whatsapp = "Campo obrigatório";
    }

    if (!estabelecimento) {
      errors.estabelecimento = "Campo obrigatório";
    }

    if (!senha) {
      errors2.senha = "Campo obrigatório";
    } else if (senha.length < 8) {
      errors2.senha = "A senha deve ter pelo menos 8 caracteres";
    }

    if (!confirmaSenha) {
      errors2.confirmaSenha = "Campo obrigatório";
    } else if (confirmaSenha !== senha) {
      errors2.confirmaSenha = "As senhas não coincidem";
    }

    setFieldErrors(errors);
    setFieldErrors2(errors2);

    const isValidStep1 = Object.keys(errors).length === 0;
    const isValidStep2 = Object.keys(errors2).length === 0;

    return step === 1 ? isValidStep1 : step === 2 ? isValidStep2 : true;
  };

  return (
    <Container>
      {imageVisible && (
        <ImageContainer>
          <img src={imageSrc} alt="Barman" />
        </ImageContainer>
      )}

      <FormContainer>
        <Box sx={{ width: "100%", margin: "10px" }}>
          <Stepper activeStep={step - 1}>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
          {activeStep === step ? (
            <Fragment>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
              </Box>
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </Box>
        <StepContainer style={{ display: step === 1 ? "block" : "none" }}>
          <H1 style={{ marginBottom: 10 }}>Complete os dados</H1>
          <TextField
            type="text"
            name="nome"
            label="Nome"
            variant="outlined"
            value={formData.nome}
            onChange={handleChange}
            error={fieldErrors.nome ? true : false}
            required
            helperText={fieldErrors.nome}
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
            error={fieldErrors.email ? true : false}
            helperText={fieldErrors.email}
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
            error={fieldErrors.whatsapp ? true : false}
            helperText={fieldErrors.whatsapp}
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
            error={fieldErrors.estabelecimento ? true : false}
            helperText={fieldErrors.estabelecimento}
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
              Eu li e concordo com{" "}
              <span style={{ color: "#C5831E" }}> os termos de uso </span>
            </label>
            {fieldErrors.agreed && (
              <div style={{ color: "red" }}>{fieldErrors.agreed}</div>
            )}
          </div>
        </StepContainer>
        <StepContainer style={{ display: step === 2 ? "block" : "none" }}>
          <H1>Crie uma senha</H1>
          <p>Estamos quase lá!</p>
          <TextField
            type="password"
            name="senha"
            label="Senha"
            variant="outlined"
            value={formData.senha}
            onChange={handleChange}
            required
            error={fieldErrors2.senha ? true : false}
            helperText={fieldErrors2.senha}
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
            required
            error={fieldErrors2.confirmaSenha ? true : false}
            helperText={fieldErrors2.confirmaSenha}
            fullWidth
            margin="normal"
          />
          <span style={{ color: "red", marginTop: 30 }}>
            Use mais de 8 caracteres combinando letras e números{" "}
          </span>
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
          {step < 3 && (
            <Button onClick={nextStep}>
              {step === 2 ? "Próxima" : "Vamos lá"}
              <img src={arrow} />
            </Button>
          )}

         
        </ButtonContainer>
        <SpanContainer>
            <CenteredDiv>
              {step === 1 && (
                <p>
                  Já é cliente? Clique aqui para fazer{" "}
                  <span style={{ color: "#C5831E" }}> Login </span>{" "}
                </p>
              )}
            </CenteredDiv>
          </SpanContainer>
      </FormContainer>
    </Container>
  );
}

export default Cadastro;
