import React from 'react'
import './App.scss';
import { FiMenu, FiFacebook, FiTwitter  } from 'react-icons/fi';
import logo from './images/logo.svg';
import worker from './images/workingCrop.jpeg';
import deskWorker from './images/working.svg'
import brand from './images/brandIcon.svg'
import record from './images/recordIcon.svg'
import custom from './images/customIcon.svg'
import { AdvanceStatictic } from './AdvanceStatictic';
import { Footer } from './Footer';
import {SiPinterest} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
import { Menu } from './menu';
import {useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const MainComponent = () => {
    const [menu, setmenu] = useState(true);
    const [link, setLink] = useState('')

  useEffect(() => {
    let output=''
    const childDiv = document.getElementById('resultDivs');

    document.getElementById('submitUrl').onclick=()=>{  
        //Fetch data and append this div, and input the data into the div   
    axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then(res=>{
         output+= ` <div class='shortlink' id='initials'>${res.data.result.original_link}</div>
                       <div class='shortlink' id='shortlink'>${res.data.result.short_link}</div>
                          <div id='copy' class='copyBut'>
                            <button>COPY</button>
                        </div>
                   `      
            childDiv.innerHTML=output;
            document.querySelector('.error').innerHTML='';
            setLink('');
            document.getElementById('copy').onclick=()=>{
                const text = document.getElementById('shortlink').innerHTML;
                navigator.clipboard.writeText(text);
            }
        }
    )    
      .catch(err=>{
        document.querySelector('.error').innerHTML=err.message;
     })
  
    }
    
  })

  //toggle between the mobile nav and the desktop nav
  const handleMobileMenu =()=>{

    setmenu(!menu);
        if(menu){
            document.querySelector('.menuList').style.display='block';
            document.getElementById('header-img').style.display='none';
        }else{
            document.querySelector('.menuList').style.display='none';
            document.getElementById('header-img').style.display='block';
        }
    
    }

  const  handleChange=(e)=>{
    setLink(()=>{
        return e.target.value;
    })
  }
  
  return (
    <div className="App">

        <header className="App-header">
            <Link to='/'>
                <div className='webLogo' >
                    <img src={logo} alt='logo'/>
                </div>
            </Link>
           
           <div className='lagMenu'>
                <nav className='menu3'>
                    <Link className='link' to='/Features'>
                        <div>Features</div>
                    </Link>
                    <Link to='/Pricing' className='link'>
                        <div>Pricing</div>
                    </Link>
                    <Link to='/Resources' className='link'>
                        <div>Resources</div>
                    </Link>
                </nav>           
                <div className='loginSignUp'>
                    <Link to='/Login' className='link'>
                        <div>Login</div>
                    </Link>
                    
                    <div  className='signup'>
                        <Link to='/Sign_Up' className='linkBut'>
                            <button>Sign Up</button>
                        </Link>
                    </div>
                </div>   
            </div>
 
            <div className='menu' id='menu'>
                <FiMenu onClick={handleMobileMenu}/>
            </div>
        </header>

        <section className='firstSec'>

            <div className='textPics'>
                <Menu/>
                <div id='header-img' >
                    <img src={worker} width='100%' alt='worker' className='work'/>
                    <img src={deskWorker} width='100%' alt='worker' className='deskWorker'/>
                </div>           
                <div className='intro'>
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <button className='getStarted'>Get started</button>
                </div>
            </div>
          

            <div className='shortDiv'>         
                <div className='searchDIV'>
                    <input type='text' placeholder='Shorten a link here...' id='search' value={link} onChange={handleChange}/>
                    <p className='error'></p> 
                </div>
                <div className='subUrl'>
                    <input type='button' id='submitUrl' value='Shorten It'/>
                </div>
            </div>

            <div className='display' id='resultDivs'/>
          
        </section>

        <section className='advanceSection'>
            <div className='advance'>
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
            </div>

            <div className='advanceDiv'>

            <AdvanceStatictic 
                class='brand1'
                img={brand}
                title='Brand Recognition'
                paragraph={`Boost your brand recognition with
                each link. Generic links don't mean a thing.
                Branded links help instil confidence in 
                your content.`}
                ids='firstBrand'
            />

            <AdvanceStatictic
                class='brand2' 
                img={record}
                title='Detailed Records'
                paragraph={`Gain insights into who is 
                clicking your links. Knowing when and 
                where people engage witjh your content helps
                inform better decisions`}
                ids='secondBrand'
            />

            <AdvanceStatictic 
                class='brand3'
                img={custom}
                title='Fully Customizable'
                paragraph={`Improve brand awareness and 
                content discoverabilitythrough customizable
                links, supercharging audience engagement.`}
                ids='thirdBrand'
            />
            
          </div>
        
        </section>
        
        <section>
            <div className='boostLinks'>
                <div>
                <h3>Boost your links today</h3>
                <button>Get Started</button>
                </div>
            </div>
        </section>

        <footer className='foot'>
            <div>
                <h2>Shortly</h2>
            </div>
            <Footer/>
            <div className='socials'>
                <FiFacebook/>
                <FiTwitter/>
                <SiPinterest/>
                <BsInstagram/>
            </div>  
        </footer>
        <div id='hey'>
        </div>
      </div>
  )
}
