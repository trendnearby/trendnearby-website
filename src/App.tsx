
import { Download, MapPin, MessageCircle, Heart, Share2, Compass, ArrowRight } from 'lucide-react';
import './index.css';

function App() {
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
          <div className="hero-badge">
            <Compass size={16} /> Discover what's happening around you
          </div>
          <h1 className="hero-title">
            Connect With Your <span>Local World</span> In Real-Time
          </h1>
          <p className="hero-subtitle">
            TrendNearby is the ultimate social platform to discover local events, meet people nearby, and share moments exactly where they happen.
          </p>
          
          <a id="download" href="https://example.com/trendnearby.apk" className="btn btn-primary">
            <Download size={24} />
            Download APK
          </a>
        </section>

        <section className="features-section">
          <h2 className="section-title">Why TrendNearby?</h2>
          <div className="grid">
            <div className="card">
              <div className="card-icon">
                <MapPin size={24} />
              </div>
              <h3 className="card-title">Location-Based Discovery</h3>
              <p className="card-text">Find out what's trending right now in your city. View posts, events, and people on an interactive map.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <Share2 size={24} />
              </div>
              <h3 className="card-title">Share Moments</h3>
              <p className="card-text">Post photos and updates. Tag your location so people nearby can join in on the fun instantly.</p>
            </div>

            <div className="card">
              <div className="card-icon">
                <MessageCircle size={24} />
              </div>
              <h3 className="card-title">Real-time Chat</h3>
              <p className="card-text">Connect privately with locals through instant messaging, complete with typing indicators and read receipts.</p>
            </div>

            <div className="card">
              <div className="card-icon">
                <Heart size={24} />
              </div>
              <h3 className="card-title">Social Interactions</h3>
              <p className="card-text">Like, comment, and follow your favorite local creators. Get notified instantly when someone interacts with you.</p>
            </div>
          </div>
        </section>

        <section className="hero" style={{ minHeight: '40vh', padding: '4rem 2rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Ready to explore?</h2>
          <p className="hero-subtitle">Join thousands of users sharing their local world today.</p>
          <a href="https://example.com/trendnearby.apk" className="btn btn-primary" style={{ background: '#fff', color: '#000', boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}>
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
