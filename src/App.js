import React from 'react';
import { AnimatedBackground } from 'animated-backgrounds';
import Navigation from './navigation/nav';
import SocialMediaButtons from './components/button';
import "./components/main.css";

function App() {
  return (
    <div>
      <AnimatedBackground animationName="starryNight" />
      {
       <div className="app">
       <header className="app-header">
         <SocialMediaButtons/>
         <Navigation />
       </header>
       <div className="centered">
       Hi, there <br />
      I'm Marzhan, developer and scientist
      </div>
     </div>
      }
    </div>
  );
}

export default App;
