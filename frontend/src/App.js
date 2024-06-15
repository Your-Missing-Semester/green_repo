import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { LogIn } from './components/LogIn/login';
import { SignUp } from './components/SignUp/signup';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path="/" element={<h1>Home Page</h1>} />
              <Route exact path="/SignUp" element={<SignUp />} />
              <Route exact path="/LogIn" element={<LogIn />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
