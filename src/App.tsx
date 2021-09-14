import React from 'react';
import Header from 'components/header/Header';
import Navbar from 'components/nav/Navbar';
import Main from 'components/main/Main';
import Footer from 'components/footer/Footer';

const App = (props: any) => (
  <React.Fragment>
    <Header />
    <Navbar />
    <Main />
    <h1>Hi !</h1>
    <Footer />
  </React.Fragment>
);

export default App;
