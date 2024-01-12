
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Index';
import Navigation from './Pages/Navigation';
import AnimJsc from './Pages/Anim';

function App() {
  return ( 
    <div className='App'>
      <Router>
        <div className='mainframe'>
        <AnimJsc/>
        <Navigation/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
