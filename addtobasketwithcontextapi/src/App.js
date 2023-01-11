import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layouts/header';
import ProductsDetails from './pages/details';
import HomePage from './pages/homepage';
import ProductList from './pages/productlist';
import ProductsInBasket from './pages/productsinbasket';


function App() {
  return (
    <div className="App">
      <Header />
       <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/products-list" element={<ProductList/>}/>
       <Route path="/products-in-basket" element={<ProductsInBasket/>}/>
       <Route path="/products-detail/:id" element={<ProductsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
