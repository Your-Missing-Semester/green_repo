import './App.css';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
