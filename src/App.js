import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import mens_banner from './Components/Assests/banner_mens.png'
import womens_banner from './Components/Assests/banner_women.png'
import kids_banner from './Components/Assests/banner_kids.png'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men" />}></Route>
          <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women"/>}></Route>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}></Route>
          <Route path='/product/:id' element={<Product/>}> </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
