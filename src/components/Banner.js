import React, { useEffect, useRef } from 'react';
import "../styles/banner.css";
// import { SplitText } from 'gsap/all';
// import SplitText from 'gsap-trial/SplitText';
// import { useGSAP } from "@gsap/react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import datas from "../lists/projects.json";

// gsap.registerPlugin(SplitText);

function Banner() {

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const pictures = datas.carrousel;

  // useEffect(()=> {
  //   const interval = setInterval(() => {
  //   setCurrentIndex((prev) => (prev + 1)%pictures.length)
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [])

  // const spans1 = document.querySelectorAll('.dev-title span');
  // let split1 = SplitText.create(".dev-title", {type:"words,chars"});

  const spans1 = useRef([]);
  const spans2 = document.querySelectorAll('.name span');
  const navBtns = document.querySelectorAll('.navBtns');
  const medias = document.querySelectorAll('icon');
  const l1 = document.querySelector('l1');
  const l2 = document.querySelector('l2');
  console.log(spans1)

  useEffect(() => {
    window.addEventListener('load', () => {
      // const split1 = new SplitText(spans1.current, {type: 'chars'});
      // const TL = gsap.timeline();

      // TL.from(split1.chars,{ duration: 1, y: -50, opacity: 0, ease: 'power2.out'}, "+=0.3");
  
    });
}, [])  


  const scrollToSites = () => {
    document.getElementById('sites').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    document.getElementById('projets').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToStack = () => {
    document.getElementById('competences').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='banner-content fade-transition' id='accueil' style={{ backgroundImage: `url(${require('../assets/images/ocean.jpg')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      {/* <div className='banner-filter'></div> */}
      {/* <div className='textDiv'> */}
      <div className='lines'>
        <div className='l1'></div>
        <div className='l2'></div>
      </div>

      <div className='titles-container'>
        <h1 className='dev-title banner-title' ref={spans1}>Développeuse Web Frontend Junior</h1>
        <h2 className='name banner-title'><span>Louisa </span><span>Ongenyi</span></h2>
        <div className='btns-container'>
          <button className='navBtns b1' onClick={scrollToSites}>Sites en ligne</button>
          <button className='navBtns b2' onClick={scrollToProjects}>Projets Web</button>
          <button className='navBtns b3' onClick={scrollToStack} >Tech Stack</button>
          <button className='navBtns b4' onClick={scrollToContact} >Contact</button>


        </div>
      </div>


      <div className='medias-icons'>
        <div className='icon'><a href='https://www.linkedin.com/in/
louisa-ongenyi' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin" alt='Linkedin' ></i></a></div>
        <div className='icon'><a href='https://github.com/olouisa?tab=repositories' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github" alt='GitHub'></i></a></div>

        {/* </div> */}
      </div>

      {/* <p className='banner-title'>Bonjour, je suis Louisa, développeuse web front-end junior.<br/> Bienvenue sur mon site portfolio.</p> */}

    </div>
  )
}

export default Banner
