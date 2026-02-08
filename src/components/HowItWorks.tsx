const steps = [
  {
    step: '01',
    title: 'Paste Your URL',
    description: 'Copy your long URL and paste it into the input field. We support all valid HTTP and HTTPS URLs from any website.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Click Shorten',
    description: 'Hit the "Shorten URL" button. We\'ll use real API services like TinyURL to generate a genuine, permanent short link for you.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Copy & Share',
    description: 'Your real short link is ready! Copy it with one click and share it anywhere — social media, emails, texts, or anywhere else.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24" aria-label="How it works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Three Simple <span className="gradient-text">Steps</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Shorten any URL in seconds with real, working short links. No signup required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary-200 via-accent-300 to-pink-200" />

          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step Circle */}
              <div className="relative inline-flex mb-6">
                <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-100 group-hover:border-primary-300 transition-colors">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-600 text-white shadow-xl shadow-primary-500/25 group-hover:shadow-2xl group-hover:shadow-primary-500/40 transition-all group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>
                {/* Step Number */}
                <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-primary-500 text-xs font-bold text-primary-600 shadow-lg">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
