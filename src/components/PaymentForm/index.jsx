import { useEffect, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  InputAdornment,
} from "@mui/material";

import {
  Button,
  ContainerBox,
  Discount,
  FinalPrice,
  H2,
  H3,
  Infos,
  InputsContainer,
  LineHorizontal,
  LineVertical,
  MainContainer,
  P,
  PaymentContainer,
  Prices,
  ResultContainer,
  StepContainer,
  StyledTextField,
  StyledTextFieldEnd,
  TextInfo,
  TotalContainer,
  TotalPrice,
} from "./styles";
import visa from "../../assets/cadastro/visa.svg";
import maestro from "../../assets/cadastro/maestro.svg";
import mastercard from "../../assets/cadastro/mastercard.svg";
import padlock from "../../assets/cadastro/padlock.svg";
import pixIMG from "../../assets/cadastro/pix.svg";
import boletoIMG from "../../assets/cadastro/boleto.svg";
import RowCard from "../rowCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


function Payment() {

  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    cep: "",
    cidade: "",
    endereco: "",
    estado: "",
    telefone: "",
  });

  const [creditCard, setCreditCard] = useState({
    numeroCartao: "",
    desconto: "",
    codigoSeguranca: "",
    dataValidade: "",
  });

  const [paymentMethod, setPaymentMethod] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isCodeValid, setIsCodeValid] = useState(false);

  useEffect(() => {
    const savedSelectedProducts =
      JSON.parse(localStorage.getItem("selectedProducts")) || [];
    setSelectedProducts(savedSelectedProducts);
  }, []);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    const { name } = e.target;

    setPaymentMethod(name);
  };

  const handleChangeP = (e) => {
    const { name, value } = e.target;
    setCreditCard({ ...creditCard, [name]: value });
  };

  const handleChangeD = (e) => {
    const { name, value } = e.target;

    setCreditCard({ ...creditCard, [name]: value });

    setIsCodeValid(value.length >= 4);
  };

  return (
    <MainContainer>
      <StepContainer>
        <div>
          <H2>dados pessoais</H2>
          <InputsContainer>
          
          <StyledTextField
            type="text"
            name="nome"
            margin="dense"
            style={{marginRight: "5px"}}
            placeholder="Nome"
            variant="outlined"
            label="Nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <StyledTextField
            type="text"
            margin="dense"
            name="sobrenome"
            placeholder="Sobrenome"
            variant="outlined"
            label="Sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
          />
          <StyledTextFieldEnd
            type="text"
            name="endereco"
            placeholder="endereço"
            variant="outlined"
            margin="dense"
            label="Endereço"
            value={formData.endereco}
            onChange={handleChange}
                       />
          <StyledTextField
            type="text"
            name="estado"
            style={{marginRight:"5px"}}
            margin="dense"
            placeholder="Estado"
            variant="outlined"
            label="Estado"
            value={formData.estado}
            onChange={handleChange}
          />
          <StyledTextField
            type="text"
            name="cidade"
            margin="dense"
            placeholder="Cidade"
            variant="outlined"
            label="Cidade"
            value={formData.cidade}
            onChange={handleChange}
          />
          <StyledTextField
            type="text"
            name="cep"
            style={{marginRight: "5px"}}
            placeholder="cep"
            variant="outlined"
            margin="dense"
            label="CEP"
            value={formData.cep}
            onChange={handleChange}
          />
          <StyledTextField
            type="text"
            name="telefone"
            placeholder="Telefone"
            margin="dense"
            variant="outlined"
            label="Telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
          </InputsContainer>
        </div>
        <div
            style={{
              border: "1px solid #C5831E",
              backgroundColor: "#fafafa",
              marginTop: "2rem",
              width: "100%",
              padding: "16px",
            }}
          >

          <FormControlLabel
            control={
              <Checkbox
                checked={paymentMethod === "pagamentoComCartao"}
                onChange={handlePaymentMethodChange}
                name="pagamentoComCartao"
                style={{ display: "block" }}
                icon={
                  <div
                    style={{
                      height: "16px",
                      width: "16px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      border: "1px solid #C5831E",
                    }}
                  />
                }
                checkedIcon={
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      border: "5px solid #C5831E",
                    }}
                  />
                }
              />
            }
            label="Pague com cartão de crédito"
          />
          {paymentMethod === "pagamentoComCartao" && (
            <>
              <div>
                <TextField
                  margin="dense"
                  style={{ marginRight: "4px" }}
                  type="text"
                  variant="outlined"
                  label="Número do Cartão"
                  name="numeroCartao"
                  placeholder="Número do Cartão"
                  onChange={handleChangeP}
                  value={creditCard.numeroCartao}
                />
                <TextField
                  margin="dense"
                  type="text"
                  name="dataValidade"
                  placeholder="Data de Validade"
                  variant="outlined"
                  label="Data de Validade"
                  value={creditCard.dataValidade}
                  onChange={handleChangeP}
                />
                <TextField
                  margin="dense"
                  type="password"
                  name="codigoSeguranca"
                  placeholder="Código de Segurança"
                  variant="outlined"
                  label="Código de Segurança"
                  value={creditCard.codigoSeguranca}
                  onChange={handleChangeP}
                />
              </div>
            </>
          )}
          </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
        >
          <div style={{ border: "1px solid #ccc", margin: "5px" }}>
            <img src={visa} alt="Visa" />
          </div>
          <div
            style={{
              border: "1px solid #ccc",
              margin: "5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={maestro} alt="Maestro" />
          </div>
          <div
            style={{
              border: "1px solid #ccc",
              margin: "5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={mastercard} alt="Mastercard" />
          </div>
        </div>
        <div
          style={{
            marginTop: "15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={padlock}
            alt="Ícone de Cadeado"
            style={{ marginRight: "5px" }}
          />
          <P>
            Protegemos suas informações de pagamento usando criptografia
            avançada para fornecer mais segurança ao nível do banco.
          </P>
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <H3>Outras formas de pagamento</H3>
          <ContainerBox>

          <div
            style={{
              width: "100%",
              border: "1px solid #ccc",
              backgroundColor: "#fafafa",
              marginTop: "2rem",
              padding: "10px",
              display: "flex",
              alignItems: "center",
            }}
            >
            <FormControlLabel
              control={
                <Checkbox
                checked={paymentMethod === "pagamentoComPix"}
                  onChange={handlePaymentMethodChange}
                  name="pagamentoComPix"
                  style={{ display: "block" }}
                  icon={
                    <div
                    style={{
                      height: "16px",
                        width: "16px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        border: "1px solid #C5831E",
                      }}
                    />
                  }
                  checkedIcon={
                    <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      border: "5px solid #C5831E",
                    }}
                    />
                  }
                />
              }
              label={
                <span
                  style={{
                    fontFamily: "Mulish",
                    fontSize: "13px",
                    color: "#313131",
                  }}
                >
                  Liberação automática após confirmação de pagamento
                </span>
              }
            />
            <img
              src={pixIMG}
              alt="Imagem Pix"
              style={{
                margin: 10,
              }}
              />
          </div>
          </ContainerBox>

          <div
            style={{
              border: "1px solid #ccc",
              backgroundColor: "#fafafa",
              marginTop: "2rem",
              padding: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <FormControlLabel
              control={
                <Checkbox
                  checked={paymentMethod === "pagamentoComBoleto"}
                  onChange={handlePaymentMethodChange}
                  name="pagamentoComBoleto"
                  style={{ display: "block" }}
                  icon={
                    <div
                      style={{
                        height: "16px",
                        width: "16px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        border: "1px solid #C5831E",
                      }}
                    />
                  }
                  checkedIcon={
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        border: "5px solid #C5831E",
                      }}
                    />
                  }
                />
              }
              label={
                <span
                  style={{
                    fontFamily: "Mulish",
                    fontSize: "13px",
                    color: "#313131",
                  }}
                >
                  Liberação automática após confirmação de pagamento
                </span>
              }
            />
            <img
              src={boletoIMG}
              alt="Imagem boleto"
              style={{
                margin: 10,
              }}
            />
          </div>
        </div>
      </StepContainer>

      <LineHorizontal />

      <PaymentContainer>
        <H3 style={{ textAlign: "left" }}>Resumo de contratação</H3>
        <P style={{ textAlign: "left" }}>{selectedProducts.length} módulos</P>
        <LineVertical />

        <div>
          {selectedProducts.map((product) => (
            <RowCard key={product.id} product={product} />
          ))}
        </div>
        <ContainerBox>
          <div
            style={{
              border: "1px solid #C5831E",
              backgroundColor: "#fafafa",
              marginTop: "2rem",
              width: "80%",
              padding: "16px",
            }}
          >
            <div style={{ margin: 10 }}>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "0.8em",
                  textAlign: "left",
                }}
              >
                Código de Desconto
              </p>
            </div>
            <div>
              <TextField
                margin="dense"
                variant="outlined"
                label="Digite o seu código de desconto"
                type="text"
                name="desconto"
                fullWidth
                placeholder="Digite o seu código de desconto"
                value={creditCard.desconto}
                onChange={handleChangeD}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {isCodeValid ? (
                        <CheckCircleIcon style={{ color: " #C5831E" }} />
                      ) : (
                        <CheckCircleIcon style={{ color: " #ccc" }} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        </ContainerBox>
        <div>
          <H3 style={{ textAlign: "left" }}>Resumo do faturamento</H3>
        </div>
        <ResultContainer>
          <Infos>
            <TextInfo>Valor total:</TextInfo>
            <TextInfo>Total de descontos:</TextInfo>
          </Infos>
          <Prices>
            <TotalPrice>R${oldTotalPrice.toFixed(2)}</TotalPrice>
            {isCodeValid && <Discount>R${totalDiscount.toFixed(2)}</Discount>}
          </Prices>
        </ResultContainer>
        <LineVertical />

        <TotalContainer>
          <Infos>
            <FinalPrice>Total a pagar:</FinalPrice>
          </Infos>
          <Prices>
            <FinalPrice>
              {isCodeValid
                ? `R$${totalPrice.toFixed(2)}`
                : `R$${oldTotalPrice.toFixed(2)}`}
            </FinalPrice>
          </Prices>
        </TotalContainer>
        <LineVertical />
        <Button>
          {" "}
          pagar{" "}
          {isCodeValid
            ? `R$${totalPrice.toFixed(2)}`
            : `R$${oldTotalPrice.toFixed(2)}`}
        </Button>
      </PaymentContainer>
    </MainContainer>
  );
}

export default Payment;
