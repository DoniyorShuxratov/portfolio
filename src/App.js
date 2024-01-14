
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Index';

import Navigation from './Pages/Navigation';
import WebSiteList from './Pages/Grid/WebSiteList';
import PostsList from './Pages/Grid/PostsList';
import LogosList from './Pages/Grid/LogosList';
import SketchesList from './Pages/Grid/SketchesList';
import EachWorkScreen from './Pages/Grid/MainGreed';

function App() {
  return (
    <div className='App'>
     
      <Router>
        <div className='mainframe'>

          <Routes>
            <Route path='/' element={<>
              <Navigation/> 
              <Home/>
            </>}/>

            <Route path='/web-site' element={<>
              <Navigation/>
              <WebSiteList/>
            </>}/>

            <Route path='/posts' element={<>
              <Navigation/>  
              <PostsList/>
            </>}/>

            <Route path='/logos' element={<>
              <Navigation/>
              <LogosList/> 
            </>}/>
            
            <Route path='/sketches' element={<>
              <Navigation/>
              <SketchesList/>
            </>}/>

            <Route path='/main-grid' element={<EachWorkScreen/>}/> 
          </Routes>
        </div>
      </Router>
    </div>
  )
}


export default App;
