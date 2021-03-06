import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Router,Routes,Route} from 'react-router-dom';
import Products from "./component/Products";
import Product from "./component/Product";

function App() {
  return (
      <>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<Product/>}></Route>

      </Routes>
      </>
  );
}

export default App;
