import { useState } from 'react';

const faqs = [
  {
    question: 'Is SnapLink completely free to use?',
    answer: 'Yes! SnapLink is 100% free to use. You can shorten unlimited URLs without any registration or payment. Our URL shortening service is powered by reliable third-party APIs to ensure your short links always work.',
  },
  {
    question: 'How does the URL shortener work?',
    answer: 'Simply paste your long URL into the input field and click "Shorten URL." Our service connects to trusted URL shortening APIs (like TinyURL) to generate a real, permanent short link. When someone clicks the short link, they are instantly redirected to the original destination.',
  },
  {
    question: 'Are shortened URLs safe and secure?',
    answer: 'Absolutely! All shortened URLs use HTTPS encryption. We use trusted, well-known URL shortening services that scan URLs for malware and phishing threats. Your data privacy is our top priority.',
  },
  {
    question: 'Do shortened links expire?',
    answer: 'No, the short links generated through SnapLink never expire. They are created through reliable services like TinyURL which maintain links permanently. Once created, your shortened URLs will continue to work indefinitely.',
  },
  {
    question: 'Do the shortened links actually work?',
    answer: 'Yes! Unlike some URL shorteners that only generate fake or demo links, SnapLink creates real, functional short links using the TinyURL API. Every link generated is immediately clickable and will redirect to your original URL.',
  },
  {
    question: 'Can I track clicks on my shortened links?',
    answer: 'The short links are generated through TinyURL which provides basic click tracking. For advanced analytics like geographic distribution, referral sources, and device types, we recommend creating a TinyURL account directly.',
  },
  {
    question: 'Is there a limit on how many URLs I can shorten?',
    answer: 'There is no hard limit on the number of URLs you can shorten through SnapLink. However, to prevent abuse, the underlying API services may have rate limits. For typical usage, you can shorten hundreds of URLs without any issues.',
  },
  {
    question: 'What types of URLs can I shorten?',
    answer: 'You can shorten any valid HTTP or HTTPS URL. This includes links to websites, blog posts, social media profiles, YouTube videos, documents, and more. URLs that lead to illegal or harmful content may be rejected by the shortening service.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50/50" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about SnapLink URL shortener.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3" role="list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              role="listitem"
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? 'bg-white border-primary-200 shadow-lg shadow-primary-100/50'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className={`text-base font-semibold pr-4 transition-colors ${openIndex === index ? 'text-primary-700' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`flex h-8 w-8 items-center justify-center rounded-full flex-shrink-0 transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-primary-100 text-primary-600 rotate-180'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
