import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layouts/header';
import Details from './pages/details';
import HomePage from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
