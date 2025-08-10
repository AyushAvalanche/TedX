// React Components and Application
const { useState, useEffect, useRef } = React;

// Speaker data
const speakerData = [
  {
    id: 'bhavana',
    name: "Bhavana Singh",
    title: "Courtier and Image Consultant",
    bio: "Bhavana Singh is a renowned image consultant and courtier who has transformed the lives of countless individuals through her expertise in personal styling and etiquette. With over a decade of experience in the fashion industry, she has worked with celebrities, corporate executives, and individuals seeking to enhance their personal brand.",
    expertise: ["Personal Styling", "Corporate Etiquette", "Brand Consulting", "Fashion Photography"],
    achievements: ["Featured in Vogue India", "Style consultant for 50+ celebrities", "Founded Style Academy"]
  },
  {
    id: 'hetal',
    name: "Hetal Dalal",
    title: "President and COO, IiAS",
    bio: "Hetal Dalal serves as the President and COO of Institutional Investor Advisory Services (IiAS), where she leads initiatives in corporate governance and investor advisory services. Her work focuses on promoting transparency and accountability in corporate India.",
    expertise: ["Corporate Governance", "Investor Relations", "Strategic Management", "ESG Consulting"],
    achievements: ["25+ years in financial services", "Pioneer in ESG investing in India", "Regular speaker at global conferences"]
  },
  {
    id: 'jasmine',
    name: "Jasmine Saluja Lulla",
    title: "Baker and Founder of Cakes N Craft",
    bio: "Jasmine Saluja Lulla is the creative force behind Cakes N Craft, a premium bakery that has revolutionized the art of cake making in India. Her innovative designs and exceptional taste have made her a sought-after name in the baking industry.",
    expertise: ["Artisan Baking", "Cake Design", "Culinary Innovation", "Business Development"],
    achievements: ["Featured in multiple food magazines", "Award-winning cake designs", "Trained 1000+ baking enthusiasts"]
  },
  {
    id: 'manish',
    name: "Manish Dabkara",
    title: "CMD, EKIESL and Net Zero Champion 2023",
    bio: "Manish Dabkara is the Chairman and Managing Director of EKIESL and a recognized Net Zero Champion 2023. He is a visionary leader in sustainable energy solutions and environmental conservation, driving initiatives that balance business growth with environmental responsibility.",
    expertise: ["Sustainable Energy", "Environmental Conservation", "Corporate Leadership", "Climate Solutions"],
    achievements: ["Net Zero Champion 2023", "Pioneer in renewable energy", "Reduced carbon footprint by 40%"]
  },
  {
    id: 'purnendu',
    name: "Purnendu Nath",
    title: "Fitness Influencer and Expert in Health and Technology",
    bio: "Purnendu Nath is a fitness influencer and health technology expert who has revolutionized the way people approach fitness through technology integration. His innovative methods combine traditional fitness practices with cutting-edge technology.",
    expertise: ["Fitness Technology", "Health Analytics", "Digital Wellness", "Performance Optimization"],
    achievements: ["500K+ social media followers", "Developed fitness apps", "Certified nutrition specialist"]
  },
  {
    id: 'rohit',
    name: "Rohit Khandelwal",
    title: "Actor and Mr. World 2016",
    bio: "Rohit Khandelwal is an accomplished actor and the proud winner of Mr. World 2016. He has used his platform to advocate for various social causes and has made significant contributions to the entertainment industry while maintaining his commitment to social responsibility.",
    expertise: ["Acting", "Modeling", "Social Advocacy", "Public Speaking"],
    achievements: ["Mr. World 2016 winner", "Bollywood films", "UN Goodwill Ambassador"]
  },
  {
    id: 'sanra',
    name: "Sanra Shaw",
    title: "COO Rehwa Society",
    bio: "Sanra Shaw serves as the Chief Operating Officer of Rehwa Society, a non-profit organization dedicated to empowering artisans and preserving traditional crafts. Her work focuses on creating sustainable livelihoods for rural communities through craft development.",
    expertise: ["Social Entrepreneurship", "Craft Development", "Rural Empowerment", "Sustainable Livelihoods"],
    achievements: ["Empowered 5000+ artisans", "UNESCO recognition", "Rural development awards"]
  },
  {
    id: 'sharath',
    name: "Sharath Gayakwad",
    title: "Paralympian and Arjuna Awardee",
    bio: "Sharath Gayakwad is a celebrated Paralympian and Arjuna Awardee who has brought glory to India through his exceptional achievements in para-badminton. His journey from adversity to triumph serves as an inspiration to millions.",
    expertise: ["Para-Badminton", "Sports Psychology", "Motivational Speaking", "Disability Advocacy"],
    achievements: ["Paralympic medalist", "Arjuna Award recipient", "World Championship medals"]
  },
  {
    id: 'shridhar',
    name: "Shridhar Venkat",
    title: "CEO, Akshaya Patra Foundation",
    bio: "Shridhar Venkat is the CEO of Akshaya Patra Foundation, one of the world's largest NGO-run school meal programs. Under his leadership, the foundation has served over 2 billion meals to underprivileged children across India.",
    expertise: ["Non-Profit Management", "Child Nutrition", "Social Impact", "Operational Excellence"],
    achievements: ["2+ billion meals served", "Reached 2 million children daily", "Global recognition for impact"]
  },
  {
    id: 'shubham',
    name: "Shubham Sankhyan",
    title: "Potter, Sculptor and Influencer",
    bio: "Shubham Sankhyan is a talented potter, sculptor, and social media influencer who has brought traditional pottery to the digital age. His creative works and engaging content have inspired a new generation to appreciate and learn traditional crafts.",
    expertise: ["Pottery", "Sculpture", "Digital Content Creation", "Traditional Crafts"],
    achievements: ["Viral pottery videos", "Traditional craft revival", "Youth inspiration award"]
  }
];

