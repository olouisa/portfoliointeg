import React from 'react'
import FilterButton from '../components/FilterButton'
import Works from '../components/Works';
import Datas from '../lists/projects.json';

function Sites() {
const websitesDatas = Datas.websites;

  return (
    <div className='projects-container' id='sites'>
        <h2 className='projects-title'>Mes sites en ligne</h2>
        <FilterButton/>
        <div className='gallery'>
            <Works data={websitesDatas} />
        </div>
      
    </div>
  )
}

export default Sites
