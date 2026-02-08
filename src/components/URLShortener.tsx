import { useState, useCallback } from 'react';

interface ShortenedURL {
  id: string;
  originalUrl: string;
  shortUrl: string;
  shortCode: string;
  createdAt: Date;
  clicks: number;
}

function generateShortCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function isValidUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

export function URLShortener() {
  const [url, setUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedURL[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleShorten = useCallback(async () => {
    setError('');

    if (!url.trim()) {
      setError('Please enter a URL to shorten');
      return;
    }

    let processedUrl = url.trim();
    if (!processedUrl.startsWith('http://') && !processedUrl.startsWith('https://')) {
      processedUrl = 'https://' + processedUrl;
    }

    if (!isValidUrl(processedUrl)) {
      setError('Please enter a valid URL (e.g., https://example.com)');
      return;
    }

    const trimmedAlias = customAlias.trim();

    if (trimmedAlias && !/^[a-zA-Z0-9_-]+$/.test(trimmedAlias)) {
      setError('Custom alias can only contain letters, numbers, hyphens, and underscores');
      return;
    }

    if (trimmedAlias && trimmedAlias.length < 3) {
      setError('Custom alias must be at least 3 characters long');
      return;
    }

    if (trimmedAlias && shortenedUrls.some(u => u.shortCode === trimmedAlias)) {
      setError('This custom alias is already taken. Try a different one.');
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 400));

    const shortCode = trimmedAlias || generateShortCode();
    const newUrl: ShortenedURL = {
      id: Date.now().toString() + Math.random().toString(36).slice(2),
      originalUrl: processedUrl,
      shortUrl: `snplnk.co/${shortCode}`,
      shortCode,
      createdAt: new Date(),
      clicks: Math.floor(Math.random() * 50),
    };

    setShortenedUrls(prev => [newUrl, ...prev]);
    setUrl('');
    setCustomAlias('');
    setIsLoading(false);
    setShowAdvanced(false);
  }, [url, customAlias, shortenedUrls]);

  const handleCopy = useCallback(async (shortUrl: string, id: string) => {
    const fullUrl = `https://${shortUrl}`;
    try {
      await navigator.clipboard.writeText(fullUrl);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = fullUrl;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(id);
    setTimeout(() => setCopied(null), 2500);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setShortenedUrls(prev => prev.filter(u => u.id !== id));
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleShorten();
    }
  };

  return (
    <section id="shortener" className="relative py-20" aria-label="URL Shortener Tool">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-primary-50/50 to-white" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Shorten Your <span className="gradient-text">URL</span>
          </h2>
          <p className="mt-3 text-gray-600 text-lg">Paste your long URL below and get a short link instantly</p>
        </div>

        {/* Main Input Card */}
        <div className="relative rounded-3xl bg-white shadow-2xl shadow-gray-200/60 border border-gray-100 p-6 sm:p-8">
          {/* Decorative gradient border top */}
          <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-pink-500 rounded-full" />

          <div className="space-y-4">
            {/* URL Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <input
                type="url"
                value={url}
                onChange={(e) => { setUrl(e.target.value); setError(''); }}
                onKeyDown={handleKeyDown}
                placeholder="Paste your long URL here... (e.g., https://example.com/very/long/url)"
                className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50/50 pl-12 pr-4 py-4 text-base text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-500/10 transition-all"
                aria-label="Enter URL to shorten"
                disabled={isLoading}
              />
            </div>

            {/* Advanced Options Toggle */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors"
              type="button"
            >
              <svg className={`h-4 w-4 transition-transform duration-200 ${showAdvanced ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              Custom Alias (Optional)
            </button>

            {/* Custom Alias Input */}
            {showAdvanced && (
              <div className="animate-slide-up">
                <div className="flex items-center rounded-2xl border-2 border-gray-200 bg-gray-50/50 overflow-hidden focus-within:border-primary-500 focus-within:ring-4 focus-within:ring-primary-500/10 transition-all">
                  <span className="pl-4 pr-2 text-sm text-gray-400 whitespace-nowrap select-none">snplnk.co/</span>
                  <input
                    type="text"
                    value={customAlias}
                    onChange={(e) => { setCustomAlias(e.target.value); setError(''); }}
                    onKeyDown={handleKeyDown}
                    placeholder="your-custom-alias"
                    className="w-full bg-transparent py-3.5 pr-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none"
                    aria-label="Custom alias"
                    maxLength={30}
                    disabled={isLoading}
                  />
                </div>
                <p className="mt-1.5 pl-1 text-xs text-gray-400">Min 3 characters. Letters, numbers, hyphens, and underscores only.</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 animate-slide-up" role="alert">
                <svg className="h-5 w-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Shorten Button */}
            <button
              onClick={handleShorten}
              disabled={isLoading}
              type="button"
              className="w-full rounded-2xl bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Shortening...
                </>
              ) : (
                <>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  Shorten URL
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {shortenedUrls.length > 0 && (
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Your Shortened Links ({shortenedUrls.length})
              </h3>
              {shortenedUrls.length > 1 && (
                <button
                  onClick={() => setShortenedUrls([])}
                  className="text-xs font-medium text-gray-400 hover:text-red-500 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            {shortenedUrls.map((item, index) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white shadow-lg shadow-gray-100 border border-gray-100 p-5 animate-slide-up hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Short URL */}
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 flex-shrink-0">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                        </svg>
                      </div>
                      <span className="text-base font-bold text-primary-600 truncate">
                        {item.shortUrl}
                      </span>
                    </div>
                    {/* Original URL */}
                    <p className="mt-1.5 text-sm text-gray-400 truncate pl-10">
                      {item.originalUrl}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pl-10 sm:pl-0 flex-shrink-0">
                    <button
                      onClick={() => handleCopy(item.shortUrl, item.id)}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                        copied === item.id
                          ? 'bg-green-50 text-green-600 border border-green-200'
                          : 'bg-primary-50 text-primary-600 border border-primary-200 hover:bg-primary-100'
                      }`}
                    >
                      {copied === item.id ? (
                        <>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 border border-transparent hover:border-red-200 transition-all"
                      aria-label={`Delete short link for ${item.originalUrl}`}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
