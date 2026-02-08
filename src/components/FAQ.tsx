import { useState } from 'react';

const faqs = [
  {
    question: 'Is SnapLink completely free to use?',
    answer: 'Yes! SnapLink is 100% free to use. You can shorten unlimited URLs without any registration or payment. We offer premium features for power users, but our core URL shortening service will always remain free.',
  },
  {
    question: 'How does a URL shortener work?',
    answer: 'A URL shortener takes a long URL and creates a shorter, unique alias that redirects to the original link. When someone clicks the short link, our servers instantly redirect them to the original destination URL. This makes links easier to share on social media, in emails, and in text messages.',
  },
  {
    question: 'Are shortened URLs safe and secure?',
    answer: 'Absolutely! All SnapLink shortened URLs use HTTPS encryption. We automatically scan every URL for malware, phishing, and other security threats before generating a short link. Your data privacy is our top priority.',
  },
  {
    question: 'Do shortened links expire?',
    answer: 'No, SnapLink short links never expire. Once created, your shortened URLs will continue to work indefinitely. You can always access and manage your links from your dashboard.',
  },
  {
    question: 'Can I customize my short URLs?',
    answer: 'Yes! SnapLink allows you to create custom aliases for your short URLs. Instead of a random string, you can use memorable words or phrases like "snplnk.co/my-brand" to make your links more professional and recognizable.',
  },
  {
    question: 'Can I track clicks on my shortened links?',
    answer: 'Yes! SnapLink provides detailed click analytics for all shortened URLs. You can see total clicks, geographic distribution, referral sources, device types, and more. Track your link performance in real-time.',
  },
  {
    question: 'Is there an API available?',
    answer: 'Yes, SnapLink offers a RESTful API for developers who want to integrate URL shortening into their applications. Our API supports bulk URL shortening, custom aliases, and analytics retrieval.',
  },
  {
    question: 'What types of URLs can I shorten?',
    answer: 'You can shorten any valid HTTP or HTTPS URL. This includes links to websites, blog posts, social media profiles, YouTube videos, documents, and more. We do not allow shortening of URLs that lead to illegal or harmful content.',
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
