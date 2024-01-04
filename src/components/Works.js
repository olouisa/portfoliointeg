import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/works.css";
import Datas from "../lists/projects.json";
import ModalWork from './ModalWork';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { click, getClickValue } from '../actions';



function Works({ data, section }) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();
  const clickVal = useSelector((state) => state.clickValue);
  const clickVal2 = useSelector((state) => state.clickValue2);
  let value;

  if(section==="projects") {
    value = clickVal
  } else {
    value = clickVal2;
  }

  // const projects = Datas.projects;
  console.log("datas", data);
  if (!Array.isArray(data)) {
    console.error('array n\'est pas un tableau :', data);
    return null; // ou afficher un message d'erreur
  }
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

  console.log(clickVal, "test2")


  return (

    <div className='work-gallery'>

      {data.filter((work) => work.domain.includes(value)).map((item) => {

        console.log(item)
        return (
          <div

            key={item.id} className={ isOpen ? 'open' : 'works-container'}
            style={{ backgroundImage: `url(${require(`../assets/images/${item.picture}`)})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
          >
            <div className='backgroundWork'
              onClick={() => {
                handleOpenModal()
                changeId(item.id)
              }
              }>
              <h2 key={item} className='work-title'>{item.title}</h2>
              {isOpen && item.id === id && <ModalWork key={item.id}
                onChangeValue={onChangeValue}
                data={item} />}
            </div>
            {item.id && <div className='workCategory'>{item.domain.filter((word) => word !== "Tous").join(' | ')}</div>}
            <div className='siteLinkDiv'>{(item.site) && <a className='siteLinkWorks' href={item.site}>Voir le site ici</a>}</div>

          </div>



        )

      }
      )
      }

    </div>

  )
}



export default Works
