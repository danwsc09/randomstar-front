import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'components/header/Header';
import Navbar from 'components/nav/Navbar';
import Main from 'components/main/Main';
import Footer from 'components/footer/Footer';
import ThemeContext from 'context/themeContext';

import { useTheme } from '@mui/material/styles';

const App: React.FC = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ThemeContext);

  return (
    <Router>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </Router>
  );
};

export default App;
