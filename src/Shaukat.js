import React from 'react'
import { useState } from 'react'
// import 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'

// import "react-reveal"
import { Bounce, Fade, LightSpeed } from 'react-reveal'
import './SHAUKAT.css';
// import icon from './favicon.ico'
// import icon from '../public/favicon.ico';
import styled from 'styled-components'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import Navbar from './Navbar'
import 'react-router-dom';
import { useLocation } from 'react-router-dom';
import DisplayPicture from './pppp.png'
import { SubdirectoryArrowLeftRounded } from '@material-ui/icons';
import { scroller } from 'react-scroll';



const Portfolio=styled.div`
    display:flex;
    flex-wrap:wrap;
    text-align:center;
    justify-content:center;
    
    `;
const Sections=styled.h2`
    font-size:1.3rem
    border:2px solid green;
    // border-top:1px dotted white;
`;

//TECH ARRAYS
const frontend=['HTML','CSS','Javascript','React']
const backend=['Nodejs ', 'Express' ,'Restful-Apis' ]
const db=['MongoDB','MY SQL','POSTGRE SQL'  ]
const Skills=['Git', 'Web Desiging ', 'UX/UI','Postman']



const Shaukat=()=>{
  const [resume, setResume]=useState( )
  const [button ,setButton]=useState('See resume')

    const location=useLocation( );
    console.log(location)
    function seeResume(e){
   
   var show=()=>{

       return (

           <>
<div className='introduction'>
    <Fade bottom> 
    <figure> 
         <img src={DisplayPicture}/> 
         </figure>
        </Fade>    
         
           <ArrowDropDownCircleIcon  className='icon'>
     {/* <button >  */}
    <h2> HEY <strong>  

       Its Shaukat </strong>          
     </h2>

{/*  */}

    

    
      



     {/* </button> */}
        </ArrowDropDownCircleIcon>
     
     
     
        {/* <h1>HEY</h1> */}
 <Fade bottom duration={2000}>  <p> I am <strong> Shaukat Sohail</strong> , A <strong>FULL STACK WEB DEVELOPER</strong> , i am currently in intermediate (Science) but
    having deep interest in programming and development of various software operations I managed to become a web developer .  
    
    having deep interest in programming and development of various software operations I managed to become a web developer .  
    
    having deep interest in programming and development of various software operations I managed to become a web developer .  
    
    having deep interest in programming and development of various software operations I managed to become a web developer .  
    having deep interest in programming and development of various software operations I managed to become a web developer .  
    having deep interest in programming and development of various software operations I managed to become a web developer .  
    having deep interest in programming and development of various software operations I managed to become a web developer .  
    having deep interest in programming and development of various software operations I managed to become a web developer .  
    having deep interest in programming and development of various software operations I managed to become a web developer .  
    having deep interest in programming and development of various software operations I managed to become a web developer .  
        
      </p></Fade>
<ul >
<div className='L'>
<h1>FRONTEND</h1>

    {
        frontend.map((frames,index)=>{
            return (
                <>
                {/* <h2 key={index}>{frames.stack }</h2>      */}
          <Fade top>  <li>   { frames} </li></Fade>
                </>
            )
        })
    }        
    </div> 

<div className='L'>
<h1>BACKEND</h1>
    {
        backend.map((fram,inde)=>{
            return(
                <>

             <Fade top>  <li>{fram} </li></Fade> 
                </>
            )
        })
    }
    </div>
<div className='L'>
<h1>DATABASES</h1>
    {
        db.map((fram,inde)=>{
            return(
                <>
               <Fade bottom ><li>{fram} </li> </Fade>
                </>
            )
        })
    }
    
    </div>
<div className='L'>
<h1>Other Tools/Skills</h1>
    {
        Skills.map((fram,inde)=>{
            return(
                <>
               <Fade bottom ><li>{fram} </li> </Fade>
                </>
            )
        })
    }
    
    </div>

</ul>
</div>

<Fade bottom> <div className='cover'>
</div>
</Fade>
           </>
       )
    }
setResume(show) ? setButton('SHOW ') : setButton('Double tap to HIDE');
    //  console.log(e)

 
   
           
}
  
    return (
        <React.Fragment>

            <div className='N'> 
  <Bounce left  >          <h1>SHAUKAT SOHAIL </h1>     </Bounce> 
       <Fade left duration={1000} >          <h2> YOUR IDEA , MY CODE</h2>     </Fade>
    
    {/* Dynamic button hide/show */}
  <Bounce top right>  <button onDoubleClick={()=>[setResume('') ,setButton('SHOW')]}  onClick={ seeResume} className='intro' > { button} </button> 
  </Bounce >        
       </div>
       <h3> {resume} </h3>

{/* <Navbar/> */}
           
    
        </React.Fragment>
    )
}

export default Shaukat;