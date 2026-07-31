import { useState, useEffect, useRef } from 'react';
import { Download, MapPin, MessageCircle, Heart, Compass, ArrowRight, Camera } from 'lucide-react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('feed');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const renderScreen = () => {
    switch(activeTab) {
      case 'map':
        return (
          <div className="device-screen">
            <div className="screen-header">
              <MapPin size={20} color="#03dac6" /> Nearby Trends
            </div>
            <div className="screen-body" style={{ padding: 0 }}>
              <div className="mock-map">
                <MapPin size={40} className="mock-pin" />
              </div>
            </div>
          </div>
        );
      case 'chat':
        return (
          <div className="device-screen">
            <div className="screen-header">
              <MessageCircle size={20} color="#bb86fc" /> Real-time Chat
            </div>
            <div className="screen-body">
              <div className="mock-chat-bubble">Hey! Are you going to the concert downtown?</div>
              <div className="mock-chat-bubble right">Yes! It's super crowded here.</div>
              <div className="mock-chat-bubble">I'm on my way! 🏃</div>
            </div>
          </div>
        );
      case 'feed':
      default:
        return (
          <div className="device-screen">
            <div className="screen-header">
              <Compass size={20} color="#bb86fc" /> Global Feed
            </div>
            <div className="screen-body">
              <div className="mock-post">
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div className="mock-avatar"></div>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Alex_dev</div>
                    <div style={{ fontSize: '0.75rem', color: '#a0a0ab' }}>2 mins ago • New York</div>
                  </div>
                </div>
                <div className="mock-image"></div>
                <div style={{ display: 'flex', gap: '15px', marginTop: '10px', color: '#a0a0ab' }}>
                  <Heart size={18} color="#bb86fc" /> <MessageCircle size={18} />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className="bg-gradient"></div>
      
      <nav className="navbar">
        <div className="brand">
          <MapPin size={24} color="#bb86fc" />
          TrendNearby
        </div>
        <div>
          <a href="#download" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
            <Download size={18} /> Get App
          </a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Compass size={16} /> Discover what's happening around you
          </div>
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Connect With Your <span>Local World</span> In Real-Time
          </h1>
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
            TrendNearby is an exclusive social platform to discover local events, meet people nearby, and share moments exactly where they happen.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a id="download" href="/trendnearby.apk" className="btn btn-primary" download>
              <Download size={24} />
              Download APK
            </a>
          </div>
        </section>

        <section 
          ref={sectionRef} 
          className={`dynamic-section ${isVisible ? 'animate-fade-in' : ''}`} 
          style={{ opacity: 0 }}
        >
          <h2 className="section-title">Experience TrendNearby</h2>
          
          <div className="dynamic-container">
            <div className="tabs-list">
              <div 
                className={`tab-item ${activeTab === 'feed' ? 'active' : ''}`}
                onClick={() => setActiveTab('feed')}
              >
                <div className="tab-icon"><Camera size={24} /></div>
                <div className="tab-content">
                  <h3>Share Moments</h3>
                  <p>Post photos and updates. Tag your location so people nearby can join in on the fun instantly with likes and comments.</p>
                </div>
              </div>

              <div 
                className={`tab-item ${activeTab === 'map' ? 'active' : ''}`}
                onClick={() => setActiveTab('map')}
              >
                <div className="tab-icon"><MapPin size={24} /></div>
                <div className="tab-content">
                  <h3>Location-Based Discovery</h3>
                  <p>Find out what's trending right now in your city. View posts, events, and people on an interactive Google Map.</p>
                </div>
              </div>

              <div 
                className={`tab-item ${activeTab === 'chat' ? 'active' : ''}`}
                onClick={() => setActiveTab('chat')}
              >
                <div className="tab-icon"><MessageCircle size={24} /></div>
                <div className="tab-content">
                  <h3>Real-time Chat</h3>
                  <p>Connect privately with locals through instant messaging, complete with typing indicators and push notifications.</p>
                </div>
              </div>
            </div>

            <div className="device-container">
              <div className="device-mockup">
                <div className="device-notch"></div>
                {renderScreen()}
              </div>
            </div>
          </div>
        </section>

        <section className="hero" style={{ minHeight: '40vh', padding: '4rem 2rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Ready to explore?</h2>
          <p className="hero-subtitle">Join thousands of users sharing their local world today.</p>
          <a href="/trendnearby.apk" className="btn btn-primary" style={{ background: '#fff', color: '#000', boxShadow: '0 0 20px rgba(255,255,255,0.2)' }} download>
            Start Exploring <ArrowRight size={20} />
          </a>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} TrendNearby. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>An Android exclusive social experience.</p>
      </footer>
    </>
  );
}

export default App;
