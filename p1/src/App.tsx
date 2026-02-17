import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeFeature, setActiveFeature] = useState(0)
  
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const features = [
    { num: '01', title: 'Collaboration', subtitle: 'Human + AI', desc: 'Work alongside intelligent agents in real-time. Every keystroke synchronized. Every thought amplified.' },
    { num: '02', title: 'Architecture', subtitle: 'API-First', desc: 'REST. GraphQL. WebSocket. Connect everything. Build anything. Scale infinitely.' },
    { num: '03', title: 'Security', subtitle: 'Enterprise-Grade', desc: 'SOC 2 Type II. Zero-trust architecture. Your data, your rules. Always encrypted.' },
    { num: '04', title: 'Analytics', subtitle: 'Deep Insights', desc: 'Measure what matters. Optimize what works. Visualize the invisible.' },
    { num: '05', title: 'Scale', subtitle: 'Infinite', desc: 'From garage to global. 5 users or 50,000. Same infrastructure. Same speed.' },
    { num: '06', title: 'Automation', subtitle: 'Intelligent', desc: 'Set triggers. Define flows. Let agents handle the routine. You focus on the remarkable.' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <div ref={containerRef} className="app">
      {/* Grain Overlay */}
      <div className="grain" />
      
      {/* Decorative Lines */}
      <div className="deco-lines">
        <div className="deco-line" />
        <div className="deco-line" />
        <div className="deco-line" />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-inner">
          <a href="#" className="logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">OpenOcean</span>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
          </div>
          <motion.button 
            className="nav-cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Request Access
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero */}
      <motion.section className="hero" style={{ y, opacity }}>
        <div className="hero-bg">
          <div className="hero-gradient" />
          <div className="hero-grid" />
        </div>
        
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="badge-dot" />
            <span>Now Live on MacOS</span>
          </motion.div>

          <motion.h1 
            className="hero-headline"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="line-1">Where</span>
            <span className="line-2">Humans</span>
            <span className="line-3">& Agents</span>
            <span className="line-4">Create</span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            The unified workspace for human-AI collaboration. Build ambitious projects 
            without the infrastructure overhead. Scale without limits.
          </motion.p>

          <motion.div 
            className="hero-ctas"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Building</span>
              <span className="btn-arrow">→</span>
            </motion.button>
            <button className="btn-secondary">Learn More</button>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div 
            className="visual-frame"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="frame-border" />
            <div className="frame-content">
              <div className="code-line"><span className="code-comment">// AI Agent initializing</span></div>
              <div className="code-line"><span className="code-keyword">const</span> agent = <span className="code-func">createAgent</span>({'{'})</div>
              <div className="code-line indent"><span className="code-prop">intent</span>: <span className="code-string">"collaborate"</span>,</div>
              <div className="code-line indent"><span className="code-prop">context</span>: <span className="code-string">"workspace"</span></div>
              <div className="code-line">{'}'})</div>
              <div className="code-cursor" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats */}
      <section className="stats">
        <div className="stats-grid">
          {[
            { value: '50K+', label: 'Active Teams' },
            { value: '2M+', label: 'Hours Saved' },
            { value: '99.9%', label: 'Uptime' },
            { value: '150+', label: 'Countries' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="features-header">
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Capabilities
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built for the<br />Future of Work
          </motion.h2>
        </div>

        <div className="features-showcase">
          <div className="feature-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className="feature-content"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <span className="feature-num">{features[activeFeature].num}</span>
                <h3 className="feature-title">{features[activeFeature].title}</h3>
                <span className="feature-subtitle">{features[activeFeature].subtitle}</span>
                <p className="feature-desc">{features[activeFeature].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="feature-nav">
            {features.map((f, i) => (
              <button
                key={i}
                className={`feature-nav-item ${i === activeFeature ? 'active' : ''}`}
                onClick={() => setActiveFeature(i)}
              >
                <span className="nav-num">{f.num}</span>
                <span className="nav-label">{f.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process" id="process">
        <div className="process-header">
          <span className="section-tag">Process</span>
          <h2 className="section-title">Three Steps to<br />Transform Your Workflow</h2>
        </div>

        <div className="process-steps">
          {[
            { num: '01', title: 'Connect', desc: 'Link your repositories. Import existing projects in seconds.' },
            { num: '02', title: 'Configure', desc: 'Deploy AI agents. Define their capabilities and boundaries.' },
            { num: '03', title: 'Collaborate', desc: 'Work alongside your agents. Watch productivity transform.' }
          ].map((step, i) => (
            <motion.div 
              key={i}
              className="process-step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="step-header">
                <span className="step-num">{step.num}</span>
                <div className="step-line" />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="pricing">
        <div className="cta-content">
          <motion.h2 
            className="cta-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to<br />Transform?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of teams building the future.
          </motion.p>
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button className="btn-primary large">
              <span>Start Free Trial</span>
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn-secondary">Talk to Sales</button>
          </motion.div>
        </div>
        <div className="cta-visual">
          <div className="cta-shape" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="logo-icon">◈</span>
            <span className="logo-text">OpenOcean</span>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Documentation</a>
            <a href="#">Blog</a>
          </div>
          <span className="footer-copy">© 2024 OpenOcean</span>
        </div>
      </footer>
    </div>
  )
}

export default App