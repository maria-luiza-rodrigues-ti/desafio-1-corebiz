import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Slider from "./components/slider/Slider";
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import Products from './components/products/Products'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Slider/>
        <Products/>
        <Form/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
