import React, { useEffect } from 'react';
import "../styles/works.css";
import Datas from "../lists/projects.json";
import { Link } from "react-router-dom";
import ModalWork from './ModalWork';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { click, getClickValue } from '../actions';
import { useOneCard } from '../Hooks';
import { useCallback } from 'react';
import { openModal } from '../actions';


function Works() {
  // const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();
  const projects = Datas.projects;
  console.log(projects);


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(click());
  }, []);
  const isClicked = useSelector((state) => state.isClicked)
  console.log(isClicked)
useEffect(()=> {
  if(isClicked===true) {
    dispatch(getClickValue("Tous"));
  }
}, [isClicked])

const  handleOpenModal = () => {
  dispatch(openModal())
  
}
const changeId = (_id) => {
  setId(_id)
  console.log("changeId")
}
console.log(id)

const onChangeValue = () => {
  // setIsOpen(value)
 handleOpenModal();
 
 
}

const isOpened = useSelector((state)=> state.isOpened)
  console.log(isOpened);
 
  const clickVal = useSelector((state)=> state.clickValue );
  console.log(clickVal, "test2")

 
 

//   const openModal =  useCallback(() => {
//     return setIsOpen(!isOpen)
// }, [])

// useEffect(() => {
//   openModal()
// }, [openModal])

// const openModal2 = () => {
//   setIsOpen(!isOpen)
// }
// const getIdWork = (id) => {
//   const filterId = projects.filter((project) => project.id === id)
// }

  return (

    <div className='work-gallery'>

      {projects.filter((work) => work.domain.includes(clickVal)).map((item)=> {
           
                    console.log(item)
                    return (
                      <div
                       onClick={()=> {
                        handleOpenModal()
                        changeId(item.id)
                      }
                       } 
                       key={item.id} className='works-container'
                      style={{backgroundImage: `url(${require(`../assets/images/${item.picture}`)})`, backgroundRepeat  : 'no-repeat', backgroundPosition: 'center'}}
                      >
            <div className='backgroundWork'>
                        <h2 key={item} className='work-title'>{item.title}</h2>
                        {/* <Link key={item.date} className='work-github-link' to={item.gitHub} ><img className='work-github' src={require(`../assets/images/github-mark.png`)} alt='logo gitHub' /></Link> */}
                        { isOpened && item.id===id && <ModalWork key={item.id}
          //  isOpen={isOpen} 
           onChangeValue={onChangeValue} 
           projects={item}/>}   
      </div>
                      </div>
                      
                    
                      
                    )
   
      }
      )
      }
   
{/*       
      { 
      projects.map((proj) => {
        // return (
        //   // <>
        //   // { isOpen===true && <ModalWork key={proj.id}
        //   // //  isOpen={isOpen} 
        //   // //  setIsOpen={setIsOpen} 
        //   //  projects={proj}/>}       
        //   //  </>
        // )
    
      })
      }  */}
    </div>

  )
}



export default Works
