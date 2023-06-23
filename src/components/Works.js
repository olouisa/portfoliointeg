import React, { useEffect } from 'react';
import "../styles/works.css";
import Datas from "../lists/projects.json";
import ModalWork from './ModalWork';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { click, getClickValue } from '../actions';



function Works() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();
  const projects = Datas.projects;
  console.log(projects);

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(click());
  // }, []);

  // const isClicked = useSelector((state) => state.isClicked)
  // console.log(isClicked)

  // useEffect(() => {
  //   if (isClicked === true) {
  //     dispatch(getClickValue("Tous"));
  //   }
  // }, [isClicked])

  const handleOpenModal = () => {
    setIsOpen(!isOpen)
  }
  const changeId = (_id) => {
    setId(_id)
    console.log("changeId")
  }
  console.log(id)

  const onChangeValue = () => {
    handleOpenModal();
  }

  const clickVal = useSelector((state) => state.clickValue);
  console.log(clickVal, "test2")


  return (

    <div className='work-gallery'>

      {projects.filter((work) => work.domain.includes(clickVal)).map((item) => {

        console.log(item)
        return (
          <div
            onClick={() => {
              handleOpenModal()
              changeId(item.id)
            }
            }
            key={item.id} className='works-container'
            style={{ backgroundImage: `url(${require(`../assets/images/${item.picture}`)})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
          >
            <div className='backgroundWork'>
              <h2 key={item} className='work-title'>{item.title}</h2>
              {isOpen && item.id === id && <ModalWork key={item.id}
                onChangeValue={onChangeValue}
                projects={item} />}
            </div>
          </div>



        )

      }
      )
      }

    </div>

  )
}



export default Works
