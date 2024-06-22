import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LogIn } from './components/LogIn/login';
import { SignUp } from './components/SignUp/signup';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route exact path="/SignUp" element={<SignUp />} />
              <Route exact path="/LogIn" element={<LogIn />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
