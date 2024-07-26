import './App.css';
import About from './componentes/about/About';
import Header from './componentes/header/Header';
import Home from './componentes/home/Home';
import Skills from './componentes/skills/Skills';
import Experience from './componentes/experience/Experience';
import Footer from './componentes/footer/Footer';
import ScrollUp from './componentes/scrollup/ScrollUp';
import Portfolio from './componentes/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Experience/>        
        <Portfolio/>        
      </main>

      <Footer/>
      <ScrollUp/>

    </div>
  );
}

export default App;
