import React from 'react';
import "../styles/presentation.css";

function Presentation() {
  return (
    <div className='presentation-content' id='presentation'>
        <div className='presentation-img'>
            <img className='presentation-imgPhoto' src={require("../assets/images/computer.png")} alt="photo d'ordinateur"/>
        </div>
        <div className='presentation-text'>
            <h2 className='presentation-title'>Présentation</h2>
            <p className='presentation-paragraph'>Je m'appelle Louisa Ongenyi, je suis développeuse web front-end. Anciennement dirigée vers les sciences de l'éducation, je me suis reconvertie dans la programmation. J'adore créer et faire face à de nouvelles problématiques à résoudre. Je trouve le développement web incroyablement stimulant, le domaine est riche et offre constamment de nouvelles perspectives. J'ai suivi une formation d'intégrateur web chez Openclassroom, au cours de laquelle j'ai effectué une dizaine de projets professionnels.<a href='#projets' className='lien-vers-projets'> Je vous en présente quelques uns dans ce portfolio. </a>Après cette formation, mon intérêt pour le développement est confirmé! Et je compte en apprendre davantage. </p>
        </div>
      
    </div>
  )
}

export default Presentation
