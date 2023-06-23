import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/modalWork.css";

function ModalWork({ isOpen, onChangeValue, projects }) {
    // const projects = Datas.projects
    console.log(projects)
    return (
        <div className='modalWork-background'>
            <div className='modalWork-container'>
                <button onClick={() =>  onChangeValue } className='close'>X</button>
                <h2 className='modalWork-title'>{projects.title}</h2>
                <p className='date'>{projects.date}</p>
                <h3 className='modalWork-description'>Description</h3>
                <p className='description-text'>{projects.description}</p>
                <h3 className='competences-text'>Compétences acquises</h3>
                <ul className='competences-ul'>
                    
                    {
                        projects.competences.map((competence) => <li key={competence} className='competences-list'>{competence}</li>)
                        }
                    </ul>


<Link key={projects.date} className='work-github-link' to={projects.gitHub} ><img className='work-github' src={require(`../assets/images/github-mark.png`)} alt='logo gitHub' /></Link>
            </div>
        </div>
    )
}

export default ModalWork
