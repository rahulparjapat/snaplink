export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" aria-label="Hero section">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary-100/30 to-accent-400/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 border border-primary-200 px-4 py-1.5 mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Free & Fast URL Shortener</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight animate-slide-up">
            Shorten Your Links,{' '}
            <span className="gradient-text">Amplify Your Reach</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Transform long, unwieldy URLs into clean, shareable short links in seconds.
            Track clicks, analyze performance, and boost your online presence — completely free.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#shortener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/30 transition-all hover:-translate-y-1 active:translate-y-0"
            >
              Shorten URL Now
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-8 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-all hover:-translate-y-0.5"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">10M+</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Links Shortened</p>
            </div>
            <div className="text-center border-x border-gray-200">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">50M+</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Total Clicks</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">99.9%</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
