import './styles/App.css';
import Header from './containers/Header';
import Presentation from './components/Presentation';
import Projects from './containers/Projects';
import Competences from './components/Competences';
import Form from './components/Form';
import Banner from './components/Banner';
import Sites from './containers/Sites';
import data from '../src/lists/projects.json';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Presentation/>
      <Sites/>
      <Projects/>
      <Competences/>
      <Form/>
      
    </div>
  );
}

export default App;
