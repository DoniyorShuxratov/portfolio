
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Index';
import AnimJsc from './Pages/Anim';
import Navigation from './Pages/Navigation';
import WebSiteList from './Pages/Grid/WebSiteList';
import PostsList from './Pages/Grid/PostsList';
import LogosList from './Pages/Grid/LogosList';
import SketchesList from './Pages/Grid/SketchesList';

function App() {
  return ( 
    <div className='App'>
      
      <Router>
        <div className='mainframe'>
          <AnimJsc/>
          <Navigation/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/web-site' element={<WebSiteList/>}></Route>
            <Route path='/posts' element={<PostsList/>}></Route>
            <Route path='/logos' element={<LogosList/>}></Route>
            <Route path='/sketches' element={<SketchesList/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
