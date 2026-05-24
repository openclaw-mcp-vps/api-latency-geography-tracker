export default function Home() {
  const faqs = [
    {
      q: 'Which regions do you monitor from?',
      a: 'We monitor from 20+ global nodes including US East/West, EU, Asia-Pacific, South America, and Africa to give you true worldwide coverage.'
    },
    {
      q: 'How often are latency checks performed?',
      a: 'Checks run every 60 seconds per endpoint per region by default. You can configure intervals down to 10 seconds on the Pro plan.'
    },
    {
      q: 'What CDN recommendations do you provide?',
      a: 'Based on your latency heatmap, we suggest optimal CDN PoP placements, caching strategies, and edge routing rules to cut p95 latency.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track API Performance<br />
          <span className="text-[#58a6ff]">by User Location</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Monitor response times across global regions, pinpoint slow zones, and get actionable CDN optimization strategies — all in one dashboard.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-[#8b949e]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3fb950] inline-block"></span>20+ Global Nodes
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#58a6ff] inline-block"></span>Real-time Heatmaps
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d2a8ff] inline-block"></span>CDN Recommendations
          </span>
        </div>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $16/mo
        </a>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              '20+ geographic monitoring nodes',
              'Interactive latency heatmaps',
              'p50 / p95 / p99 breakdowns',
              'CDN optimization recommendations',
              'Slack & email alerting',
              'Up to 25 API endpoints',
              '90-day data retention'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#3fb950] mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} API Latency Geography Tracker. All rights reserved.
      </footer>
    </main>
  )
}
