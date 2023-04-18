import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // ========== fonts ========
  @font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), local('StratosSkyeng'),
        url('../fonts/stratosskyengweb-regular.woff2') format('woff2'),
        url('../fonts/stratosskyengweb-regular.woff') format('woff'),
        url('../fonts/stratosskyeng-regular.otf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  //--------------------------

  html,
  body {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: 'StratosSkyeng', sans-serif;
    background-color: #313131;;
    
  }
`;

export const LoginContainer = styled.div`
width: 366px;
height: 439px;
background: #FFFFFF;
border-radius: 12px;
display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const LoginInput = styled.input`
margin-top: 34px;
width: 278.5px;
height: 40px;
 border: none;
border-bottom: 1px solid #D0CECE;
  outline: none;

::-webkit-input-placeholder {
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.003em;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #D0CECE;
}

  ::selection{
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 24px;
    }
`;

export const PasswordInput = styled.input`
margin-top: 30px;
width: 278.5px;
height: 40px;
 border: none;
border-bottom: 1px solid #D0CECE;
  outline: none;

&::-webkit-input-placeholder {
font-weight: 400;
font-size: 18px;
line-height: 40px;
letter-spacing: -0.003em;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #D0CECE;
}
  ::selection{
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 24px;
    }

`;

export const EnterButton = styled.button`
margin-top: 60px;
    width: 278px;
    height: 52px;
    background-color: #580EA2;
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: white;
  

    &:hover{
      background-color: #3F007D
    }

    &:active{
      background-color: #271A58
    }
    
`;

export const RegistrationButton = styled.button`
    margin-top: 20px;
    width: 278px;
    height: 52px;
    background-color: white;
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: black;
    border-color: #D0CECE;
`;