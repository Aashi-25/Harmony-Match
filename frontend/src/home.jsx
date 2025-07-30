import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Shield, Mic, Brain, Home, Star, ArrowRight, Play, CheckCircle, MessageCircle, MapPin, Clock, Edit, Eye, Share, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Heart, Sparkles, Zap } from 'lucide-react';

const HarmonyMatchHomepage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({ hero: true });
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 4000);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(testimonialInterval);
    };
  }, []);

  const FloatingParticle = ({ delay = 0, size = 'w-2 h-2', color = 'bg-purple-400' }) => (
    <div 
      className={`${size} ${color} rounded-full absolute opacity-30 animate-float`}
      style={{ 
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    />
  );

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer", 
      text: "Found my perfect roommate in just 2 days! The voice survey was incredibly intuitive.",
      rating: 5,
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "Ananya Patel", 
      role: "MBA Student",
      text: "Finally, a platform that truly understands what women need in a living space!",
      rating: 5,
      color: "from-blue-500 to-teal-600"
    },
    {
      name: "Riya Gupta",
      role: "Marketing Professional", 
      text: "The AI matching was spot-on. My roommate and I share the same lifestyle perfectly!",
      rating: 5,
      color: "from-green-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-indigo-400/10 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-purple-100/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                HarmonyMatch
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About Us', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="relative text-gray-700 hover:text-purple-600 transition-colors duration-300 group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <div className="relative group">
                <a href="#more" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 flex items-center">
                  More Links
                  <ChevronRight className="w-4 h-4 ml-1 rotate-90 group-hover:rotate-180 transition-transform duration-300" />
                </a>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-6 py-2 border-2 border-purple-200 rounded-full text-purple-700 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 transform hover:scale-105">
                Join
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-8 animate-bounce-gentle">
                <Shield className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-purple-700 font-semibold">Safe • Verified • AI-Powered</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Find Your
                <span className="relative inline-block ml-4">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                    Perfect
                  </span>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
                  </div>
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Roommate Today!
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Welcome to our revolutionary co-living platform designed for women seeking a safe 
                and supportive community. Discover compatible roommates, personalized suggestions, 
                and a seamless living experience powered by AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Mic className="w-6 h-6 mr-3 z-10" />
                  <span className="z-10">Start Voice Survey</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform z-10" />
                </button>
                <button className="group border-2 border-purple-200 text-purple-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                {[
                  { icon: CheckCircle, text: "Free to use" },
                  { icon: Shield, text: "Verified profiles" },
                  { icon: Clock, text: "24/7 support" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <item.icon className="w-5 h-5 text-green-500 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-gray-700 transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible.hero ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-8">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center relative">
                        <MessageCircle className="w-7 h-7 text-white" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 text-lg">AI Voice Assistant</h3>
                        <p className="text-purple-600 text-sm font-medium">Powered by Omnidim.io</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                        <p className="text-purple-800 mb-3 font-medium">"What time do you usually go to bed?"</p>
                        <div className="flex items-center text-sm text-purple-600">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-200"></div>
                          </div>
                          <span className="ml-3">AI is listening...</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300 shadow-lg">
                        <p className="font-medium">"Usually around 11 PM, I'm an early sleeper"</p>
                        <div className="flex items-center mt-2 text-purple-100">
                          <Zap className="w-4 h-4 mr-2" />
                          <span className="text-sm">Voice recognized</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                        <p className="text-indigo-800 font-medium">"Perfect! Would you prefer a roommate with similar sleep patterns?"</p>
                        <div className="flex items-center mt-3 space-x-3">
                          <button className="px-4 py-2 bg-green-500 text-white rounded-full text-sm hover:bg-green-600 transition-colors">
                            Yes
                          </button>
                          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors">
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce-slow"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-60 animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter */}
      <section className="py-16 bg-white/60 backdrop-blur-sm border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Happy Matches", icon: Heart, color: "text-red-500" },
              { number: "95%", label: "Success Rate", icon: CheckCircle, color: "text-green-500" },
              { number: "30+", label: "Cities Covered", icon: MapPin, color: "text-blue-500" },
              { number: "4.9★", label: "User Rating", icon: Star, color: "text-yellow-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto group-hover:animate-bounce`} />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roommate Matches Section */}
      <section id="matches" className="py-20 bg-gradient-to-br from-white to-purple-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.matches ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 relative">
              Discover Your Perfect
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                Roommate Matches
              </span>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
              </div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI analyzes compatibility scores to find your ideal living companion
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Explore Room Details and Quick Actions for Easy Decisions",
                description: "Our platform presents your top three roommate matches, complete with compatibility scores.",
                action: "Accept",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50"
              },
              {
                icon: Brain,
                title: "Re-match with New Potential Roommates for Better Compatibility", 
                description: "Not satisfied? Easily re-match with new candidates tailored to your preferences.",
                action: "Re-match",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50"
              },
              {
                icon: Eye,
                title: "View More Details to Make Informed Roommate Choices",
                description: "Click to view more details about your matches and their living spaces.",
                action: "View More",
                color: "from-green-500 to-blue-500",
                bgColor: "from-green-50 to-blue-50",
                featured: true
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-br ${item.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 ${
                  item.featured ? 'border-2 border-purple-200 scale-105' : ''
                } ${isVisible.matches ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {item.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </div>
                )}
                
                <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <item.icon className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors">
                  {item.description}
                </p>
                
                <button className={`group/btn flex items-center text-white font-semibold bg-gradient-to-r ${item.color} px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  {item.action}
                  <ChevronRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                
                <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-50 group-hover:animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-50 group-hover:animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Tracking Section */}
      <section id="tracking" className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-2xl animate-bounce-slow"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className={`transform transition-all duration-1000 ${isVisible.tracking ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-purple-200 font-semibold">Progress</span>
                </div>
              </div>
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Track Your Application Status Seamlessly
              </h2>
              <p className="text-xl text-purple-100 mb-10 leading-relaxed">
                Stay updated on your application journey. Our intelligent tracker keeps you informed every step of the way with real-time updates.
              </p>
              <div className="flex space-x-4">
                <button className="px-8 py-3 border-2 border-white/30 rounded-full text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  Refresh Status
                </button>
                <button className="flex items-center text-purple-300 font-semibold hover:text-white transition-colors">
                  View Details
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible.tracking ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              {[
                {
                  status: "Today",
                  title: "Application Submitted", 
                  description: "Your application has been successfully submitted. We will review it shortly.",
                  highlight: "application has been successfully submitted",
                  actions: ["Edit", "Contact"],
                  color: "from-green-500 to-emerald-600",
                  bgColor: "from-green-50 to-emerald-50",
                  icon: CheckCircle,
                  active: true
                },
                {
                  status: "Pending",
                  title: "Under Review",
                  description: "Your application is currently under review. We appreciate your patience during this process.",
                  actions: ["Cancel", "Help"],
                  color: "from-yellow-500 to-orange-600", 
                  bgColor: "from-yellow-50 to-orange-50",
                  icon: Clock,
                  active: false
                },
                {
                  status: "Next", 
                  title: "Move-In Date",
                  description: "Your move-in date is confirmed. We are excited to welcome you to your new home!",
                  actions: ["View", "Share"],
                  color: "from-blue-500 to-cyan-600",
                  bgColor: "from-blue-50 to-cyan-50", 
                  icon: Home,
                  active: false
                },
                {
                  status: "Complete",
                  title: "Application Approved",
                  description: "Congratulations! Your application has been approved. Get ready for your new adventure!",
                  actions: ["Start", "Next"],
                  color: "from-purple-500 to-pink-600",
                  bgColor: "from-purple-50 to-pink-50",
                  icon: Star,
                  active: false
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="relative">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      item.active ? 'bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse' : 'bg-white/20'
                    } transition-all duration-300`}>
                      {item.active && <div className="w-3 h-3 bg-white rounded-full"></div>}
                    </div>
                    {index < 3 && (
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-white/30 to-transparent"></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 transform group-hover:scale-105 group-hover:bg-white/15 ${
                      item.active ? 'ring-2 ring-green-400/50 shadow-xl' : ''
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{item.status}</h3>
                        <item.icon className={`w-6 h-6 ${item.active ? 'text-green-400 animate-bounce' : 'text-white/70'}`} />
                      </div>
                      
                      <h4 className="text-lg font-semibold text-purple-200 mb-3">{item.title}</h4>
                      
                      <p className="text-purple-100 mb-6 leading-relaxed">
                        {item.highlight ? (
                          <>
                            Your <span className="text-green-400 font-semibold animate-pulse">{item.highlight}</span>
                            {item.description.replace(item.highlight, '').replace('Your ', '')}
                          </>
                        ) : item.description}
                      </p>
                      
                      <div className="flex space-x-4">
                        {item.actions.map((action, actionIndex) => (
                          <button
                            key={actionIndex}
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 transition-colors"
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HarmonyMatchHomepage;