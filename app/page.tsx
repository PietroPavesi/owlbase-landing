'use client'

import { useState } from 'react'

export default function OwlbaseLanding() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xanbgnpo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          subject: 'New Owlbase Waitlist Signup',
          message: `New waitlist signup from: ${email}`
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Optional: Reset form
        setEmail('')
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error submitting email:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Owly Icon */}
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦉</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Owlbase.ai</span>
          </div>
          <div className="text-sm text-gray-600">Coming Soon</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-8">
            🚀 Building Owly, the AI companion for the future of knowledge work
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Turn expert knowledge into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600"> training guides, process docs & AI-ready context</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Owly uses AI to interview your experts and automatically generate onboarding or training materials, 
            process documentation, and datasets for AI prompt engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToDemo}
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Join the Waitlist
            </button>
            <button 
              onClick={scrollToHowItWorks}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 py-20 bg-gradient-to-r from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Knowledge is walking out the door
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">42%</div>
              <p className="text-gray-600">of domain knowledge exists only in employees&apos; minds</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">10,000</div>
              <p className="text-gray-600">Baby Boomers retire daily, taking decades of expertise with them</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">75%</div>
              <p className="text-gray-600">of companies struggle to implement AI due to lack of structured knowledge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Owly & Outputs */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              See what Owlbase.ai creates for you
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              After a 30-minute conversation with your expert, Owly automatically generates 
              ready-to-use business documents and training materials.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
              <div className="text-amber-600 text-2xl mb-3">📋</div>
              <h3 className="font-semibold text-gray-900 mb-2">Process Documents</h3>
              <p className="text-sm text-gray-600">Step-by-step guides and SOPs</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
              <div className="text-green-600 text-2xl mb-3">🎓</div>
              <h3 className="font-semibold text-gray-900 mb-2">Training Materials</h3>
              <p className="text-sm text-gray-600">Onboarding guides and tutorials</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="text-blue-600 text-2xl mb-3">🗺️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Decision Trees</h3>
              <p className="text-sm text-gray-600">Logic flows and decision guides</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="text-purple-600 text-2xl mb-3">🤖</div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Training Data</h3>
              <p className="text-sm text-gray-600">Structured datasets for AI models</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Owly, your AI interviewer</h3>
              <p className="text-gray-600">Instead of forms and surveys, Owly has natural conversations with your experts</p>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                {/* Owly Character Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-4xl">🦉</span>
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                  <div className="text-sm text-emerald-600 font-semibold mb-1">Owly:</div>
                  <p className="text-gray-700 text-sm">
                    &quot;Hi! Tell me about your customer onboarding process. What&apos;s the first thing you do when a new client signs up?&quot;
                  </p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 ml-8">
                  <div className="text-sm text-amber-700 font-semibold mb-1">Expert:</div>
                  <p className="text-gray-700 text-sm">
                    &quot;First, I personally call them within 24 hours. I&apos;ve learned that if you wait longer, engagement drops by 40%...&quot;
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                  <div className="text-sm text-emerald-600 font-semibold mb-1">Owly:</div>
                  <p className="text-gray-700 text-sm">
                    &quot;That&apos;s fascinating! What specifically do you say in that call to maximize engagement?&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-20 bg-gradient-to-r from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Knowledge transformation, simplified
            </h2>
            <p className="text-xl text-gray-600">
              Three steps to turn your expertise into organizational wisdom
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">30-Minute AI Interview</h3>
              <p className="text-gray-600">
                Owly asks smart questions to understand your expert&apos;s processes, decisions, and know-how.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Auto-Generate Documents</h3>
              <p className="text-gray-600">
                Our AI instantly creates training guides, process docs, and decision trees from the conversation.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Download & Use</h3>
              <p className="text-gray-600">
                Get ready-to-use onboarding materials, SOPs, and training content you can implement immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Waitlist */}
      <section id="demo" className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Be among the first to try Owlbase.ai
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our beta waitlist and shape the future of knowledge work.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                disabled={isSubmitting}
                className="flex-1 px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900 placeholder-gray-500 bg-white disabled:bg-gray-50 disabled:text-gray-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="text-green-800 font-semibold mb-2">Thanks for joining! 🎉</div>
              <p className="text-green-700">We&apos;ll be in touch soon with beta access and updates.</p>
            </div>
          )}
          
          <p className="text-sm text-gray-500 mt-4">
            No spam, ever. We&apos;ll only send updates about Owlbase.ai beta access.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🦉</span>
              </div>
              <span className="text-xl font-bold">Owlbase.ai</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="mailto:hello@owlbase.ai" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2025 Owlbase.ai. Transform expertise into organizational wisdom • Built for the future of knowledge work
          </div>
        </div>
      </footer>
    </div>
  )
}