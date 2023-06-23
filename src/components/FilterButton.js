import React from 'react';
import Datas from "../lists/projects.json";
import { useDispatch} from 'react-redux';
import { getClickValue } from '../actions';

function FilterButton() {
  // const [value, setValue] = useState("")
  const changeValue = (item) => {
    // setValue(item)
    dispatch(getClickValue(item))
    // dispatch(click());
    
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
        return <button   onClick={() => {
          changeValue(item);
          // const filteredWorks = project.filter((work) => work.domain.includes(`${item}`))
          // console.log(filteredWorks);
          console.log("here")
        }} className='filterbutton' key={item}>{item}</button>

      })     
}
    </div>
  )
}

export default FilterButton
