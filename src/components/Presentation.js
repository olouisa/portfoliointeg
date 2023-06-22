import React from 'react';
import "../styles/presentation.css";

function Presentation() {
  return (
    <div className='presentation-content' id='presentation'>
        <div className='presentation-img'>
            <img className='presentation-imgPhoto' src={require("../assets/images/computer.png")} alt="photo d'ordinateur"/>
        </div>
        <div className='presentation-text'>
            <h2 className='presentation-title'>Présentation</h2>
            <p className='presentation-paragraph'>Sint mollit occaecat quis elit velit qui ipsum ut excepteur ex. Anim ex do commodo reprehenderit nisi veniam culpa exercitation proident cillum in est. Do magna sit ut sunt. Excepteur excepteur mollit fugiat aliqua aliqua incididunt do tempor nisi incididunt et excepteur excepteur. Est laborum laboris et mollit laboris dolore quis deserunt officia reprehenderit cupidatat pariatur. Enim nostrud velit dolore incididunt tempor elit cillum sint mollit sit excepteur ea.</p>
        </div>
      
    </div>
  )
}

export default Presentation
