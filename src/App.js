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
import mem1 from "./images/pankajvajpayee.jpg";
import mem2 from "./images/deepika.jpg";
import mem3 from "./images/anupamsaronwala.jpg";
import mem4 from "./images/anujg.jpg";
import mem5 from "./images/pravesh.jpg";
import mem6 from "./images/jaspreet.jpg";
import mem7 from "./images/twisha.jpg";
import mem8 from "./images/gurusahai.jpg";
import mem9 from "./images/aman.png";




function App() {

  
const teamMembers1 = [
  { name: "Dr. Pankaj Vajpayee", img: mem1, linkedin: "https://www.linkedin.com/in/pankaj-vajpayee-24ba511/" },
  { name: "Dr. Deepika Bhaskar", img: mem2, linkedin: "https://www.linkedin.com/in/deepika-bhaskar-4b4007312/" },
  { name: "Mr. Anupam Saronwala", img: mem3, linkedin: "https://www.linkedin.com/in/anupamsaronwala/" },
  { name: "Dr. Anuj Grover", img: mem4, linkedin: "https://www.linkedin.com/in/anujgrover/" },
  { name: "Dr. Pravesh Biyani", img: mem5, linkedin: "https://www.linkedin.com/in/praveshbiyani/" },
  { name: "Dr. Jaspreet Kaur", img: mem6, linkedin: "" }
  // { name: "Twisha Kacker", img: mem7, linkedin: "https://www.linkedin.com/in/twisha-kacker-4a318424b/" },
  // { name: "Kumar Gurusahai", img: mem8, linkedin: "https://www.linkedin.com/in/kumar-gurusahai-075209241/" },
  // { name: "Aman Ranjan", img: mem9, linkedin: "https://www.linkedin.com/in/aman-ranjan-a8853320b/" }
];
const teamMembers2 = [
  // { name: "Dr. Pankaj Vajpayee", img: mem1, linkedin: "https://www.linkedin.com/in/pankaj-vajpayee-24ba511/" },
  // { name: "Dr. Deepika Bhaskar", img: mem2, linkedin: "https://www.linkedin.com/in/deepika-bhaskar-4b4007312/" },
  // { name: "Mr. Anupam Saronwala", img: mem3, linkedin: "https://www.linkedin.com/in/anupamsaronwala/" },
  // { name: "Dr. Anuj Grover", img: mem4, linkedin: "https://www.linkedin.com/in/anujgrover/" },
  // { name: "Dr. Pravesh Biyani", img: mem5, linkedin: "https://www.linkedin.com/in/praveshbiyani/" },
  // { name: "Dr. Jaspreet Kaur", img: mem6, linkedin: "" }
  { name: "Twisha Kacker", img: mem7, linkedin: "https://www.linkedin.com/in/twisha-kacker-4a318424b/" },
  { name: "Kumar Gurusahai", img: mem8, linkedin: "https://www.linkedin.com/in/kumar-gurusahai-075209241/" },
  { name: "Aman Ranjan", img: mem9, linkedin: "https://www.linkedin.com/in/aman-ranjan-a8853320b/" }
];
  return (
    <div className="App">
      <Header />
      {/* <HerosSection /> */}
      <Main />
      <Services />
      
      <InE />
      <Major />
      <Team teamMembers={teamMembers1} teamType="FACULTY" />
      <Team teamMembers={teamMembers2} teamType="STUDENT" />
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
