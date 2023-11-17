import React from 'react'
import FilterButton from '../components/FilterButton'
import Works from '../components/Works';
import Datas from '../lists/projects.json';

function Sites() {
const websitesDatas = Datas.websites;

  return (
    <div className='projects-container' id='projets'>
        <h2 className='projects-title'>Mes sites web</h2>
        <FilterButton/>
        <div className='gallery'>
            <Works data={websitesDatas} />
        </div>
      
    </div>
  )
}

export default Sites