// Navigation Component
const Navigation = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={() => scrollToSection('home')}>
          <img src="data:image/png;base64,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" alt="TEDx NMIMS Indore" />
        </a>
        
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#speakers" className="nav-link" onClick={() => scrollToSection('speakers')}>Speakers</a></li>
          <li><a href="#team" className="nav-link" onClick={() => scrollToSection('team')}>Team</a></li>
          <li><a href="#schedule" className="nav-link" onClick={() => scrollToSection('schedule')}>Schedule</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
        
        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </div>
      </div>
    </nav>
  );
};

// Counter Component
const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const increment = end / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isVisible, end, duration]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
};

// Typewriter Effect Component
const TypewriterText = ({ text, speed = 100, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return (
    <span className={`typewriter ${isComplete ? 'complete' : ''}`}>
      {displayText}
      {!isComplete && <span className="cursor">|</span>}
    </span>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background"></div>
      
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <div className="hero-content">
        <div className={`hero-badge ${isVisible ? 'animate-in' : ''}`}>
          September 13, 2025 • NMIMS Indore
        </div>
        
        <h1 className={`hero-title ${isVisible ? 'animate-in' : ''}`}>
          {isVisible ? (
            <>
              <TypewriterText text="Ideas Worth " speed={80} delay={500} />
              <span className="highlight-text">
                <TypewriterText text="Spreading" speed={80} delay={1200} />
              </span>
            </>
          ) : (
            <>Ideas Worth <span className="highlight-text">Spreading</span></>
          )}
        </h1>
        
        <p className={`hero-subtitle ${isVisible ? 'animate-in delay-2' : ''}`}>
          Join us on September 13, 2025, as TEDx NMIMS Indore presents an extraordinary lineup of speakers who dare to challenge conventions and inspire change.
        </p>
        
        <div className={`hero-stats ${isVisible ? 'animate-in delay-3' : ''}`}>
          <div className="stat-item">
            <Counter end={10} />
            <div className="stat-label">Speakers</div>
          </div>
          <div className="stat-item">
            <Counter end={500} />
            <div className="stat-label">Attendees</div>
          </div>
          <div className="stat-item">
            <Counter end={8} />
            <div className="stat-label">Hours</div>
          </div>
        </div>
        
        <div className={`hero-buttons ${isVisible ? 'animate-in delay-4' : ''}`}>
          <button className="btn btn-primary" onClick={() => setTicketModalOpen(true)}>
            <i className="fas fa-ticket-alt"></i>
            Book Tickets
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('speakers')}>
            <i className="fas fa-users"></i>
            Meet Our Speakers
          </button>
          <button className="btn btn-outline" onClick={() => scrollToSection('about')}>
            <i className="fas fa-info-circle"></i>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About TEDx NMIMS</h2>
        <p className="section-subtitle">
          TEDx NMIMS Indore is an independently organized TED event that brings together thought leaders, innovators, and visionaries to share ideas that matter.
        </p>
        
        <div className="about-grid">
          <div className="about-content">
            <h3>Our Mission</h3>
            <p className="about-text">
              We believe in the power of ideas to change attitudes, lives and, ultimately, the world. Our mission is to foster intellectual curiosity and inspire positive change in our community through carefully curated talks that challenge conventional thinking.
            </p>
            
            <div className="feature-list">
              <div className="feature-item">
                <i className="fas fa-lightbulb feature-icon"></i>
                <div className="feature-text">
                  <h4>Innovation</h4>
                  <p>Cutting-edge ideas that shape the future of technology, society, and human progress.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <i className="fas fa-users feature-icon"></i>
                <div className="feature-text">
                  <h4>Community</h4>
                  <p>Building connections that last and fostering meaningful relationships across diverse fields.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <i className="fas fa-globe feature-icon"></i>
                <div className="feature-text">
                  <h4>Impact</h4>
                  <p>Creating positive change that resonates locally and extends globally through actionable insights.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-card">
              <i className="fas fa-quote-left visual-icon"></i>
              <h3>Ideas Worth Spreading</h3>
              <p>TED is a global community, welcoming people from every discipline and culture who seek a deeper understanding of the world and meaningful ways to create positive change.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Speaker Modal Component
const SpeakerModal = ({ speaker, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !speaker) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '2rem'
    }}>
      <div className="modal-content glass-strong" onClick={(e) => e.stopPropagation()} style={{
        maxWidth: '600px',
        width: '100%',
        maxHeight: '80vh',
        overflow: 'auto',
        padding: '3rem',
        position: 'relative'
      }}>
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: '#ff0000',
            fontSize: '2rem',
            cursor: 'pointer'
          }}
        >
          ×
        </button>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, #ff0000, #cc0000)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            fontSize: '3rem',
            color: 'white'
          }}>
            <i className="fas fa-user"></i>
          </div>
          <h2 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>{speaker.name}</h2>
          <p style={{ color: '#ff0000', fontSize: '1.1rem' }}>{speaker.title}</p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#ff0000', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fas fa-user-circle"></i> Biography
          </h3>
          <p style={{ color: '#cccccc', lineHeight: '1.6' }}>{speaker.bio}</p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#ff0000', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fas fa-star"></i> Areas of Expertise
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {speaker.expertise.map((skill, index) => (
              <span key={index} style={{
                background: 'rgba(255, 0, 0, 0.2)',
                color: '#ff0000',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                border: '1px solid rgba(255, 0, 0, 0.3)'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 style={{ color: '#ff0000', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fas fa-trophy"></i> Key Achievements
          </h3>
          <ul style={{ color: '#cccccc', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
            {speaker.achievements.map((achievement, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Team Section Component
const TeamSection = () => {
  const teamData = [
    {
      id: 'director',
      name: "Dr. Rajesh Kumar",
      role: "Event Director",
      description: "Leading the vision and strategic direction of TEDx NMIMS Indore with expertise in educational leadership.",
      icon: "fas fa-crown",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "director@tedxnmims.com"
      }
    },
    {
      id: 'organizer',
      name: "Priya Sharma",
      role: "Chief Organizer",
      description: "Coordinating all event logistics and ensuring seamless execution of TEDx NMIMS Indore 2025.",
      icon: "fas fa-tasks",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "organizer@tedxnmims.com"
      }
    },
    {
      id: 'curator',
      name: "Arjun Patel",
      role: "Content Curator",
      description: "Carefully selecting and preparing speakers to deliver ideas worth spreading at our event.",
      icon: "fas fa-lightbulb",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "curator@tedxnmims.com"
      }
    },
    {
      id: 'marketing',
      name: "Sneha Gupta",
      role: "Marketing Head",
      description: "Building awareness and engagement for TEDx NMIMS through innovative marketing strategies.",
      icon: "fas fa-bullhorn",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "marketing@tedxnmims.com"
      }
    },
    {
      id: 'tech',
      name: "Rahul Mehta",
      role: "Technology Lead",
      description: "Managing all technical aspects including livestreaming, audio-visual, and digital platforms.",
      icon: "fas fa-laptop-code",
      social: {
        linkedin: "#",
        github: "#",
        email: "tech@tedxnmims.com"
      }
    },
    {
      id: 'design',
      name: "Kavya Singh",
      role: "Design Lead",
      description: "Creating visual identity and ensuring brand consistency across all TEDx NMIMS materials.",
      icon: "fas fa-palette",
      social: {
        linkedin: "#",
        behance: "#",
        email: "design@tedxnmims.com"
      }
    },
    {
      id: 'pr',
      name: "Manish Agarwal",
      role: "Public Relations",
      description: "Building media relationships and managing communications for TEDx NMIMS Indore.",
      icon: "fas fa-handshake",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "pr@tedxnmims.com"
      }
    },
    {
      id: 'finance',
      name: "Deepika Jain",
      role: "Finance Manager",
      description: "Managing budgets, sponsorships, and financial operations for the TEDx NMIMS event.",
      icon: "fas fa-chart-line",
      social: {
        linkedin: "#",
        email: "finance@tedxnmims.com"
      }
    }
  ];

  return (
    <section id="team" className="team">
      <div className="section-container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          Meet the passionate individuals who make TEDx NMIMS Indore possible, working tirelessly to bring you ideas worth spreading.
        </p>
        
        <div className="team-grid">
          {teamData.map((member, index) => (
            <div key={member.id} className="team-card">
              <div className="team-avatar">
                <i className={member.icon}></i>
              </div>
              
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
              
              <div className="team-social">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="social-icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
                {member.social.instagram && (
                  <a href={member.social.instagram} className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="social-icon">
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {member.social.behance && (
                  <a href={member.social.behance} className="social-icon">
                    <i className="fab fa-behance"></i>
                  </a>
                )}
                {member.social.email && (
                  <a href={`mailto:${member.social.email}`} className="social-icon">
                    <i className="fas fa-envelope"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Speakers Section Component
const SpeakersSection = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (speaker) => {
    setSelectedSpeaker(speaker);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedSpeaker(null), 300);
  };

  return (
    <section id="speakers" className="speakers">
      <div className="section-container">
        <h2 className="section-title">Speakers 2025</h2>
        <p className="section-subtitle">
          Meet our extraordinary lineup of speakers who will inspire, challenge, and transform your perspective with their groundbreaking ideas.
        </p>
        
        <div className="speakers-grid">
          {speakerData.map((speaker, index) => (
            <div key={speaker.id} className="speaker-card">
              <div className="speaker-image">
                <i className="fas fa-user speaker-placeholder"></i>
                <div className="speaker-overlay">
                  <button 
                    className="view-profile-btn"
                    onClick={() => openModal(speaker)}
                  >
                    <i className="fas fa-info"></i> View Profile
                  </button>
                </div>
              </div>
              
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-title">{speaker.title}</p>
                
                <div className="speaker-social">
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <SpeakerModal 
        speaker={selectedSpeaker} 
        isOpen={modalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};

// Schedule Section Component
const ScheduleSection = () => {
  const scheduleItems = [
    {
      time: "9:30 AM",
      title: "Registration & Welcome",
      description: "Check-in, welcome coffee, and networking with fellow attendees"
    },
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address by NMIMS leadership and TEDx NMIMS introduction"
    },
    {
      time: "10:30 AM",
      title: "Speaker Sessions - Part 1",
      description: "First set of inspiring talks by our distinguished speakers"
    },
    {
      time: "12:30 PM",
      title: "Lunch & Networking",
      description: "Connect with speakers, attendees, and explore interactive exhibits"
    },
    {
      time: "2:00 PM",
      title: "Speaker Sessions - Part 2",
      description: "Continuation of thought-provoking talks and panel discussions"
    },
    {
      time: "4:30 PM",
      title: "Interactive Workshop",
      description: "Hands-on activities and collaborative sessions"
    },
    {
      time: "5:30 PM",
      title: "Closing Ceremony",
      description: "Final thoughts, awards, and celebration of ideas worth spreading"
    }
  ];

  return (
    <section id="schedule" className="schedule">
      <div className="section-container">
        <h2 className="section-title">Event Schedule - September 13, 2025</h2>
        <p className="section-subtitle">
          A day filled with inspiration, learning, and meaningful connections at NMIMS Indore Campus.
        </p>
        
        <div className="timeline">
          {scheduleItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have questions about the event? Want to become a sponsor? We'd love to hear from you.
        </p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info@tedxnmims.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <div className="contact-details">
                <h4>Location</h4>
                <p>NMIMS Indore Campus<br/>September 13, 2025</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Page Navigation Component
const PageNavigation = ({ activeSection, setActiveSection }) => {
  const sections = ['home', 'about', 'speakers', 'team', 'schedule', 'contact'];
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="page-navigation">
      {sections.map((section, index) => (
        <div
          key={section}
          className={`nav-dot ${activeSection === section ? 'active' : ''}`}
          onClick={() => scrollToSection(section)}
        ></div>
      ))}
    </div>
  );
};

// Footer Component
const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-logo">TEDx NMIMS</div>
          <p className="footer-text">
            This independent TEDx event is operated under license from TED.
          </p>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#speakers">Speakers</a>
            <a href="#team">Team</a>
            <a href="#schedule">Schedule</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 TEDx NMIMS Indore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Ticket Booking Modal Component
const TicketBookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ticketType: 'general',
    quantity: 1
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle ticket booking logic here
    alert('Thank you for your interest! We will contact you with booking details.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="ticket-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Book Your Tickets</h2>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="ticket-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="ticketType">Ticket Type</label>
              <select
                id="ticketType"
                name="ticketType"
                value={formData.ticketType}
                onChange={handleInputChange}
              >
                <option value="student">Student - ₹299</option>
                <option value="general">General - ₹499</option>
                <option value="vip">VIP - ₹999</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="quantity">Number of Tickets</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              value={formData.quantity}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="ticket-summary">
            <div className="summary-item">
              <span>Ticket Type:</span>
              <span>{formData.ticketType.charAt(0).toUpperCase() + formData.ticketType.slice(1)}</span>
            </div>
            <div className="summary-item">
              <span>Quantity:</span>
              <span>{formData.quantity}</span>
            </div>
            <div className="summary-total">
              <span>Total:</span>
              <span>₹{
                (formData.ticketType === 'student' ? 299 : 
                 formData.ticketType === 'general' ? 499 : 999) * formData.quantity
              }</span>
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary book-btn">
            <i className="fas fa-ticket-alt"></i>
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

// Live Chat Component
const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you with TEDx NMIMS?",
      sender: "bot",
      time: new Date().toLocaleTimeString()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: currentMessage,
        sender: "user",
        time: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setCurrentMessage('');
      
      // Auto-reply after a short delay
      setTimeout(() => {
        const botReply = {
          id: messages.length + 2,
          text: "Thank you for your message! Our team will get back to you shortly. For immediate assistance, please call +91-9876543210.",
          sender: "bot",
          time: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, botReply]);
      }, 1000);
    }
  };

  return (
    <div className={`live-chat ${isOpen ? 'open' : ''}`}>
      <div className="chat-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="chat-avatar">
          <i className="fas fa-headset"></i>
        </div>
        <div className="chat-info">
          <span className="chat-title">Live Support</span>
          <span className="chat-status">Online</span>
        </div>
        <button className="chat-toggle">
          <i className={`fas ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
        </button>
      </div>
      
      {isOpen && (
        <div className="chat-body">
          <div className="chat-messages">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">{message.time}</span>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button type="submit" className="chat-send">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

// Modern Page Navigation Component
const ModernNavigation = ({ activePage, setActivePage, mobileMenuOpen, setMobileMenuOpen }) => {
  const pages = [
    { id: 'home', name: 'Home', icon: 'fa-home' },
    { id: 'about', name: 'About', icon: 'fa-info-circle' },
    { id: 'speakers', name: 'Speakers', icon: 'fa-users' },
    { id: 'team', name: 'Team', icon: 'fa-user-friends' },
    { id: 'schedule', name: 'Schedule', icon: 'fa-calendar' },
    { id: 'contact', name: 'Contact', icon: 'fa-envelope' }
  ];

  return (
    <nav className="modern-navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <img src="assets/logo.svg" alt="TEDx NMIMS" className="nav-logo" />
          <span className="brand-text">TEDx NMIMS</span>
        </div>
        
        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {pages.map(page => (
            <button
              key={page.id}
              className={`nav-item ${activePage === page.id ? 'active' : ''}`}
              onClick={() => {
                setActivePage(page.id);
                setMobileMenuOpen(false);
              }}
            >
              <i className={`fas ${page.icon}`}></i>
              <span>{page.name}</span>
            </button>
          ))}
        </div>
        
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

// Page Container Component
const PageContainer = ({ activePage, children }) => {
  return (
    <div className="page-container">
      <div className={`page-content ${activePage}`}>
        {children}
      </div>
    </div>
  );
};

// Enhanced Hero Page
const HomePage = ({ setTicketModalOpen, setActivePage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="modern-hero">
      <div className="hero-background">
        <div className="cosmic-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className={`hero-badge ${isVisible ? 'animate-in' : ''}`}>
          <span className="badge-text">TEDx NMIMS Indore 2025</span>
        </div>
        
        <h1 className={`hero-title ${isVisible ? 'animate-in delay-1' : ''}`}>
          <span className="title-main">Ideas Worth</span>
          <span className="title-highlight">Spreading</span>
        </h1>
        
        <p className={`hero-subtitle ${isVisible ? 'animate-in delay-2' : ''}`}>
          Join us for an extraordinary journey of innovation, inspiration, and transformation 
          at the most anticipated TEDx event in Central India.
        </p>
        
        <div className={`hero-stats ${isVisible ? 'animate-in delay-3' : ''}`}>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Speakers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Attendees</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8</div>
            <div className="stat-label">Hours</div>
          </div>
        </div>
        
        <div className={`hero-actions ${isVisible ? 'animate-in delay-4' : ''}`}>
          <button className="btn btn-primary" onClick={() => setTicketModalOpen(true)}>
            <i className="fas fa-ticket-alt"></i>
            Book Tickets
          </button>
          <button className="btn btn-secondary" onClick={() => setActivePage('speakers')}>
            <i className="fas fa-users"></i>
            Meet Speakers
          </button>
          <button className="btn btn-outline" onClick={() => setActivePage('about')}>
            <i className="fas fa-arrow-right"></i>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

// Enhanced About Page
const AboutPage = () => {
  return (
    <div className="modern-page about-page">
      <div className="page-header">
        <h1>About TEDx NMIMS</h1>
        <p>Discover the vision behind our transformative event</p>
      </div>
      
      <div className="content-grid">
        <div className="content-main">
          <div className="text-section">
            <h2>Our Mission</h2>
            <p>
              TEDx NMIMS Indore is an independently organized TED event that brings together 
              brilliant minds, innovative ideas, and passionate storytellers to create a 
              platform for intellectual exchange and inspiration.
            </p>
            
            <h3>What Makes Us Special</h3>
            <div className="feature-grid">
              <div className="feature-card">
                <i className="fas fa-lightbulb"></i>
                <h4>Innovation Hub</h4>
                <p>Connecting revolutionary ideas with curious minds</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-users"></i>
                <h4>Community Driven</h4>
                <p>Building bridges between academia and industry</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-globe"></i>
                <h4>Global Impact</h4>
                <p>Local stories with worldwide relevance</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="content-sidebar">
          <div className="info-card">
            <h3>Event Details</h3>
            <div className="detail-item">
              <i className="fas fa-calendar"></i>
              <span>March 15, 2025</span>
            </div>
            <div className="detail-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>NMIMS Indore Campus</span>
            </div>
            <div className="detail-item">
              <i className="fas fa-clock"></i>
              <span>9:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Speakers Page
const SpeakersPage = () => {
  const speakers = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      title: "AI Research Pioneer", 
      topic: "The Future of Human-AI Collaboration",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b000?w=400"
    },
    {
      id: 2,
      name: "Arjun Malhotra",
      title: "Social Entrepreneur",
      topic: "Building Sustainable Communities",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    },
    {
      id: 3,
      name: "Kavya Reddy",
      title: "Climate Activist",
      topic: "Youth Leading Climate Action",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    }
  ];

  return (
    <div className="modern-page speakers-page">
      <div className="page-header">
        <h1>Our Speakers</h1>
        <p>Meet the extraordinary minds shaping our future</p>
      </div>
      
      <div className="speakers-grid">
        {speakers.map(speaker => (
          <div key={speaker.id} className="speaker-card modern-card">
            <div className="speaker-image">
              <img src={speaker.image} alt={speaker.name} />
              <div className="speaker-overlay">
                <button className="speaker-cta">
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
            <div className="speaker-content">
              <h3>{speaker.name}</h3>
              <h4>{speaker.title}</h4>
              <p>{speaker.topic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Enhanced Team Page, Schedule Page, and Contact Page would follow similar patterns...

// Main App Component
const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ticketModalOpen, setTicketModalOpen] = useState(false);

  useEffect(() => {
    // Initialize enhanced space particles
    if (window.particlesJS) {
      particlesJS('particles-js', {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: ["#ff0000", "#dc2626", "#ef4444", "#991b1b"] },
          shape: { type: ["circle", "triangle"] },
          opacity: { 
            value: 0.4, 
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.1 }
          },
          size: { 
            value: 3, 
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1 }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ff0000",
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: true, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }
  }, [activePage]);

  const renderPage = () => {
    switch(activePage) {
      case 'home':
        return <HomePage setTicketModalOpen={setTicketModalOpen} setActivePage={setActivePage} />;
      case 'about':
        return <AboutPage />;
      case 'speakers':
        return <SpeakersPage />;
      case 'team':
        return <TeamSection />;
      case 'schedule':
        return <ScheduleSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomePage setTicketModalOpen={setTicketModalOpen} setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="App modern-app">
      <div id="particles-js"></div>
      <ModernNavigation 
        activePage={activePage}
        setActivePage={setActivePage}
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <PageContainer activePage={activePage}>
        {renderPage()}
      </PageContainer>
      <TicketBookingModal isOpen={ticketModalOpen} onClose={() => setTicketModalOpen(false)} />
      <LiveChat />
    </div>
  );
};

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));

console.log('TEDx NMIMS React website loaded successfully!');