import React, { useEffect, useState } from 'react'
import Shaukat from './Shaukat'
import styled from "styled-components";
import Navbar from './Navbar'
import Contact from './Contact'
import {Route , Switch,useLocation} from 'react-router-dom'
import  scroller  from 'react-scroll'
import './index.css'
const App= ()=>{
    const location=useLocation();
    // const redire=location.pathname=='.L'
return(
    <>
 <React.Fragment>
           
           <Switch>

        
           {/* <Route exact path='/'  /> */}
           <Route exact path='/Portfolio'   />
           

        {
             scroller.scrollTo("introduction", {
              duration: 100,
              delay: 0,
              smooth: "easeInOutQuart",
            })
        }   <Route exact  path='/Contact' component={Contact}  />
           </Switch>
           </React.Fragment>




<Navbar/>
<Shaukat/>
<Contact/>


<footer>
    Shaukat Sohail &copy; 


</footer>
    </>
)
}

export default App;