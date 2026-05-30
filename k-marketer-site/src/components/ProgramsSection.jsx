import Badge from './Badge';

const programs = [
  {
    level: 'BASIC',
    levelColor: 'text-green-400 bg-green-500/10 border-green-500/30',
    title: '디지털 마케팅 기초',
    duration: '4주 과정',
    price: '198,000원',
    desc: '마케팅을 처음 시작하는 분들을 위한 기초 과정입니다.',
    features: [
      '디지털 마케팅 개념 이해',
      '네이버 플레이스 최적화',
      '인스타그램 기초 운영',
      '콘텐츠 기획 방법론',
    ],
    highlight: false,
  },
  {
    level: 'STANDARD',
    levelColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    title: '실전 마케팅 마스터',
    duration: '8주 과정',
    price: '398,000원',
    desc: '실무에서 바로 적용 가능한 전략을 배우는 핵심 과정입니다.',
    features: [
      '시장조사 & 경쟁사 분석',
      '채널별 광고 운영 실습',
      'SNS 콘텐츠 자동화',
      'KPI 설정 & 성과 분석',
      '케이스 스터디 기반 학습',
    ],
    highlight: true,
  },
  {
    level: 'PRO',
    levelColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    title: 'AI 마케팅 전문가',
    duration: '12주 과정',
    price: '598,000원',
    desc: 'AI 도구를 활용해 마케팅 효율을 극대화하는 심화 과정입니다.',
    features: [
      'ChatGPT 콘텐츠 자동화',
      'GEO (생성형 AI 검색) 최적화',
      '마케팅 자동화 시스템 구축',
      '개인 컨설팅 2회 포함',
      '수료 후 커뮤니티 평생 이용',
    ],
    highlight: false,
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24 border-t border-dark-border">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Badge variant="blue" className="mb-4">Programs</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
            목표에 맞는 <span className="gradient-text">교육 프로그램</span>
          </h2>
          <p className="text-gray-400">초보부터 전문가까지 — 수준별 맞춤 커리큘럼을 제공합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className={`relative card-dark flex flex-col transition-all duration-300 ${
                p.highlight
                  ? 'border-blue-500/50 shadow-glow-blue scale-105'
                  : 'hover:border-blue-500/30 hover:-translate-y-1'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    가장 인기
                  </span>
                </div>
              )}

              <div className="mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded border ${p.levelColor}`}>
                  {p.level}
                </span>
              </div>

              <h3 className="text-white font-black text-xl mb-1">{p.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{p.duration}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{p.desc}</p>

              <ul className="space-y-2 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="text-2xl font-black text-white mb-4">{p.price}</div>
                <a
                  href="#contact"
                  className={p.highlight ? 'btn-primary w-full text-center block' : 'btn-secondary w-full text-center block'}
                >
                  수강 신청하기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
