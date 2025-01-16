import Header from './Components/Header'; 
import HomePage from'./Components/Home';
import './App.css';
import AboutPage from './Components/About';
import EducationPage from './Components/Education';
import ProjectPage from './Components/Project';
import SkillsPage from './Components/Skills';
import ContactPage from './Components/Contactme';


import { Element } from 'react-scroll'; //
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="content">
         <Element name="Home">
             <HomePage />
         </Element>

         <Element name="About">
             <AboutPage/>
         </Element>

         <Element name="Education">
            <EducationPage/>
          </Element>

          <Element name="Skills">
             <SkillsPage/>
          </Element>

         <Element name="Projects">
              <ProjectPage/>
         </Element>

         <Element name="Contact">
               <ContactPage/>
         </Element>
    <Footer/>
      </div>
    </div>
  );
}

export default App;
