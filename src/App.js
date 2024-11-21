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



import OncosImage from './images/Oncos.png'
import InternImage from './images/Intern.png';
import DesignImage from './images/Design.png';
import DesImage from './images/Des.png';
import EpochImage from './images/Epoch.png';
import EnactusImage from './images/Enactus.png';
import CapImage from './images/Cap.png';
import RobImage from './images/Rob.png';
import ForkImage from './images/Fork.png';
import BizImage from './images/Biz.png';
import FinImage from './images/Fin.png';
import SolvImage from './images/Solv.png';
import FintechImage from './images/Fintech.png';
import VcsImage from './images/Vcs.png';
import BharatImage from './images/Bharat.png';
import AdImage from './images/Ad.png';
import Afro from './images/Afro.png';
import Wit from './images/Wit.png';
import Micro from './images/Micro.png';
import Cam from './images/Cam.png';
import snackchat from './images/snackchat.png'
import pitchers_ep_2 from './images/pitchers-ep-2.png'
import uplift from './images/uplift.png'




function App() {

  
const teamMembers1 = [
  { name: "Dr. Pankaj Vajpayee", img: mem1, linkedin: "https://www.linkedin.com/in/pankaj-vajpayee-24ba511/" },
  { name: "Dr. Deepika Bhaskar", img: mem2, linkedin: "https://www.linkedin.com/in/deepika-bhaskar-4b4007312/" },
  { name: "Mr. Anupam Saronwala", img: mem3, linkedin: "https://www.linkedin.com/in/anupamsaronwala/" },
  { name: "Dr. Anuj Grover", img: mem4, linkedin: "https://www.linkedin.com/in/anujgrover/" },
  { name: "Dr. Pravesh Biyani", img: mem5, linkedin: "https://www.linkedin.com/in/praveshbiyani/" },
  { name: "Dr. Jaspreet Kaur", img: mem6, linkedin: "" }
];
const teamMembers2 = [
  { name: "Twisha Kacker", img: mem7, linkedin: "https://www.linkedin.com/in/twisha-kacker-4a318424b/" },
  { name: "Kumar Gurusahai", img: mem8, linkedin: "https://www.linkedin.com/in/kumar-gurusahai-075209241/" },
  { name: "Aman Ranjan", img: mem9, linkedin: "https://www.linkedin.com/in/aman-ranjan-a8853320b/" }
];

const eventsData1 = [
  { id: 1, title: 'OnCoslice', date: '15th March 2024', image: OncosImage, pdf: '/documents/OnCoslice.pdf' },
  { id: 2, title: 'Internship Fair', date: '15-16 March 2024', image: InternImage, pdf: '/documents/Internship.pdf' },
  { id: 3, title: 'Design Panel', date: '16 March 2024', image: DesignImage, pdf: '/documents/Design.pdf' },
  { id: 4, title: 'Design Hub Designathon', date: '16 March 2024', image: DesImage, pdf: '/documents/Designathon.pdf' },
  { id: 5, title: 'Epoch', date: '15-16 March 2024', image: EpochImage, pdf: '/documents/Epoch.pdf' },
  { id: 6, title: 'Enactus fair', date: '16 March 2024', image: EnactusImage, pdf: '/documents/Enactus.pdf' },
  { id: 7, title: 'Capitalist Date', date: '16 March 2024', image: CapImage, pdf: '/documents/Cap.pdf' },
  { id: 8, title: 'Robosoccer', date: '16 March 2024', image: RobImage, pdf: '/documents/Rob.pdf' },
  { id: 9, title: 'Fork It', date: '16 March 2024', image: ForkImage, pdf: '/documents/Fork.pdf' },
  { id: 10, title: 'The Biz-Ent-ine Empire', date: '15 March 2024', image: BizImage, pdf: '/documents/Biz.pdf' },
  { id: 11, title: 'Finance Dilema', date: '16 March 2024', image: FinImage, pdf: '/documents/Fin.pdf' },
  { id: 12, title: 'Bidding B-Plan', date: '16 March 2024', image: SolvImage, pdf: '/documents/Bid.pdf' },
  { id: 13, title: 'Fintech Hackathon', date: '15-16 March 2024', image: FintechImage, pdf: '/documents/Fintech.pdf' },
  { id: 14, title: 'Vcs Investor Panel', date: '15 March 2024', image: VcsImage, pdf: '/documents/Vcs.pdf' },
  { id: 15, title: 'Bharat AI', date: '16 March 2024', image: BharatImage, pdf: '/documents/Bharat.pdf' },
  { id: 16, title: 'Ad-Mad', date: '15 March 2024', image: AdImage, pdf: '/documents/Ad.pdf' },

/* 
  nodata
  { id: 17, title: 'IIITD Pitchers S1', date: '5 April 2024', image: , pdf: '' },
  { id: 18, title: 'IIITD Pitchers S2', date: '12 April 2024', image: , pdf: '' },
  { id: 19, title: 'IIITD Pitchers S3', date: '17 April 2024', image: , pdf: '' },

  { id: 20, title: 'World Environment Day ', date: '5 June 2024', image: , pdf: '' },
*/
  

  { id: 17, title: 'Afro Asian Conference', date: '6 July 2024', image: Afro, pdf: '/documents/Afro.pdf' },
  { id: 18, title: 'Witnessing Disaster', date: '6-10 August 2024', image: Wit, pdf: '/documents/Wit.pdf' },
  { id: 19, title: 'Micro-eco of Irrigation', date: '9 August 2024', image: Micro, pdf: '/documents/Micro.pdf' },
  { id: 20, title: 'Campus Investment', date: '9 August 2024', image: Cam, pdf: '/documents/Cam.pdf' },

  /*   
   nodata
  { id: 21, title: 'Snackchat Event ', date: '21 August 2024', image: , pdf: '' },
  { id: 22, title: 'TechSpectra 2024 ', date: '23-25 August 2024', image: AdImage, pdf: '' },
  { id: 23, title: 'Vision Alignment and Team Building Workshop ', date: '17 September 2024', image: , pdf: '' },
  { id: 24, title: 'Smart India Hackathon', date: '21 September 2024', image: , pdf: '' },
  { id: 25, title: 'India Internet Day', date: '27 September 2024', image: , pdf: '' },
  */


];

const eventsData2 = [
  { id: 1, title: 'Uplift', date: '11th November, 2024', image: uplift, pdf: '/documents/UPLIFT.pdf' },
  { id: 2, title: 'SnackChat', date: '23rd October, 2024', image: snackchat, pdf: '/documents/SNACKCHAT.pdf' },
  { id: 3, title: 'Pitchers Episode-2', date: '8th November , 2024', image: pitchers_ep_2, pdf: '/documents/PITCHERS2.pdf' },
];
  return (
    <div className="App">
      <Header />
      {/* <HerosSection /> */}
      <Main />
      <Services />
      <InE eventsData={eventsData2} heading="Current Events"/>
      <InE eventsData={eventsData1} heading="Innovation & Entrepreneurship Events"/>
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
