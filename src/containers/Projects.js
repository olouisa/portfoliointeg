import React from 'react'
import "../styles/projects.css";
import Works from '../components/Works';
import "../styles/works.css";
import FilterButton from '../components/FilterButton';
import Datas from '../lists/projects.json';

function Projects() {

const projectsDatas = Datas.projects;

  return (
    <div className='projects-container' id='projets'>
        <h2 className='projects-title'>Mes projets non déployés | GitHub</h2>
        <FilterButton/>
        <div className='gallery'>
            <Works data={projectsDatas} />
        </div>
      
    </div>
  )
}

export default Projects
