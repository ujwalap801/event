import React,{useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Popular from "./Components/Popular/Popular";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App =() =>{

  const [playState, setPlayState] = useState(false); 
  return (
  <div>
  <Navbar/>
  <Hero/>
  <div className="container">
    <Title subTitle='Our Service' title='What  Events We Make'/>
    <Services/>
    <About setPlayState={setPlayState}/>
    <Title subTitle='Gallery' title='Photos'/>
    <Gallery/>
    <Title subTitle='Popular Events' title='What Users Says' />
    <Popular/>
    <Title subTitle='Contact Us' title=' Get in Touch' />
    <Contact/>
    <Footer/>
  </div>

  <VideoPlayer playState={playState}  setPlayState={setPlayState}/>
  </div>
  )
}

export default App;