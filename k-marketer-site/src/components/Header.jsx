import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { label: '홈', to: '/' },
  { label: '시장조사', to: '/market-research' },
  { label: '경쟁사 분석', to: '/competitor-analysis' },
  { label: '실행 체크리스트', to: '/checklist' },
  { label: '더미헤어 케이스', to: '/dummy-hair-case' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-dark-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-sm">
              K
            </div>
            <span className="font-bold text-white text-sm sm:text-base leading-tight">
              K-Marketer<br />
              <span className="text-xs font-normal text-gray-400">실전 사이트</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://kmarketer-d4wf7pgz.manus.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 hover:from-blue-600/30 hover:to-purple-600/30 hover:border-blue-400/50 transition-all duration-200"
            >
              K-마케터 아카데미 ↗
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-dark-border bg-dark-bg/95 backdrop-blur-md">
          <div className="section-container py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://kmarketer-d4wf7pgz.manus.space/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-semibold text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-200"
            >
              K-마케터 아카데미 ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
