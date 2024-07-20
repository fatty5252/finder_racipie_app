import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Practice from './practics';
import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Racipies from './pages/Racipies';
import RecipesDetails from './components/RecipesDetails';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/practice" element={<Practice/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path='/racipies' element={<Racipies/>}/>
      <Route path='/recipes/:id' element={<RecipesDetails/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
