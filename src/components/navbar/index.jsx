// Navbar.js
import { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import login from "../../assets/login.svg";

const NavbarContainer = styled.div`
  background-color: #313131;
  width: 100vw;
  padding: 20px 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 15%;
    height: 10%;

    @media (max-width: 825px) {
    width: 40%;
    height: 40%;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: 100%;
  }
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: ${({ isYellow }) => (isYellow ? "#C5831E" : "white")};
  outline: none;
  margin-right: 3rem;
  text-transform: uppercase;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;


  @media (max-width: 868px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 868px) {
    display: block;
    cursor: pointer;
    font-size: 24px;
    color: white;
    position: absolute;
    right: 20px;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 40px;
    width: 100%;
    right: 0;
    background-color: #313131;
    padding: 20px;
    z-index: 1;
    flex-direction: column;
  }
`;
const LoginButton = styled(Button)`
  border-radius: 6px;
  border: 1px solid #fff;
  padding: 13px 35px;
  gap: 8px;

  img{
    width: auto;
    height: 30%;
    margin-right: 0.3rem;
  }
  
`;

function Navbar() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    }
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // return (
  //   <NavbarContainer>
  //     <img src={logo} />
      
  //     <MobileMenuIcon onClick={toggleMobileMenu}>
  //       &#9776;
  //     </MobileMenuIcon>
      
  //     <ButtonsContainer>
  //       <Button
  //         onClick={() => handleButtonClick("solucoes")}
  //         isYellow={selectedButton === "solucoes"}
  //       >
  //         soluções
  //       </Button>
  //       <Button
  //         onClick={() => handleButtonClick("planos")}
  //         isYellow={selectedButton === "planos"}
  //       >
  //         planos
  //       </Button>
  //       <Button
  //         onClick={() => handleButtonClick("blog")}
  //         isYellow={selectedButton === "blog"}
  //       >
  //         blog
  //       </Button>
  //       <Button
  //         onClick={() => handleButtonClick("contato")}
  //         isYellow={selectedButton === "contato"}
  //       >
  //         contato
  //       </Button>

  //       <LoginButton> <img src={login} />Login</LoginButton>
  //     </ButtonsContainer>
      
  //     <MobileMenu isOpen={isMobileMenuOpen}>
  //       <Button
  //         onClick={() => handleButtonClick("solucoes")}
  //         isYellow={selectedButton === "solucoes"}
  //       >
  //         soluções
  //       </Button>
  //       <Button
  //         onClick={() => handleButtonClick("planos")}
  //         isYellow={selectedButton === "planos"}
  //       >
  //         planos
  //       </Button>
  //       <Button
  //         onClick={() => handleButtonClick("blog")}
  //         isYellow={selectedButton === "blog"}
  //       >
  //         blog
  //       </Button>
  //       <Button
  //         onClick={() => handleButtonClick("contato")}
  //         isYellow={selectedButton === "contato"}
  //       >
  //         contato
  //       </Button>
  //       <Button>Login</Button>

  //     </MobileMenu>
  //   </NavbarContainer>
  // );
}

export default Navbar;
