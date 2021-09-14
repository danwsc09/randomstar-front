import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/header/Header';
import Navbar from 'components/nav/Navbar';
import Main from 'components/main/Main';
import Footer from 'components/footer/Footer';

const App = () => (
  <Router>
    <Header />
    <Navbar />
    <Main />
    <Footer />
  </Router>
);

export default App;
