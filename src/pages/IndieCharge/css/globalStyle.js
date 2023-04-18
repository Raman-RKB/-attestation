import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
  }

  ul li {
    list-style: none;
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
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;
  }
`;


export const Container = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
`;

export const ParentContainer = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    background-color: #181818;
`;

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
     background-color: ${props => props.background};
`;

export const Main = styled.main`
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;