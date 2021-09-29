import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/homePage';
import ContactoPage from './pages/contactoPage';
import DesayunoPage from './pages/desayunoPage';
import NosotrosPage from './pages/nosotrosPage';
import NovedadesPage from './pages/novedadesPage';
import TortasPage from './pages/tortasPage';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Contacto" exact component={ContactoPage} />
        <Route path="/Desayunos" exact component={DesayunoPage} />
        <Route path="/Nosotros" exact component={NosotrosPage} />
        <Route path="/Novedades" exact component={NovedadesPage} />
        <Route path="/Tortas" exact component={TortasPage} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;