import Badge from './Badge';

const audiences = [
  {
    icon: '🏪',
    title: '소상공인 · 자영업자',
    desc: '네이버 플레이스, 블로그, 인스타그램을 통해 더 많은 손님을 불러오고 싶은 분들.',
    tags: ['로컬 마케팅', '리뷰 관리', '콘텐츠 운영'],
    color: 'blue',
  },
  {
    icon: '🚀',
    title: '스타트업 · 예비 창업자',
    desc: '적은 예산으로 최대한의 마케팅 효과를 내고 싶은 창업 초기 팀.',
    tags: ['성장 해킹', '채널 전략', '광고 효율화'],
    color: 'purple',
  },
  {
    icon: '💼',
    title: '마케터 취업 준비생',
    desc: '실무 경험과 포트폴리오를 쌓아 디지털 마케터로 취업하고 싶은 분들.',
    tags: ['포트폴리오', '실무 역량', '취업 지원'],
    color: 'cyan',
  },
  {
    icon: '📈',
    title: '현직 마케터',
    desc: 'AI와 최신 트렌드를 학습하여 마케팅 역량을 업그레이드하고 싶은 분들.',
    tags: ['AI 활용', '스킬업', '트렌드 학습'],
    color: 'green',
  },
];

const colorMap = {
  blue: {
    card: 'hover:border-blue-500/40',
    icon: 'bg-blue-500/20 border border-blue-500/30',
    tag: 'text-blue-400 bg-blue-500/10',
  },
  purple: {
    card: 'hover:border-purple-500/40',
    icon: 'bg-purple-500/20 border border-purple-500/30',
    tag: 'text-purple-400 bg-purple-500/10',
  },
  cyan: {
    card: 'hover:border-cyan-500/40',
    icon: 'bg-cyan-500/20 border border-cyan-500/30',
    tag: 'text-cyan-400 bg-cyan-500/10',
  },
  green: {
    card: 'hover:border-green-500/40',
    icon: 'bg-green-500/20 border border-green-500/30',
    tag: 'text-green-400 bg-green-500/10',
  },
};

export default function TargetAudienceSection() {
  return (
    <section id="target" className="py-24 border-t border-dark-border">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Badge variant="cyan" className="mb-4">이런 분께 추천합니다</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
            <span className="gradient-text">누구를 위한</span> 서비스인가요?
          </h2>
          <p className="text-gray-400">다양한 배경의 분들이 K-Marketer와 함께 성장하고 있습니다.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((a) => {
            const c = colorMap[a.color];
            return (
              <div key={a.title} className={`card-dark transition-all duration-300 ${c.card} hover:-translate-y-1`}>
                <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-2xl mb-4`}>
                  {a.icon}
                </div>
                <h3 className="text-white font-bold mb-3">{a.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{a.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {a.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-2 py-1 rounded-full ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">어떤 과정이 나에게 맞는지 모르겠다면?</p>
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            무료 상담 신청하기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
