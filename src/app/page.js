'use client'

import { useState } from 'react'

// Navigation
function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffcf7]/90 backdrop-blur-md border-b border-ink-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-semibold text-ink-900">
          Menus<span className="text-brand-500">Online</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-ink-600 hover:text-ink-900 transition-colors">Why Us</a>
          <a href="#packages" className="text-ink-600 hover:text-ink-900 transition-colors">Packages</a>
          <a href="#how-it-works" className="text-ink-600 hover:text-ink-900 transition-colors">How It Works</a>
          <a href="#faq" className="text-ink-600 hover:text-ink-900 transition-colors">FAQ</a>
          <a href="#contact" className="btn-primary text-sm !px-6 !py-3">Get Started</a>
        </div>
        
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-ink-100 px-6 py-4 space-y-4">
          <a href="#problem" className="block text-ink-600">Why Us</a>
          <a href="#packages" className="block text-ink-600">Packages</a>
          <a href="#how-it-works" className="block text-ink-600">How It Works</a>
          <a href="#faq" className="block text-ink-600">FAQ</a>
          <a href="#contact" className="btn-primary inline-block text-sm !px-6 !py-3">Get Started</a>
        </div>
      )}
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 noise-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-40" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up opacity-0">
            Based in Birmingham
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-ink-900 leading-tight mb-6 animate-fade-up opacity-0 delay-100">
            Stop giving 30% of every order to
            <span className="text-brand-500"> Just Eat</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-ink-600 mb-8 leading-relaxed animate-fade-up opacity-0 delay-200">
            Get your own online ordering website. Fixed monthly fee. 
            No commission. Your customers, your profits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-300">
            <a href="#contact" className="btn-primary text-center">
              Get a Free Quote
            </a>
            <a href="#packages" className="btn-secondary text-center">
              See Packages
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-ink-500 animate-fade-up opacity-0 delay-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No setup fees on Starter</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Live in 2 weeks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Problem Section
function Problem() {
  const painPoints = [
    { icon: '💸', title: 'Commission eating profits', desc: 'Paying 15-35% on every order adds up fast' },
    { icon: '📱', title: 'Missed phone calls', desc: 'Busy kitchen means missed orders' },
    { icon: '😤', title: 'Menu changes are a nightmare', desc: 'Chasing platforms to update a single price' },
    { icon: '🔍', title: 'Invisible on Google', desc: 'Customers search but find your competitors' },
  ]
  
  return (
    <section id="problem" className="py-24 bg-ink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Sound familiar?
          </h2>
          <p className="text-xl text-ink-300 max-w-2xl mx-auto">
            Running a takeaway is hard enough without these headaches
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((point, i) => (
            <div 
              key={i}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{point.icon}</span>
              <h3 className="font-display text-2xl font-medium mb-2">{point.title}</h3>
              <p className="text-ink-300">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Solution Section
function Solution() {
  const benefits = [
    { title: 'Your own website', desc: 'Professional site with your branding, your domain, your rules' },
    { title: 'Online ordering built in', desc: 'Customers order directly. Card payments via Stripe. No middleman.' },
    { title: 'SMS & email confirmations', desc: 'Automatic notifications keep customers informed' },
    { title: 'Google-friendly', desc: 'Built for SEO so locals find you when they search' },
    { title: 'Easy menu updates', desc: 'Change prices, add items, mark things sold out in seconds' },
    { title: 'We handle everything', desc: 'Hosting, updates, support. You focus on the food.' },
  ]
  
  return (
    <section className="py-24 relative noise-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="squiggle w-24 mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 mb-4">
            There&apos;s a better way
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            One fixed monthly fee. No commission. Ever.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-ink-100 card-hover"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium text-ink-900 mb-2">{benefit.title}</h3>
              <p className="text-ink-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Packages Section
function Packages() {
  const packages = [
    {
      name: 'Starter',
      price: '49',
      setup: '0',
      desc: 'Get online with the basics',
      features: [
        'Up to 30 menu items',
        'Mobile-friendly website',
        'Click-to-call button',
        'Google Maps integration',
        'Basic SEO setup',
        'WhatsApp support',
      ],
      highlighted: false,
    },
    {
      name: 'Plus',
      price: '99',
      setup: '299',
      desc: 'Online ordering included',
      features: [
        'Up to 75 menu items',
        'Online ordering & checkout',
        'Stripe card payments',
        'Order notifications (SMS + email)',
        'Click-and-collect slots',
        'Admin panel for menu updates',
        'Google Analytics',
        'Priority support',
      ],
      highlighted: true,
    },
    {
      name: 'Pro',
      price: '149',
      setup: '499',
      desc: 'The full package',
      features: [
        'Unlimited menu items',
        'Everything in Plus',
        'Delivery zone management',
        'Promo codes & offers',
        'Loyalty scheme',
        'Newsletter signup',
        'Staff logins',
        'Monthly strategy call',
      ],
      highlighted: false,
    },
  ]
  
  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            No hidden fees. No commission. Just a flat monthly rate.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div 
              key={i}
              className={`relative rounded-3xl p-8 ${
                pkg.highlighted 
                  ? 'bg-ink-900 text-white shadow-2xl scale-105' 
                  : 'bg-white border border-ink-200'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-display text-2xl font-semibold mb-2">{pkg.name}</h3>
              <p className={pkg.highlighted ? 'text-ink-300' : 'text-ink-600'}>{pkg.desc}</p>
              
              <div className="my-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display font-bold">£{pkg.price}</span>
                  <span className={pkg.highlighted ? 'text-ink-400' : 'text-ink-500'}>/month</span>
                </div>
                {pkg.setup !== '0' && (
                  <p className={`text-sm mt-1 ${pkg.highlighted ? 'text-ink-400' : 'text-ink-500'}`}>
                    + £{pkg.setup} one-time setup
                  </p>
                )}
                {pkg.setup === '0' && (
                  <p className="text-sm mt-1 text-green-500 font-medium">
                    No setup fee!
                  </p>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.highlighted ? 'text-brand-400' : 'text-brand-500'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={pkg.highlighted ? 'text-ink-200' : 'text-ink-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact"
                className={`block text-center py-4 rounded-full font-medium transition-all duration-300 ${
                  pkg.highlighted 
                    ? 'bg-brand-500 text-white hover:bg-brand-600' 
                    : 'bg-ink-900 text-white hover:bg-ink-800'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-8 text-ink-500">
          All prices exclude VAT. Minimum 12 month contract.
        </p>
      </div>
    </section>
  )
}

// How It Works
function HowItWorks() {
  const steps = [
    { num: '01', title: 'We chat', desc: 'Quick call or visit to understand your takeaway and what you need' },
    { num: '02', title: 'We build', desc: 'We create your site with your menu, branding, and photos' },
    { num: '03', title: 'You review', desc: 'Check everything looks right. We tweak until you are happy.' },
    { num: '04', title: 'Go live', desc: 'Your site goes live. Start taking orders directly.' },
  ]
  
  return (
    <section id="how-it-works" className="py-24 relative noise-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto">
            From first chat to live site in about 2 weeks
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <span className="font-display text-7xl font-bold text-brand-200">{step.num}</span>
              <h3 className="font-display text-2xl font-medium text-ink-900 mt-2 mb-2">{step.title}</h3>
              <p className="text-ink-600">{step.desc}</p>
              
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full">
                  <svg className="w-full h-4 text-brand-300" viewBox="0 0 100 10">
                    <path d="M0 5 H90 M85 0 L95 5 L85 10" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  
  const faqs = [
    {
      q: 'What if I already use Just Eat or Deliveroo?',
      a: 'You can keep using them alongside your own site. Many of our customers use both but push regulars towards their own site to save on fees. Over time, you will build up direct customers who order from you without the middleman.',
    },
    {
      q: 'Do I need to be technical?',
      a: 'Not at all. We handle everything: setup, hosting, updates. If you can use WhatsApp, you can manage your menu. We provide a simple admin panel and are always on hand to help.',
    },
    {
      q: 'How do card payments work?',
      a: 'We set up Stripe for you. Money goes directly into your bank account, usually within 2-3 days. Stripe charges about 1.4% + 20p per transaction, which is much less than platform fees.',
    },
    {
      q: 'What about delivery drivers?',
      a: 'We build the ordering system. You handle delivery as you do now. Some customers use their own drivers, others use services like Stuart or Uber Direct for on-demand drivers.',
    },
    {
      q: 'Can I update my menu myself?',
      a: 'Yes. The Plus and Pro packages include an admin panel where you can change prices, add items, mark things as sold out, and update photos. Takes seconds.',
    },
    {
      q: 'What happens if something breaks?',
      a: 'We monitor your site and fix issues fast. WhatsApp us anytime. Serious issues get sorted the same day. We have been doing this for years and problems are rare.',
    },
    {
      q: 'Do you only work in Birmingham?',
      a: 'We are based in Birmingham and focus on the West Midlands, but we can work with takeaways anywhere in the UK. The initial chat can be a video call if you are not local.',
    },
  ]
  
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 mb-4">
            Questions?
          </h2>
          <p className="text-xl text-ink-600">
            Here are the ones we get asked most
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="border border-ink-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-ink-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-ink-900">{faq.q}</span>
                <svg 
                  className={`w-5 h-5 text-ink-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === i && (
                <div className="px-6 pb-5 text-ink-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xjggkwoq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }
  
  return (
    <section id="contact" className="py-24 bg-ink-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              Ready to keep more of your profits?
            </h2>
            <p className="text-xl text-ink-300 mb-8">
              Drop us a message and we will get back to you within 24 hours. No pressure, just a chat about what would work for your takeaway.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-ink-400 text-sm">Call or WhatsApp</p>
                  <p className="font-medium">07XXX XXXXXX</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-ink-400 text-sm">Email</p>
                  <p className="font-medium">hello@onlinemenus.co.uk</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 text-ink-900">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">Message sent!</h3>
                <p className="text-ink-600">We will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_replyto" value="hello@onlinemenus.co.uk" />
                <input type="hidden" name="_subject" value="New enquiry from OnlineMenus website" />
                <div>
                  <label className="block text-sm font-medium mb-2">Your name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="Ali Khan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Takeaway name</label>
                  <input
                    type="text"
                    name="takeaway"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="Best Kebab House"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone or email</label>
                  <input
                    type="text"
                    name="contact"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="07123 456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your takeaway</label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                    placeholder="What food do you serve? Any specific needs?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary disabled:opacity-50"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
                
                <p className="text-xs text-ink-500 text-center">
                  We will never share your details. Privacy policy applies.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-ink-900 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-display text-2xl font-semibold">
              Menus<span className="text-brand-500">Online</span>
            </span>
            <p className="text-ink-400 mt-1">Websites for takeaways in Birmingham</p>
          </div>
          
          <div className="flex gap-8 text-ink-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-ink-500 text-sm">
          © {new Date().getFullYear()} OnlineMenus. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Packages />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
