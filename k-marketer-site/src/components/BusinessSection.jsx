import Badge from './Badge';

const businesses = [
  {
    icon: '📚',
    title: '마케팅 교육',
    badge: '교육',
    badgeVariant: 'blue',
    desc: '소상공인과 마케터를 위한 실전 디지털 마케팅 교육 프로그램을 운영합니다.',
    items: ['네이버 마케팅', 'SNS 마케팅', 'AI 콘텐츠 자동화', '광고 운영'],
  },
  {
    icon: '🎯',
    title: '마케팅 컨설팅',
    badge: '컨설팅',
    badgeVariant: 'purple',
    desc: '개인 비즈니스와 중소기업의 디지털 마케팅 전략을 수립하고 실행을 지원합니다.',
    items: ['시장 분석', '경쟁사 분석', '채널 전략', 'KPI 설계'],
  },
  {
    icon: '✍️',
    title: '콘텐츠 제작',
    badge: '제작',
    badgeVariant: 'cyan',
    desc: '브랜드 스토리텔링과 채널별 최적화된 콘텐츠를 기획하고 제작합니다.',
    items: ['블로그 콘텐츠', '인스타그램 피드', '유튜브 스크립트', '광고 카피'],
  },
  {
    icon: '⚡',
    title: '광고 대행',
    badge: '광고',
    badgeVariant: 'orange',
    desc: '네이버, 구글, 메타 광고를 데이터 기반으로 운영하고 ROI를 최대화합니다.',
    items: ['네이버 광고', '구글 애즈', '메타 광고', '성과 분석'],
  },
];

const variantBadgeMap = {
  blue: 'text-blue-400 bg-blue-500/10 border border-blue-500/30',
  purple: 'text-purple-400 bg-purple-500/10 border border-purple-500/30',
  cyan: 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30',
  orange: 'text-orange-400 bg-orange-500/10 border border-orange-500/30',
};

export default function BusinessSection() {
  return (
    <section id="business" className="py-24 border-t border-dark-border">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Badge variant="purple" className="mb-4">Business</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
            <span className="gradient-text">4가지 핵심 사업</span> 영역
          </h2>
          <p className="text-gray-400">교육부터 실행까지 — 마케팅의 모든 단계를 함께합니다.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {businesses.map((b) => (
            <div key={b.title} className="card-dark card-hover flex flex-col">
              <div className="text-3xl mb-4">{b.icon}</div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full w-fit mb-3 ${variantBadgeMap[b.badgeVariant]}`}>
                {b.badge}
              </span>
              <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{b.desc}</p>
              <ul className="space-y-1">
                {b.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-500 text-xs">
                    <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
