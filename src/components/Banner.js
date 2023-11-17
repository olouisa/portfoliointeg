import React from 'react';
import "../styles/banner.css"

function Banner() {
  return (
    <div className='banner-content' id='accueil' style={{backgroundImage: `url(${require(`../assets/images/coding.png`)})`, backgroundRepeat  : 'no-repeat', backgroundSize: 'cover'}}>
        {/* <img className='banner-img' src={require(`../assets/images/coding.png`)} alt="" /> */}
        <div className='banner-filter'></div>
        <p className='banner-title'>Bonjour, je suis Louisa, développeuse web front-end junior.<br/> Bienvenue sur mon site portfolio.</p>
      
    </div>
  )
}

export default Banner
