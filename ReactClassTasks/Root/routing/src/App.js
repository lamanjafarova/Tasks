import { Route, Routes } from "react-router";
import Header from "./layouts/header";
import Customers from "./pages/customers";
import Homepage from "./pages/homepage";
import Order from "./pages/order";
import Products from "./pages/products";
import Supplier from "./pages/supplier";
// import TableForm from "./tableform/table";

function App() {
  return (
    <div className="App">
      <Header />
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/customers"
          element={
            <Customers  />
          }
        />
        <Route
          path="/order"
          element={
            <Order />
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/supplier" element={<Supplier />} />
      </Routes>
      {/* <TableForm /> */}
    </div>
  );
}

export default App;
