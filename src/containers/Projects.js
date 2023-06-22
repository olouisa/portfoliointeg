import React from 'react'
import Filter from './Filter';
import "../styles/projects.css";
import Works from '../components/Works';
import "../styles/works.css";
import FilterButton from '../components/FilterButton';

function Projects() {



  return (
    <div className='projects-container' id='projets'>
        <h2 className='projects-title'>Mes projets</h2>
        <FilterButton/>
        <div className='gallery'>
            <Works/>
        </div>
      
    </div>
  )
}

export default Projects
