import { Link } from 'react-router-dom';

const quickLinks = [
  { label: '홈', to: '/' },
  { label: '시장조사', to: '/market-research' },
  { label: '경쟁사 분석', to: '/competitor-analysis' },
  { label: '실행 체크리스트', to: '/checklist' },
  { label: '더미헤어 케이스', to: '/dummy-hair-case' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-sm">
                K
              </div>
              <span className="font-bold text-white">K-Marketer 실전 사이트</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              디지털 마케터를 위한 실전 도구함입니다.<br />
              시장조사, 경쟁사 분석, 실행 체크리스트, 케이스 학습을 한 곳에서 활용하세요.
            </p>
            <p className="text-gray-500 text-xs">
              Target domain: K-Marketer.kr
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">빠른 링크</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy relation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">아카데미와의 관계</h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <span className="text-purple-400 text-xs">📚</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">K-마케터 아카데미</p>
                  <p className="text-gray-500 text-xs">마케팅을 배우고 진단받는 곳</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <span className="text-blue-400 text-xs">⚡</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">K-Marketer 실전 사이트</p>
                  <p className="text-gray-500 text-xs">배운 것을 바로 적용하는 곳</p>
                </div>
              </div>
              <a
                href="https://kmarketer-d4wf7pgz.manus.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200 mt-2"
              >
                아카데미 방문하기 →
              </a>
            </div>
          </div>
        </div>

        <div className="glow-line my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
          <p>© 2026 K-Marketer 실전 사이트. 마케터를 위한 실전 도구함.</p>
          <p>K-마케터 아카데미와 함께하는 실전 플랫폼</p>
        </div>
      </div>
    </footer>
  );
}
