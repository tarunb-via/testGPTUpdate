import React, { useState } from 'react'

function App() {
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">AcmeProduct</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#how-it-works">How it Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">FAQ</a>
              </li>
            </ul>
            <a href="#pricing" className="btn btn-primary ms-lg-3">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-4">
                A Simple Way to Solve Problems for Your Target Audience
              </h1>
              <p className="lead mb-4 text-muted">
                AcmeProduct helps teams streamline workflows, boost productivity, and achieve better results with minimal effort.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#pricing" className="btn btn-primary btn-lg">
                  Get Started Free
                </a>
                <a href="#features" className="btn btn-outline-secondary btn-lg">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="hero-placeholder text-center py-5 bg-light rounded">
                <p className="text-muted">[Illustration Placeholder]</p>
                <small className="text-muted">Hero image showing product in action</small>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof */}
      <section className="py-5 bg-light">
        <div className="container">
          <p className="text-center text-muted mb-4">Trusted by leading companies worldwide</p>
          <div className="row justify-content-center text-center g-4">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'].map((company, idx) => (
              <div className="col-6 col-md-4 col-lg-2" key={idx}>
                <div className="company-logo p-3 bg-white rounded shadow-sm">
                  <span className="text-muted fw-bold">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Powerful Features</h2>
            <p className="lead text-muted">
              Everything you need to succeed, all in one place
            </p>
          </div>
          <div className="row g-4">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized performance that keeps your workflow smooth and responsive.' },
              { icon: '🔒', title: 'Secure by Default', desc: 'Enterprise-grade security built into every layer of the platform.' },
              { icon: '📊', title: 'Real-time Analytics', desc: 'Get insights instantly with our powerful analytics dashboard.' },
              { icon: '🔄', title: 'Easy Integration', desc: 'Connect with your favorite tools in just a few clicks.' },
              { icon: '📱', title: 'Mobile Ready', desc: 'Access your workspace anywhere, on any device.' },
              { icon: '💬', title: '24/7 Support', desc: 'Our dedicated team is always here to help you succeed.' }
            ].map((feature, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="feature-icon mb-3">
                      <span className="display-4">{feature.icon}</span>
                    </div>
                    <h4 className="card-title fw-bold mb-3">{feature.title}</h4>
                    <p className="card-text text-muted">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">How It Works</h2>
            <p className="lead text-muted">
              Get started in three simple steps
            </p>
          </div>
          <div className="row g-4">
            {[
              { step: '01', title: 'Sign Up', desc: 'Create your free account in under 2 minutes. No credit card required.' },
              { step: '02', title: 'Set Up', desc: 'Customize your workspace and connect your tools. Our wizard guides you through.' },
              { step: '03', title: 'Launch', desc: 'Start using AcmeProduct and see results immediately with onboarding tips.' }
            ].map((item, idx) => (
              <div className="col-md-4 text-center" key={idx}>
                <div className="step-card">
                  <span className="step-number d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-4">
                    {item.step}
                  </span>
                  <h4 className="fw-bold mb-3">{item.title}</h4>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Simple, Transparent Pricing</h2>
            <p className="lead text-muted">
              Choose the plan that fits your needs
            </p>
          </div>
          <div className="row g-4 align-items-start">
            {[
              {
                name: 'Starter',
                price: '$0',
                period: 'forever',
                features: ['Up to 3 projects', '1 team member', 'Basic analytics', 'Email support'],
                popular: false
              },
              {
                name: 'Pro',
                price: '$29',
                period: '/month',
                features: ['Unlimited projects', '5 team members', 'Advanced analytics', 'Priority email support', 'Custom integrations', 'API access'],
                popular: true
              },
              {
                name: 'Team',
                price: '$79',
                period: '/month',
                features: ['Unlimited projects', 'Unlimited team members', 'Advanced analytics', '24/7 phone & email support', 'Custom integrations', 'Full API access', 'SSO & advanced security', 'Dedicated account manager'],
                popular: false
              }
            ].map((plan, idx) => (
              <div className="col-md-4" key={idx}>
                <div className={`card h-100 ${plan.popular ? 'border-primary shadow' : ''}`}>
                  {plan.popular && <div className="card-header bg-primary text-white text-center py-2"><strong>Most Popular</strong></div>}
                  <div className="card-body p-4">
                    <h4 className="card-title fw-bold mb-2">{plan.name}</h4>
                    <div className="mb-4">
                      <span className="display-4 fw-bold">{plan.price}</span>
                      <span className="text-muted">{plan.period}</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, fIdx) => (
                        <li className="mb-2" key={fIdx}>
                          <span className="text-success me-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className={`btn w-100 ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`}>
                      {plan.popular ? 'Get Started' : 'Start Free Trial'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">What Our Customers Say</h2>
            <p className="lead text-muted">
              Join thousands of satisfied users
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Product Manager at TechCorp',
                quote: 'AcmeProduct transformed how our team works. We\'ve seen a 40% increase in productivity since switching.',
                avatar: 'SJ'
              },
              {
                name: 'Michael Chen',
                role: 'Founder at StartupXYZ',
                quote: 'The best investment we\'ve made. Easy to set up, intuitive to use, and the support team is incredible.',
                avatar: 'MC'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Director of Operations',
                quote: 'Finally, a tool that does what it promises. Our workflow is seamless and our team loves it.',
                avatar: 'ER'
              }
            ].map((testimonial, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <p className="card-text text-muted fst-italic mb-4">"{testimonial.quote}"</p>
                    <div className="d-flex align-items-center">
                      <div className="avatar-placeholder bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '48px', height: '48px' }}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h5 className="mb-0 fw-bold">{testimonial.name}</h5>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Frequently Asked Questions</h2>
            <p className="lead text-muted">
              Everything you need to know
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {[
                { q: 'Is there a free trial available?', a: 'Yes! All paid plans come with a 14-day free trial. No credit card required to start.' },
                { q: 'Can I change my plan later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.' },
                { q: 'What payment methods do you accept?', a: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.' },
                { q: 'Is my data secure?', a: 'Yes, we use industry-standard encryption and security protocols. Your data is backed up daily and stored in secure data centers.' },
                { q: 'Do you offer refunds?', a: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, contact us for a full refund.' },
                { q: 'Can I import my data from other tools?', a: 'Yes, we support imports from most popular tools. Our support team can help you migrate your data.' },
                { q: 'Is there a limit on storage?', a: 'Starter plans include 1GB storage. Pro plans include 10GB. Team plans have unlimited storage.' }
              ].map((item, idx) => (
                <div className="accordion-item mb-3" key={idx}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeAccordion === idx ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={activeAccordion === idx}
                    >
                      {item.q}
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeAccordion === idx ? 'show' : ''}`}>
                    <div className="accordion-body text-muted">
                      {item.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4 opacity-90">
            Join thousands of teams already using AcmeProduct to achieve their goals.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href="#pricing" className="btn btn-light btn-lg">
              Start Free Trial
            </a>
            <a href="#" className="btn btn-outline-light btn-lg">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5 className="fw-bold mb-3">AcmeProduct</h5>
              <p className="text-muted">
                A simple way to solve problems for your target audience.
              </p>
              <p className="text-muted mb-0">
                Contact us at <a href="mailto:hello@example.com" className="text-white text-decoration-none">hello@example.com</a>
              </p>
            </div>
            <div className="col-6 col-lg-2">
              <h6 className="fw-bold mb-3">Product</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#features" className="text-muted text-decoration-none">Features</a></li>
                <li className="mb-2"><a href="#pricing" className="text-muted text-decoration-none">Pricing</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Integrations</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Updates</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2">
              <h6 className="fw-bold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Blog</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Careers</a></li>
                <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="fw-bold mb-3">Stay Updated</h6>
              <p className="text-muted mb-3">Subscribe to our newsletter for updates and tips.</p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Email subscription"
                />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </div>
          </div>
          <hr className="my-4 border-secondary" />
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="text-muted mb-0">
                © 2024 AcmeProduct. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <a href="#" className="text-muted text-decoration-none me-3">Privacy Policy</a>
              <a href="#" className="text-muted text-decoration-none me-3">Terms of Service</a>
              <a href="#" className="text-muted text-decoration-none">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App