import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Starfield Animation
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const context = ctx // Store in local variable to avoid null checks

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const stars: Array<{
      x: number
      y: number
      size: number
      baseOpacity: number
      twinkleSpeed: number
      twinklePhase: number
      color: string
    }> = []
    const starCount = 200

    for (let i = 0; i < starCount; i++) {
      const rand = Math.random()
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.8,
        size: Math.random() * 1.5 + 0.5,
        baseOpacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
        color: rand > 0.8 ? 'cyan' : rand > 0.6 ? 'amber' : 'white'
      })
    }

    function animate() {
      context.clearRect(0, 0, width, height)
      
      stars.forEach(star => {
        star.twinklePhase += star.twinkleSpeed
        const currentOpacity = star.baseOpacity * (0.4 + 0.6 * Math.abs(Math.sin(star.twinklePhase)))
        
        context.beginPath()
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        
        if (star.color === 'cyan') {
          context.fillStyle = `rgba(34, 211, 238, ${currentOpacity * 0.6})`
        } else if (star.color === 'amber') {
          context.fillStyle = `rgba(201, 162, 39, ${currentOpacity * 0.6})`
        } else {
          context.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
        }
        context.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <nav className="nav">
        <div className="logo">OpenOcean</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <button className="nav-cta">Request Access</button>
      </nav>

      <section className="hero">
        <canvas ref={canvasRef} id="starfield"></canvas>
        
        <div className="orbital-system">
          <div className="orbital-ring-1"></div>
          <div className="orbital-ring-2"></div>
          <div className="orbital-ring-3"></div>
        </div>

        <div className="horizon-glow"></div>
        <div className="terrain"></div>

        <div className="hero-content">
          <div className="announcement">
            <div className="badge-dot"></div>
            <span className="badge-text">Now available for <span>MacOS</span></span>
          </div>

          <h1 className="headline">
            <span className="headline-line">Where Humans</span>
            <span className="headline-line muted">&amp; Agents</span>
            <span className="headline-line">Create</span>
          </h1>

          <p className="hero-subtitle">
            The unified workspace for human-AI collaboration. Build, iterate, and scale your most ambitious projects.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary">Start Building</button>
            <button className="btn btn-secondary">Explore Platform</button>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="section-header">
          <div className="section-label">Capabilities</div>
          <h2 className="section-title">Built for the Future</h2>
        </div>

        <div className="features-grid">
          {[
            { num: '01', title: 'Real-time Collaboration', desc: 'Work alongside AI agents in a shared workspace. See changes happen instantly as humans and agents collaborate.' },
            { num: '02', title: 'API-First Architecture', desc: 'Powerful REST and GraphQL APIs let you embed AI agents into any workflow seamlessly.' },
            { num: '03', title: 'Enterprise Security', desc: 'SOC 2 Type II certified. End-to-end encryption, SSO, and granular access controls.' },
            { num: '04', title: 'Advanced Analytics', desc: 'Track agent performance and optimize workflows with detailed insights and metrics.' },
            { num: '05', title: 'Infinite Scalability', desc: 'From startup to enterprise. Scale from 5 to 5000 users without changing architecture.' },
            { num: '06', title: 'Smart Automation', desc: 'Define complex workflows with our visual builder. Set up triggers that run autonomously.' }
          ].map((feature, i) => (
            <div key={i} className="feature-card">
              <div className="feature-number">{feature.num}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        {[
          { num: '50K+', label: 'Active Teams' },
          { num: '2M+', label: 'Hours Saved' },
          { num: '99.9%', label: 'Uptime SLA' },
          { num: '150+', label: 'Countries' }
        ].map((stat, i) => (
          <div key={i} className="stat-item">
            <div className="stat-number">{stat.num}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="section-header">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">From Setup to Scale</h2>
        </div>

        <div className="steps">
          {[
            { num: '01', title: 'Connect Your Stack', desc: 'Link your repositories. Import your codebase in seconds.' },
            { num: '02', title: 'Add AI Agents', desc: 'Deploy pre-built agents or create custom ones.' },
            { num: '03', title: 'Start Collaborating', desc: 'Invite your team. Watch productivity soar.' }
          ].map((step, i) => (
            <div key={i} className="step">
              <div className="step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" id="pricing">
        <div className="cta-container">
          <h2 className="cta-title">Ready to <span>Transform</span>?</h2>
          <p>Join thousands of teams already building with OpenOcean.</p>
          <div className="hero-cta">
            <button className="btn btn-primary">Start Free Trial</button>
            <button className="btn btn-secondary">Talk to Sales</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">OpenOcean</div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Docs</a>
            <a href="#">Blog</a>
          </div>
          <div>2024 OpenOcean</div>
        </div>
      </footer>
    </>
  )
}

export default App