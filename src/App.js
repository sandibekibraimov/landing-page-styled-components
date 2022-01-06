import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Card from './components/Card';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

import content from './content';
import Footer from './components/Footer';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card item={item} />
          ))}
        </Container>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
