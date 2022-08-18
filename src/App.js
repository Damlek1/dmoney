import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Hero from './components/HeroSection/Hero'

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
