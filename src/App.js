import './styles/App.css';
import Header from './containers/Header';
import Presentation from './components/Presentation';
import Projects from './containers/Projects';
import Competences from './components/Competences';
import Form from './components/Form';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Presentation/>
      <Projects/>
      <Competences/>
      <Form/>
      
    </div>
  );
}

export default App;
