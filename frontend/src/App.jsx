import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
// import HarmonyMatchHomepage from './home'
// import Home2 from './home2'
import {
  NavBar,
  Hero,
  Features,
  Flow,
  TechnicalArchitecture,
  Impact,
  CTA,
  Footer,
  ProtectiveShieldBackground
} from './components'

function App() {

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <ProtectiveShieldBackground />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Features />
        <Flow />
        <TechnicalArchitecture />
        <Impact />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
