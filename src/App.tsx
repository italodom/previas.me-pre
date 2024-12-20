import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: #221319;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: linear-gradient(to top, #221319, #431121);
    padding: 20px;
    text-align: center;

    @media (max-width: 768px) {
        gap: 40px;
        padding: 16px;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 60px;

    img {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        margin-bottom: 30px;

        img {
            width: 300px; 
        }
    }
`;

const MainText = styled.h2`
    color: white;
    font-size: 46px;
    font-weight: 400;
    max-width: 900px;
    line-height: 1.3;
    margin-bottom: 60px;

    @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 30px;
        padding: 0 10px;
    }
`;

const Alert = styled.div`
    background-color: #B3894D;
    width: 605px;
    color: #181C22;
    padding: 16px 32px;
    border-radius: 8px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        width: 90%;
        max-width: 400px;
        font-size: 20px;
        padding: 12px 24px;
    }
`;

const Footer = styled.a`
    color: white;
    opacity: 0.7;
    font-size: 14px;
    position: absolute;
    bottom: 40px;

    @media (max-width: 768px) {
        position: relative;
        bottom: initial;
        margin-top: 20px;
    }
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Logo>
                    <img src="../src/assets/logo-previas-me-horizontal.svg" alt="Previas.me"/>
                </Logo>

                <MainText>
                    Uma nova forma de compartilhar prévias
                    de conteúdo com segurança e estilo.
                </MainText>

                <Alert>
                    Previas.me está quase aqui. Fique atento!
                </Alert>

                <Footer href="https://previas.me">
                    ©2024 Previas.me
                </Footer>
            </Container>
        </>
    );
};

export default App;