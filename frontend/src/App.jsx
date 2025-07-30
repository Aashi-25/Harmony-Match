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
  Footer
} from './components'

function App() {

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-100 min-h-screen w-full">
      {/* <HarmonyMatchHomepage/> */}
      {/* <Home2/> */}
      <NavBar />
      <Hero />
      <Features />
      <Flow />
      <TechnicalArchitecture />
      <Impact />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
