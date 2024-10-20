import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
// import HerosSection from './components/hero_section/hero_section';
import Services from './components/services/services';
import Major from './components/Major_sec/Major';
// import Cont from './components/Contacts_new/Con_New';
import Team from './components/Team_sec/Team';
import InE from './components/Events/InE';
import Main from './components/Main/Front';
import News from './components/Newletter/News'
import Footer from './components/Foot_Cont/Foot_Contact';
import Gallery from './components/Gallery/Gal';
import Stats from './components/Statistics/Stats';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <HerosSection /> */}
      <Main />
      <Services />
      
      <InE />
      <Major />
      <Team />
      <Gallery />
      {/* <Cont /> */}
      <Stats />
      <News />
      {/* <Foot /> */}
      <Footer />


      
    </div>
  );
}

export default App;
