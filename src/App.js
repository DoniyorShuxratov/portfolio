
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Index';
import Navigation from './Pages/Navigation';

function App() {
  return ( 
    <div className='App'>
      <Router>
        <div className='mainframe'>
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
