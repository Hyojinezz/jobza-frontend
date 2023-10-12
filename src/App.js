import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBarElements from './components/NavBarElements';


function App() {
  return (
    <Router>
      <div>
        <NavBarElements />
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = '/Login' element = { <Login /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
