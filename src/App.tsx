import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  MapPin, 
  MessageCircle, 
  Share2, 
  Compass, 
  Zap, 
  Lock, 
  Store, 
  Megaphone, 
  Users, 
  TrendingUp, 
  Loader2, 
  CheckCircle2, 
  ShieldCheck, 
  Smartphone, 
  HelpCircle,
  Sparkles,
  ChevronDown,
  Shield,
  X,
  Check
} from 'lucide-react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('feed');
  const [isDownloading, setIsDownloading] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 3000);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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

  const faqs = [
    {
      question: "What is TrendNearby and how does it work?",
      answer: "TrendNearby is a real-time hyperlocal social network app that connects you with events, posts, live map discussions, and moments happening right in your immediate surroundings. By utilizing your device location, TrendNearby presents live neighborhood feeds, map pins, and instant community connections."
    },
    {
      question: "How do I download and install the TrendNearby Android APK?",
      answer: "Downloading TrendNearby is simple. Click the 'Download APK' button on this page to get the verified APK package (v1.0.4). Once downloaded to your Android device, tap the file to install. Ensure 'Install from Unknown Sources' is toggled ON in your Android settings if prompted."
    },
    {
      question: "How can local businesses boost sales using TrendNearby?",
      answer: "Local businesses can pin their storefront on the TrendNearby interactive map, launch instant real-time flash sales to users within a 5-mile radius, post daily announcements, and communicate directly with local buyers to drive foot traffic."
    },
    {
      question: "Is TrendNearby free to use and safe for user privacy?",
      answer: "Yes, TrendNearby is 100% free to download and use. We prioritize your privacy with end-to-end data security, encrypted messaging, and precise location controls so you decide what you share and when."
    },
    {
      question: "What Android version is required for TrendNearby?",
      answer: "TrendNearby is lightweight and compatible with Android 7.0 (Nougat) and all newer Android versions, optimized for smooth performance and minimal battery consumption."
    }
  ];

  const installSteps = [
    {
      step: "01",
      title: "Download Verified APK",
      desc: "Click the Download APK button on our official website to save the trendnearby.apk file directly to your smartphone."
    },
    {
      step: "02",
      title: "Enable Installation Access",
      desc: "Go to your Android Settings > Security & Privacy, and toggle ON 'Install from Unknown Sources' or 'Install Unknown Apps'."
    },
    {
      step: "03",
      title: "Install & Explore",
      desc: "Open your Downloads folder, tap trendnearby.apk, hit Install, and launch the app to discover your local world in real time."
    }
  ];

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
              <MapPin size={18} color="#03dac6" /> Nearby Live Map
            </div>
            <div className="ui-body" style={{ padding: 0, position: 'relative' }}>
              <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(3, 218, 198, 0.15), #0a0a0c)' }}></div>
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <MapPin size={36} color="#03dac6" fill="#03dac6" />
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
              <MessageCircle size={18} color="#bb86fc" /> Encrypted Local Chat
            </div>
            <div className="ui-body">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="ui-chat">
                Hey! The local market festival is starting downtown! 🎪
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="ui-chat self">
                Awesome, heading there right now! 🏃‍♂️
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
              <Compass size={18} color="#fff" /> Hyperlocal Feed
            </div>
            <div className="ui-body">
              <div className="ui-post">
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div className="ui-avatar"></div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Alex_Local</div>
                    <div style={{ fontSize: '0.75rem', color: '#888891' }}>2 mins ago • 0.3 miles away</div>
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
      <div className="bg-grid" aria-hidden="true"></div>
      <div className="bg-glow" aria-hidden="true"></div>
      
      <header className="navbar">
        <a href="#" className="brand">
          <MapPin size={24} color="#03dac6" />
          <span>TrendNearby</span>
        </a>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#business">Businesses</a>
          <a href="#howto">Installation Guide</a>
          <a href="#faq">FAQ</a>
          <a href="#download" className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem' }}>
            <Download size={16} /> Get APK
          </a>
        </nav>
      </header>

      <main>
        {/* Breadcrumb Navigation for Crawlers & UX */}
        <div className="breadcrumb-wrapper">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <a href="#">Home</a>
            <span className="separator">&gt;</span>
            <a href="#features">Features</a>
            <span className="separator">&gt;</span>
            <a href="#business">Local Business</a>
            <span className="separator">&gt;</span>
            <span className="current">Download TrendNearby APK</span>
          </nav>
        </div>

        {/* Hero Section */}
        <motion.section 
          className="hero"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          aria-label="TrendNearby Hero Section"
        >
          <div className="hero-content">
            <motion.div variants={fadeInUp} className="hero-badge">
              <Sparkles size={14} color="#03dac6" /> The Premier Hyperlocal Social Network
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="hero-title">
              Real-Time Local Social Network &amp; Community Discovery App
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="hero-subtitle">
              Connect instantly with your neighborhood. TrendNearby lets you discover live events, real-time map discussions, local community updates, and exclusive shop promotions happening right around you.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="hero-cta-group">
              <a 
                id="download" 
                href="/trendnearby.apk" 
                className="btn btn-primary btn-lg" 
                download 
                onClick={handleDownload}
                aria-label="Download TrendNearby APK"
              >
                {isDownloading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Starting Download...
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    Download APK (v1.0.4)
                  </>
                )}
              </a>
              <div className="download-meta">
                <span><ShieldCheck size={16} color="#03dac6" /> 100% Safe &amp; Malware Free</span>
                <span><Smartphone size={16} color="#bb86fc" /> Android 7.0+ Compatible</span>
              </div>
            </motion.div>
          </div>

          <motion.div variants={scaleIn} className="hero-visual">
            <div className="device" style={{ transform: 'scale(0.9)', boxShadow: '0 30px 60px -15px rgba(3, 218, 198, 0.15)' }}>
              <div className="device-notch"></div>
              <div className="device-screen">
                <div className="ui-header">
                  <Compass size={18} color="#fff" /> TrendNearby Live
                </div>
                <div className="ui-body">
                  <div className="ui-post" style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <div className="ui-avatar" style={{ background: 'linear-gradient(45deg, #bb86fc, #03dac6)' }}></div>
                      <div>
                        <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>@trending_near_you</div>
                        <div style={{ fontSize: '0.75rem', color: '#888891' }}>Live • 5k users active</div>
                      </div>
                    </div>
                    <div className="ui-image" style={{ height: '200px', background: 'radial-gradient(circle at center, rgba(3, 218, 198, 0.25), #121216)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          id="features"
          className="bento-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header">
            <span className="section-tag"><Zap size={14} /> Built For Modern Communities</span>
            <h2>Hyperlocal Features Engineered For Real Connections</h2>
            <p>Experience your neighborhood like never before with instant real-time social tools, interactive map discovery, and privacy protection.</p>
          </motion.div>

          <div className="bento-grid">
            <motion.div variants={fadeInUp} className="bento-card bento-large">
              <div className="bento-content">
                <div className="bento-icon"><Compass size={24} color="#03dac6" /></div>
                <h3 className="bento-title">Interactive Local Discovery</h3>
                <p className="bento-text">
                  Explore what is happening around you in real-time. Switch seamlessly between nearby post feeds, interactive live map pins, and encrypted neighborhood chats.
                </p>
                
                <div className="tabs-container">
                  <button className={`tab-btn ${activeTab === 'feed' ? 'active' : ''}`} onClick={() => setActiveTab('feed')}>
                    <Share2 size={18} /> Hyperlocal Feed
                  </button>
                  <button className={`tab-btn ${activeTab === 'map' ? 'active' : ''}`} onClick={() => setActiveTab('map')}>
                    <MapPin size={18} /> Interactive Live Map
                  </button>
                  <button className={`tab-btn ${activeTab === 'chat' ? 'active' : ''}`} onClick={() => setActiveTab('chat')}>
                    <MessageCircle size={18} /> Encrypted Neighborhood Chat
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
              <div className="bento-icon"><Zap size={24} color="#bb86fc" /></div>
              <h3 className="bento-title">Lightning Fast &amp; Smooth</h3>
              <p className="bento-text">Engineered natively for Android. Instant image sharing, real-time sync, and fluid performance with zero lag.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bento-card">
              <div className="bento-icon"><Lock size={24} color="#03dac6" /></div>
              <h3 className="bento-title">Privacy First Design</h3>
              <p className="bento-text">Your location and identity are safeguarded with military-grade encryption and customizable privacy settings.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Business Section */}
        <motion.section 
          id="business"
          className="bento-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header">
            <span className="section-tag" style={{ color: '#03dac6', borderColor: 'rgba(3, 218, 198, 0.2)' }}>
              <TrendingUp size={14} /> Hyperlocal Marketing For Local Shops
            </span>
            <h2>Empower Your Local Business &amp; Drive Foot Traffic</h2>
            <p>TrendNearby isn't just a social app—it's the ultimate local business marketing tool to engage nearby shoppers and boost sales instantly.</p>
          </motion.div>

          <div className="bento-grid business-grid">
            <motion.div variants={fadeInUp} className="bento-card bento-biz">
              <div className="bento-icon biz-icon-1"><Store size={24} /></div>
              <h3 className="bento-title">Pin Your Storefront</h3>
              <p className="bento-text">Gain instant visibility on the local map. When nearby residents search for open stores, dining, or services, your business stands out.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bento-card bento-biz">
              <div className="bento-icon biz-icon-2"><Megaphone size={24} /></div>
              <h3 className="bento-title">Real-Time Flash Deals</h3>
              <p className="bento-text">Broadcast daily specials, discount coupons, or flash deals directly to users active within a 5-mile radius of your store.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bento-card bento-biz">
              <div className="bento-icon biz-icon-3"><Users size={24} /></div>
              <h3 className="bento-title">Direct Local Customer Engagement</h3>
              <p className="bento-text">Build a loyal community around your local brand. Answer customer inquiries, gather reviews, and host neighborhood events.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Step-by-Step Installation Guide (HowTo Schema Match) */}
        <motion.section 
          id="howto"
          className="bento-section howto-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header">
            <span className="section-tag"><Smartphone size={14} /> Simple Setup Guide</span>
            <h2>How to Install TrendNearby Android APK</h2>
            <p>Follow three easy steps to install TrendNearby directly on any Android device in under 2 minutes.</p>
          </motion.div>

          <div className="howto-grid">
            {installSteps.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="howto-card">
                <div className="howto-step-number">{item.step}</div>
                <h3 className="howto-title">{item.title}</h3>
                <p className="howto-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* E-E-A-T & Privacy Security Section */}
        <motion.section 
          id="privacy"
          className="bento-section privacy-trust-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="trust-card">
            <div className="trust-header">
              <div className="trust-icon"><Shield size={28} color="#03dac6" /></div>
              <div>
                <h2>Your Privacy &amp; Data Security Is Our Top Priority</h2>
                <p>TrendNearby is architected with strict user data protection standards and complete location transparency.</p>
              </div>
            </div>
            <div className="trust-points">
              <div className="trust-point">
                <Check size={18} color="#03dac6" />
                <span><strong>Zero Continuous Tracking:</strong> Location is only used when the app is actively open.</span>
              </div>
              <div className="trust-point">
                <Check size={18} color="#03dac6" />
                <span><strong>Encrypted Communications:</strong> Chats and local posts are protected with high-grade encryption algorithms.</span>
              </div>
              <div className="trust-point">
                <Check size={18} color="#03dac6" />
                <span><strong>Verified APK Build:</strong> 100% clean package certified free of malware, spyware, or adware.</span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* App Info / Specs Section */}
        <motion.section 
          className="bento-section app-specs-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="specs-card">
            <div className="specs-header">
              <h3><Smartphone size={20} color="#03dac6" /> TrendNearby Android Application Specs</h3>
              <p>Download verified, secure APK package directly from the developer.</p>
            </div>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">App Name</span>
                <span className="spec-value">TrendNearby</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Latest Version</span>
                <span className="spec-value">1.0.4</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">File Size</span>
                <span className="spec-value">28.0 MB</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">OS Required</span>
                <span className="spec-value">Android 7.0+</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">License</span>
                <span className="spec-value">Free</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Category</span>
                <span className="spec-value">Social &amp; Hyperlocal</span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          id="faq"
          className="bento-section faq-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header">
            <span className="section-tag"><HelpCircle size={14} /> Frequently Asked Questions</span>
            <h2>Everything You Need To Know About TrendNearby</h2>
            <p>Get quick answers regarding app installation, hyperlocal features, privacy, and local business marketing.</p>
          </motion.div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`faq-card ${expandedFaq === index ? 'expanded' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <ChevronDown className="faq-icon" size={20} />
                </div>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="faq-answer"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand">
              <MapPin size={22} color="#03dac6" />
              <span>TrendNearby</span>
            </div>
            <p>Connecting people and local businesses in real-time through hyperlocal discovery.</p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Navigation</h4>
              <a href="#features">Features</a>
              <a href="#business">Local Business</a>
              <a href="#howto">Installation Guide</a>
              <a href="#faq">FAQ</a>
              <a href="#download">Download APK</a>
            </div>
            <div className="footer-column">
              <h4>Legal &amp; Privacy</h4>
              <button className="text-btn" onClick={() => setActiveModal('privacy')}>Privacy Policy</button>
              <button className="text-btn" onClick={() => setActiveModal('terms')}>Terms of Service</button>
              <a href="#privacy">Security Overview</a>
            </div>
            <div className="footer-column">
              <h4>Safety &amp; Trust</h4>
              <span><CheckCircle2 size={14} color="#03dac6" /> End-to-End Encrypted</span>
              <span><CheckCircle2 size={14} color="#03dac6" /> Verified APK</span>
              <span><CheckCircle2 size={14} color="#03dac6" /> Privacy Protection</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TrendNearby Inc. All rights reserved. Real-Time Hyperlocal Social Network Platform.</p>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {activeModal === 'privacy' && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)}>
            <motion.div className="modal-card" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Privacy Policy</h2>
                <button className="icon-btn" onClick={() => setActiveModal(null)}><X size={20} /></button>
              </div>
              <div className="modal-body">
                <p>At TrendNearby, we respect your privacy and are committed to protecting your personal data.</p>
                <h3>1. Information We Collect</h3>
                <p>TrendNearby collects coarse and fine location data solely when the application is actively in use to deliver neighborhood posts, map pins, and local store updates. We do not sell or track location history across third-party websites.</p>
                <h3>2. How We Protect Your Data</h3>
                <p>All communication within TrendNearby is encrypted in transit. Your personal account information is stored in secure Firebase environments with strict access controls.</p>
                <h3>3. Control Over Your Location</h3>
                <p>You can revoke or adjust location permissions at any time via your device's Android App Settings.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terms of Service Modal */}
      <AnimatePresence>
        {activeModal === 'terms' && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)}>
            <motion.div className="modal-card" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Terms of Service</h2>
                <button className="icon-btn" onClick={() => setActiveModal(null)}><X size={20} /></button>
              </div>
              <div className="modal-body">
                <p>Welcome to TrendNearby. By downloading, installing, or using the TrendNearby application, you agree to these terms.</p>
                <h3>1. Community Guidelines</h3>
                <p>TrendNearby is designed for positive, local community interaction. Hate speech, harassment, spam, and fraudulent business listings are strictly prohibited and will result in account suspension.</p>
                <h3>2. Local Business Listings</h3>
                <p>Local businesses must provide accurate promotional information. Misleading flash sales or false advertising will lead to storefront removal.</p>
                <h3>3. App License</h3>
                <p>TrendNearby grants you a free, non-exclusive, non-transferable license to use the Android APK on compatible devices.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
