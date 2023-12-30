import React from 'react';
import Datas from "../lists/projects.json";
import { useDispatch } from 'react-redux';
import { getClickValue, getClickValue2 } from '../actions';

function FilterButton({ section }) {
  const changeValue = (item) => {
    if (section === 'projects') {
      dispatch(getClickValue(item))

    } 
    if(section==='webSites') {
      dispatch(getClickValue2(item))
  }
  } 
console.log(Datas);
const category = Datas.categories;
const project = Datas.projects;
console.log(category);
console.log(Datas.projects);
const dispatch = useDispatch();

// console.log(value);

return (
  <div className='filterButton'>
    {
      category.map((item) => {
        return <button onClick={() => {
          changeValue(item);
          console.log("here")
        }} className='filterbutton' key={item}>{item}</button>

      })
    }
  </div>
)
}

export default FilterButton
