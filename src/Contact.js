import React, { useEffect, useRef, useState } from 'react'
import Shaukat from './Shaukat'
import styled from "styled-components";
// import ContactF from './ContactF';
import Navbar from './Navbar'
// import { set } from 'mongoose';
import { Fade, LightSpeed } from 'react-reveal';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';




const Contact = () => {

  //Styled Components

  const ContactForm = styled.div `
  display:flex;
  flex-direction:column
  justify-content:center;
  transition:all .5s ease;
  padding:1.1em;
  flex-wrap:wrap

  // align-items:center;

  & > h1{
    display:flex;
  justify-content:center;
  flex-direction:column
  flex-wrap:wrap
  transition:all .5s ease;
}
  `;



  const Cinput = styled.input`
display:flex;
  justify-content:center;
  flex-direction:column;
  transition:all .5s ease;
  font-size:2rem;
  flex-wrap:wrap;
  text-transform:capitalize;
  font-family:monospace;
  border-radius:20px ;
  outline: black;
  transition:all .5s ease;

  &:focus {
    background-color:black;
    color:green;
  transition:all .5s ease;
    outline: none;
    box-shadow: 0px 0px 6px yellow; 
}&:hover{
  transition:all .5s ease;

} 
  &:last-child:focus {
  

    transtion:all .5s ease;
    color:orange;
    
   
    box-shadow: 0px 0px 10px yellow; 
  }
  `;

const SocialMedia=[
  {
    Name:'LinkedIN',
    Site:'https://www.linkedin.com/in/shaukat-sohail-012aaa167/',
    // icons:`<LinkedInIcon>  </LinkedInIcon>`
    icons:<LinkedInIcon style={{ color:'white' }}  ></LinkedInIcon>
  },
 { Name:'Github',
  Site:'https://github.com/Shaukat456',
  icons:<GitHubIcon style={{ color: 'white' }}  ></GitHubIcon> 
} ,
{Name:'Facebook',
Site:'https://www.facebook.com/shoukat.sohail.58/',
icons:<FacebookIcon  style={{ color: 'blue'  }} ></FacebookIcon>

}
]

  const [ click, afterclick]=useState('SEND')
  const [Button, setButton] = useState('HIRE ME ');
  const [Contact,setContact]=useState()
const SeeContact=()=>{
  var Clicked=()=>{
  return (
    <>
    <Fade>
      <div className='Contact'>
             <input type='text' placeholder='Name'  />
             <input type='text'  placeholder='Email' />
             <input type='text'  placeholder='Hire me / Lets talk' />
             <button> {click} </button>
             </div>

        </Fade>
    </>
  )
  
}


setContact(Clicked) ?  console.log('') : setButton('DOUBLE CLICK TO HIDE')
  // setButton(Clicked)  

}


  const input = useRef('')
  
  return (

    <>
      
    <Fade top>  <div className='N'>
        <h1 >LET GET IN TOUCH</h1> 
  <button   onClick={SeeContact} onDoubleClick={()=>[setButton('HIRE'), <> <Fade left duration={1000} >  { setContact('')} </Fade> </>   ]} >{Button}</button>
  </div>
  </Fade>
  
  {Contact}

{SocialMedia.map((links , ke)=>{
  return <>
  <div className='Socials' key={ke} >
    <h1 >{links.Name}</h1>
   <a  href={links.Site} >  
  <i> {links.icons} </i>
     </a>
  

  </div>
  </>
})}

    </>
  )
}

export default Contact;