import React from 'react';
import Datas from "../lists/projects.json";
import "../styles/competences.css";

function Competences() {
    const competences = Datas.competences;
  return (
    <div className='competences' id='competences'>
    <h2 className='competences-title'>Stack Technique</h2>
    <div className='competences-container'>
        {competences.map((item) =>{ 
            return (
                <div key={item} className='competence-item'>{item}</div>

            )
        
        }
            )}
      
    </div>
    </div>
  )
}

export default Competences
