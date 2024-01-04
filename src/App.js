import './styles/App.css';
import './styles/banner.css';
import { useState, useEffect  } from 'react';
import Header from './containers/Header';
import Presentation from './components/Presentation';
import Projects from './containers/Projects';
import Competences from './components/Competences';
import Form from './components/Form';
import Banner from './components/Banner';
import Sites from './containers/Sites';
import data from '../src/lists/projects.json';


function App() {
  const scrollToBanner = () => {
    document.getElementById('accueil').scrollIntoView({ behavior: 'smooth' });
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };
  
  const handleScroll = () => {
    const banner = document.getElementById('accueil');
    const arrowUp = document.querySelector('.arrowUp');
  
    if (banner && arrowUp) {
      const shouldShowArrow = window.scrollY > banner.offsetTop;
  
      arrowUp.style.display = shouldShowArrow ? 'block' : 'none';
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className="App">
      {/* <Header/> */}
      <Banner />
      <Presentation />
      <Sites />
      <Projects />
      <Competences />
      <Form />
      <div className='arrowUp'
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      style={{
        display: 'none',
        position: 'fixed',
        bottom: "30px",
        right: "2%",
        background: isHovered ? "linear-gradient(45deg, #596f7e96, #a1a8b987)":"linear-gradient(45deg, rgb(89, 111, 126, 0.9), rgb(161, 168, 185, 0.9))",
        padding: "5px 4px",
        borderRadius: "50px",
        boxShadow: "3px 3px 5px #8080808c"
      }} ><button style={{
        background: 'transparent',
        borderColor: 'transparent',
        borderRadius: '50px',
        color: 'white',
        fontSize: '20px'
      }} className='arrowLink' onClick={scrollToBanner}><i className="fa-solid fa-angle-up"></i></button></div>

    </div>
  );
}

export default App;
