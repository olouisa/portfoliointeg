import React, { useRef } from 'react';
import "../styles/banner.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import datas from "../lists/projects.json";

function Banner() {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const pictures = datas.carrousel;

  // useEffect(()=> {
  //   const interval = setInterval(() => {
  //   setCurrentIndex((prev) => (prev + 1)%pictures.length)
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [])

  const scrollToSites = () => {
    // Utilisez le sélecteur d'ID pour accéder à l'élément "sites" et faites défiler la vue
    document.getElementById('sites').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    // Utilisez le sélecteur d'ID pour accéder à l'élément "sites" et faites défiler la vue
    document.getElementById('projets').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToStack = () => {
    // Utilisez le sélecteur d'ID pour accéder à l'élément "sites" et faites défiler la vue
    document.getElementById('competences').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    // Utilisez le sélecteur d'ID pour accéder à l'élément "sites" et faites défiler la vue
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
          <h1 className='dev-title banner-title'><span>Développeuse </span><span>Web </span><span>Frontend </span><span>Junior </span></h1>
          <h2 className='name banner-title'><span>Louisa </span><span>Ongenyi</span></h2>
          <div className='btns-container'>
            <button className='navBtns b1' onClick={scrollToSites}>Sites en lignes</button>
            <button className='navBtns b2' onClick={scrollToProjects}>Projets Web</button>
            <button className='navBtns b3' onClick={scrollToStack} >Tech Stack</button>
            <button className='navBtns b4'onClick={scrollToContact} >Contact</button>


          </div>
        </div>


        <div className='medias-icons'>
          <div className='icon'><a href='https://www.linkedin.com/in/
louisa-ongenyi'><i class="fa-brands fa-linkedin" alt='Linkedin' target="_blank" rel="noopener noreferrer"></i></a></div>
          <div className='icon'><a href='https://github.com/olouisa?tab=repositories' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" alt='GitHub'></i></a></div>

        {/* </div> */}
      </div>

      {/* <p className='banner-title'>Bonjour, je suis Louisa, développeuse web front-end junior.<br/> Bienvenue sur mon site portfolio.</p> */}

    </div>
  )
}

export default Banner
