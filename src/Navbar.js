import React from 'react'
import "react-router-dom"
import {Fade}  from  'react-reveal'
import { NavLink, Switch,Route, useLocation } from 'react-router-dom'
import Shaukat from './Shaukat'
import Contact from './Contact'
// import 'react-scroll'
import { scroller } from 'react-scroll';

const Api=fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((json) => console.log(json));


const Navbar=()=>{
   const navs=useLocation();


    return (
        <React.Fragment>
{/*            
            <Switch>
            <Route exact path='/' component={Shaukat}  />
            <Route exact path='/Portfolio'  />
            <Route exact path='/Contact' component={Contact}  />
            </Switch> */}

{/* WHAT REALLY RENDERS! */}
      <Fade top> 
        <div className='nav'> 
            <NavLink    className='navL'     to='/PortFolio' activeClassName="selected" >
                
                 PORTFOLIO 
                 {
     scroller.scrollTo("L", {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    })

}
                 </NavLink>
 
 
            <NavLink  className='navL'    to='/Contact' activeClassName="selected" > 
            
            Contact ME 
            {
     scroller.scrollTo(".Contact", {
      duration: 300,
      delay: 0,
      smooth: "easeInOutQuart",     
    })

}      
            
            
            </NavLink>
            <NavLink   className='navL'   to='/' activeClassName="selected" > 
            
            About
            {
     scroller.scrollTo("introduction", {
      duration: 100,
      delay: 0, 
      smooth: "easeInOutQuart",
    })

}
            
              </NavLink>
            </div>
            </Fade>
        </React.Fragment>
    )
}

export default Navbar;