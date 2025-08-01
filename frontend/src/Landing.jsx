import {
  NavBar,
  Hero,
  Features,
  Flow,
  TechnicalArchitecture,
  TeamCarousel,
  CTA,
  Footer,
  ProtectiveShieldBackground
} from './components'

const features = [
  {
    title: "Voice-Driven Smart Survey",
    desc: "Engage in a conversational 5-question micro-survey powered by Omnidim.io, tailored to your tone and responses.",
    // icon: "🎤",
    src: "/src/assets/Voice_survey.png",
  },
  {
    title: "AI-Based Roommate Matching",
    desc: "Advanced compatibility algorithm ensures perfect roommate matches with transparent, explainable results.",
    // icon: "🤖",
    src:  "/src/assets/Room_Compatiblity.png",
  },
  {
    title: "Automatic Room Allocation",
    desc: "Seamlessly matched to the ideal room based on your preferences and availability.",
    // icon: "🏠",
    src: "/src/assets/Room_Allocation.png",
  },
  {
    title: "User Dashboard",
    desc: "View top 3 roommate+room matches, manage preferences, and track application status in real-time.",
    // icon: "📊",
    src: "/src/assets/user_Dashboard.png",
  },
  {
    title: "Admin Dashboard",
    desc: "Empower property managers with tools to monitor and optimize room assignments dynamically.",
    // icon: "🛠️",
    src: "https://images.unsplash.com/photo-1624357676666-4cca3b657627?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Ethical, Fair & Private",
    desc: "Bias-free matching with secure data handling, powered by IBM AI Fairness 360.",
    // icon: "🛡️",
    src: "/src/assets/Ethical.png",
  },
];

function Landing() {

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
        {/* <Features /> */}
        <Features features={features} autoplay={false} />

        <Flow />
        <TechnicalArchitecture />
        <TeamCarousel />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default Landing
