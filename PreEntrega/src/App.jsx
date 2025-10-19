import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Home from './componets/Home';
import Ofertas from './componets/Ofertas';
import Infaltables from './componets/Infaltables';
import Login from './componets/Login';

function App() {

  return (
     <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/infaltables" element={<Infaltables />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App