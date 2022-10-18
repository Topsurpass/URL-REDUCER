import {Error} from './error.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MainComponent } from "./MainComponent";

function App() {
    
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MainComponent/>}/>
        <Route path='/Features' element={<Error/>}/>
        <Route path='/Pricing' element={<Error/>}/> 
        <Route path='/Resources' element={<Error/>}/> 
        <Route path='/Login' element={<Error/>}/> 
        <Route path='/Sign_Up' element={<Error/>}/>  
      </Routes>       
    </Router>
  );
}

export default App;
