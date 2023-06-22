import React, { useEffect } from 'react';
import Datas from "../lists/projects.json";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterValue, click, getClickValue } from '../actions';

function FilterButton() {
  const [value, setValue] = useState("")
  const changeValue = (item) => {
    setValue(item)
    // changeFilterValue(item)
    dispatch(getClickValue(item))
    dispatch(click());
    
  }
  console.log(Datas);
  const category = Datas.categories;
  const project = Datas.projects;
console.log(category);
console.log(Datas.projects);
const dispatch = useDispatch();
// useEffect(() => {
//   changeValue(value)

// }, [])

// const clickValue =  useSelector((state) => state.clickValue)
// console.log(clickValue)

// const filteredWorks1 = project.filter((work) => work.domain.includes("React"))
// console.log(filteredWorks1);



console.log(value);


// const filterWorks = (item) => {
//   const filteredWorks = project.filter((work) => work.domain.includes({item}))
//   console.log(filterWorks);

// }


  return (
    <div className='filterButton'>
      { 
      category.map((item) => {
        return <button   onClick={() => {
          changeValue(item);
          const filteredWorks = project.filter((work) => work.domain.includes(`${item}`))
          console.log(filteredWorks);
          console.log("here")
        }} className='filterbutton' key={item}>{item}</button>

      })     
}
    </div>
  )
}

export default FilterButton
