import React from 'react';
import {Link} from "react-router-dom";
import "../styles/App.css";
import "../styles/header.css"
import Presentation from '../components/Presentation';

function Header() {
  return (
    <header className="header" >
    <nav className="navHeader">
        <ul className="listHeader">
           <li className="puceLink"><a className="Link" href="#accueil">Accueil</a></li>

            <li  className="puceLink"><a className="Link" href="#presentation">Présentation</a></li>
            <li className="puceLink"><a className="Link" href="#projets">Projets</a></li>
            <li className="puceLink"><a className="Link" href="#competences">Compétences</a></li>
            <li className="puceLink"><a className="Link" href="#contact">Contact</a></li>

        </ul>
    </nav>
</header>
  )
}

export default Header
