import { Route, Routes } from "react-router-dom";
import Header from "./layouts/header"
import CountryDetail from "./pages/details";
import Homepage from "./pages/homepage";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/country-detail/:name" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
