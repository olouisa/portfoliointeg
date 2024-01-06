import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/modalWork.css";

function ModalWork({ isOpen, onChangeValue, data }) {
    // const projects = Datas.projects
    console.log(data)
    return (
        <div className='modalWork-background'>
            <div className='modalWork-container'>
                <button onClick={() =>  onChangeValue } className='close'>X</button>
                <h2 className='modalWork-title'>{data.title}</h2>
                {data.site && <a className='modalLink' href={data.site} target="_blank" rel="noopener noreferrer">Voir le site ici</a> }

                <p className='date'>{data.date}</p>
                <h3 className='modalWork-description'>Description</h3>
                <p className='description-text'>{data.description}</p>
                <h3 className='competences-text'>Compétences acquises</h3>
                <ul className='competences-ul'>
                    
                    {
                        data.competences.map((competence) => <li key={competence} className='competences-list'>{competence}</li>)
                        }
                    </ul>

{data.gitHub && <Link key={data.date} className='work-github-link' to={data.gitHub} ><img className='work-github' src={require(`../assets/images/github-mark.png`)} alt='logo gitHub' /></Link>
}
            </div>
        </div>
    )
}

export default ModalWork
