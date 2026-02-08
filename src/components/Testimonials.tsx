const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Digital Marketer',
    avatar: 'SJ',
    content: 'SnapLink has transformed how I share links across social media. The analytics are incredibly detailed and the custom aliases make my brand look professional.',
    rating: 5,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Michael Chen',
    role: 'Software Developer',
    avatar: 'MC',
    content: 'The API is clean and well-documented. I integrated SnapLink into our app in under 30 minutes. Best URL shortener for developers, hands down.',
    rating: 5,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Creator',
    avatar: 'ER',
    content: "I use SnapLink for all my bio links and affiliate URLs. It's fast, reliable, and the free tier is incredibly generous. Couldn't ask for more!",
    rating: 5,
    color: 'from-orange-500 to-red-500',
  },
];

export function Testimonials() {
  return (
    <section className="py-24" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Loved by <span className="gradient-text">Millions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our users have to say about their experience with SnapLink.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="relative rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-600 text-sm leading-relaxed mb-6">"{testimonial.content}"</blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-white text-sm font-bold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
