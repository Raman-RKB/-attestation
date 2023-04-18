import React, { useContext } from 'react';
import Navigationleft from './components/Navigationleft';
import Centerblock from './components/Centerblock';
import Player from './components/Player';
import { ThemeContext } from '../../ThemeContext';

import { ParentContainer, Container, Wrapper, Main, GlobalStyle } from './css/globalStyle';


function MainScreen() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyle />
      <ParentContainer >
        <Wrapper background={theme === 'dark' ? '#000000' : '#ffffff'}>
          <Container >
            <Main>
              <Navigationleft />
              <Centerblock />
            </Main>
            <Player author='Баста' album='Ты та...' />
          </Container>
        </Wrapper>
      </ParentContainer>
    </>
  );
}

export default MainScreen;
