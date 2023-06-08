import './App.css';
import Home from './components/home/home';
import SeeBreed from './components/seebreed/seeBreed';
import MostPopular from './components/mostpopular/mostPopular';
import Allbreeds from './components/allbreeds/albreeds';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import logo from "./img/CatwikiLogo.svg";
import logowhite from "./img/catwikilogowhite.svg";
import { BreedContextProvider } from './context/breedsContext';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <BreedContextProvider>
    <div className="p-3"><a href="/"><img className="log ml-14" src={logo} alt=""></img></a></div>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/seeBreed" element={<SeeBreed/>} />
        <Route path="/breeds" element={<Allbreeds/>} />
        <Route path="/mostPopular" element={<MostPopular/>} />
     </Routes>
        <footer className="footer p-4 w-11/12 mx-auto">
          <img src={logowhite} alt=""></img>
          <label className="text-white relative">Created by Agustin Molé - devChallenge.io 2023</label>
          </footer>
    </BreedContextProvider>
    </BrowserRouter>
    </div>
  );
}

/*tres paginas: home, cat searched, 10 most populars*/

export default App;
