import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, MapPin, MessageCircle, Share2, Compass, Zap, Lock } from 'lucide-react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('feed');

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 }
    }
  };

  const renderScreen = () => {
    switch(activeTab) {
      case 'map':
        return (
          <motion.div 
            key="map"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="device-screen"
          >
            <div className="ui-header">
              <MapPin size={18} color="#fff" /> Nearby Trends
            </div>
            <div className="ui-body" style={{ padding: 0, position: 'relative' }}>
              <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(255,255,255,0.1), #0a0a0c)' }}></div>
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ position: 'absolute', top: '50%', left: '50%', x: '-50%', y: '-50%' }}
              >
                <MapPin size={32} color="#fff" fill="#fff" />
              </motion.div>
            </div>
          </motion.div>
        );
      case 'chat':
        return (
          <motion.div 
            key="chat"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="device-screen"
          >
            <div className="ui-header">
              <MessageCircle size={18} color="#fff" /> Secure Chat
            </div>
            <div className="ui-body">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="ui-chat">
                Hey! The event downtown is amazing right now.
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="ui-chat self">
                On my way! 🏃
              </motion.div>
            </div>
          </motion.div>
        );
      case 'feed':
      default:
        return (
          <motion.div 
            key="feed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="device-screen"
          >
            <div className="ui-header">
              <Compass size={18} color="#fff" /> Global Feed
            </div>
            <div className="ui-body">
              <div className="ui-post">
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div className="ui-avatar"></div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Alex_dev</div>
                    <div style={{ fontSize: '0.75rem', color: '#888891' }}>2 mins ago • New York</div>
                  </div>
                </div>
                <div className="ui-image"></div>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      
      <nav className="navbar">
        <div className="brand">
          <MapPin size={22} color="#fff" />
          TrendNearby
        </div>
        <div>
          <a href="#download" className="btn btn-secondary">
            Get App
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <motion.section 
          className="hero"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <div className="hero-content">
            <motion.div variants={fadeInUp} className="hero-badge">
              <Zap size={14} /> The Next-Gen Social Experience
            </motion.div>
            <motion.h1 variants={fadeInUp} className="hero-title">
              Discover your local world, instantly.
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-subtitle">
              TrendNearby is beautifully engineered to connect you with real-time events, people, and moments happening right around you.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <a id="download" href="/trendnearby.apk" className="btn btn-primary" download>
                <Download size={20} />
                Download APK
              </a>
            </motion.div>
          </div>

          <motion.div variants={scaleIn} className="hero-visual">
            <div className="device" style={{ transform: 'scale(0.9)', boxShadow: '0 30px 60px -15px rgba(255,255,255,0.1)' }}>
              <div className="device-notch"></div>
              <div className="device-screen">
                <div className="ui-header">
                  <Compass size={18} color="#fff" /> TrendNearby Beta
                </div>
                <div className="ui-body">
                  <div className="ui-post" style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <div className="ui-avatar" style={{ background: 'linear-gradient(45deg, #bb86fc, #03dac6)' }}></div>
                      <div>
                        <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>@trending_now</div>
                        <div style={{ fontSize: '0.75rem', color: '#888891' }}>Live • 5k watching</div>
                      </div>
                    </div>
                    <div className="ui-image" style={{ height: '200px', background: 'radial-gradient(circle at center, rgba(3, 218, 198, 0.2), #121216)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Bento Box Section */}
        <motion.section 
          className="bento-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header">
            <h2>Engineered for connection.</h2>
            <p>Everything you need to experience your city like never before, built with uncompromising performance and privacy.</p>
          </motion.div>

          <div className="bento-grid">
            <motion.div variants={fadeInUp} className="bento-card bento-large">
              <div className="bento-content">
                <div className="bento-icon"><Compass size={24} color="#fff" /></div>
                <h3 className="bento-title">Interactive Experience</h3>
                <p className="bento-text">Switch between different views instantly. See what's happening near you in real-time, completely optimized for speed and fluidity.</p>
                
                <div className="tabs-container">
                  <button className={`tab-btn ${activeTab === 'feed' ? 'active' : ''}`} onClick={() => setActiveTab('feed')}>
                    <Share2 size={18} /> Share Moments
                  </button>
                  <button className={`tab-btn ${activeTab === 'map' ? 'active' : ''}`} onClick={() => setActiveTab('map')}>
                    <MapPin size={18} /> Interactive Map
                  </button>
                  <button className={`tab-btn ${activeTab === 'chat' ? 'active' : ''}`} onClick={() => setActiveTab('chat')}>
                    <MessageCircle size={18} /> Secure Chat
                  </button>
                </div>
              </div>
              <div className="bento-visual">
                <div className="device" style={{ transform: 'scale(0.85)', transformOrigin: 'right center' }}>
                  <div className="device-notch"></div>
                  <AnimatePresence mode="wait">
                    {renderScreen()}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bento-card">
              <div className="bento-icon"><Zap size={24} color="#fff" /></div>
              <h3 className="bento-title">Lightning Fast</h3>
              <p className="bento-text">Built natively for Android to ensure smooth scrolling, instant photo uploads, and zero lag.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bento-card">
              <div className="bento-icon"><Lock size={24} color="#fff" /></div>
              <h3 className="bento-title">Privacy First</h3>
              <p className="bento-text">Your location and data are securely handled. You control exactly who sees your posts and profile.</p>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} TrendNearby. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
