import {Error} from './error.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MainComponent } from "./MainComponent";
import {useEffect} from 'react';

function App() {

  useEffect(()=>{
    annimateOnScroll('slider','show');
    annimateOnScroll('left','show');
    annimateOnScroll('right','show');
  });

  const annimateOnScroll=(getClass,newClass)=>{
    const classSelector=document.querySelectorAll(`.${getClass}`);
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add(`${newClass}`);
        }else{
          entry.target.classList.remove(`${newClass}`);
        }
      });
    });
    classSelector.forEach((elements)=>observer.observe(elements))
  }  

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
