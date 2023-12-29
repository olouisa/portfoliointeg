import React, {useState, useEffect} from 'react';
import "../styles/banner.css";
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
  

  return (
    <div className='banner-content fade-transition' id='accueil'style={{backgroundImage: `url(${require('../assets/images/coding.png')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
    >
        {/* <img className='banner-img' src={require(`../assets/images/coding.png`)} alt="" /> */}
        <div className='banner-filter'></div>
        <p className='banner-title'>Bonjour, je suis Louisa, développeuse web front-end junior.<br/> Bienvenue sur mon site portfolio.</p>
      
    </div>
  )
}

export default Banner
