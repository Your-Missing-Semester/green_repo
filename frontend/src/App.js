import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { LogIn } from './components/LogIn/login';
import { SignUp } from './components/SignUp/signup';
import { landingPage } from './components/landingBodyPage/landingPage';
function App() {
  return (
    <landingPage></landingPage>
    // <div className="App">
    //   <Router>
    //       <Routes>
    //           <Route exact path="/" element={<h1>Home Page</h1>} />
    //           <Route exact path="/SignUp" element={<SignUp />} />
    //           <Route exact path="/LogIn" element={<LogIn />} />
    //           <Route exact path="/landingBodyPage" element={<landingBodyPage />} />
    //       </Routes>
    //       <ul>
    //         <Link to="/landingBodyPage">g</Link>
    //       </ul>
    //   </Router>
    // </div>

  );
}

export default App;
