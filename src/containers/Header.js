import React from 'react';
import "../styles/App.css";
import "../styles/header.css"

function Header() {
  return (
    <header className="header" >
    <nav className="navHeader">
        <ul className="listHeader">
           <li className="puceLink"><a className="Link" href="#accueil">Accueil</a></li>

            {/* <li  className="puceLink"><a className="Link" href="#presentation">Présentation</a></li> */}
            <li className="puceLink"><a className="Link" href="#sites">Sites en ligne</a></li>
            <li className="puceLink"><a className="Link" href="#projets">Projets web</a></li>
            <li className="puceLink"><a className="Link" href="#competences">Compétences</a></li>
            <li className="puceLink"><a className="Link" href="#contact">Contact</a></li>

        </ul>
    </nav>
</header>
  )
}

export default Header
