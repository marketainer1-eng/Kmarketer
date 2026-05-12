import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Badge from '../components/Badge';

const pestData = [
  {
    letter: 'P',
    title: 'Political',
    label: '정치·규제',
    color: 'blue',
    examples: [
      '소상공인 지원 정책 — 온라인 마케팅 지원 예산 확대',
      '개인정보 보호법 강화 — 고객 데이터 수집 동의 필수화',
      '지역 상생 정책 — 골목상권 살리기 캠페인 활용 가능',
    ],
  },
  {
    letter: 'E',
    title: 'Economic',
    label: '경제·소비',
    color: 'green',
    examples: [
      '물가 상승으로 가성비 서비스 수요 증가',
      '50~60대 소비 여력 유지 — 미용·헬스케어 지출 안정적',
      '플랫폼 광고비 상승 → 자연 유입(SEO) 중요성 증가',
    ],
  },
  {
    letter: 'S',
    title: 'Social',
    label: '사회·문화',
    color: 'purple',
    examples: [
      '고령화 사회 가속 — 50~60대 여성 고객 풀 확대',
      '외모·자기관리 관심 증가 (뷰티 유튜브, 나이롱 트렌드)',
      '지역 커뮤니티 신뢰 — 구전, 맘카페 영향력 여전히 강함',
    ],
  },
  {
    letter: 'T',
    title: 'Technological',
    label: '기술·디지털',
    color: 'cyan',
    examples: [
      '스마트폰 이용률 89% (50대 이상) — 모바일 검색 필수 대응',
      '생성형 AI(ChatGPT, Perplexity) 검색 — GEO 최적화 필요성',
      '네이버 플레이스 알고리즘 고도화 — 소식/리뷰 업데이트 중요',
    ],
  },
];

const threeCData = [
  {
    letter: 'C',
    title: 'Customer',
    label: '고객 분석',
    icon: '👥',
    color: 'blue',
    points: [
      { label: '주요 타겟', value: '50~60대 여성 / 지역 거주 주부' },
      { label: '핵심 니즈', value: '자연스러운 스타일, 두피 케어, 합리적 가격' },
      { label: '탐색 채널', value: '네이버 지도, 지인 추천, 카카오스토리' },
      { label: '의사결정 요인', value: '리뷰 수·평점, 매장 청결, 원장과의 대화' },
    ],
  },
  {
    letter: 'C',
    title: 'Company',
    label: '자사 분석',
    icon: '🏢',
    color: 'purple',
    points: [
      { label: '강점', value: '단골 고객 충성도, 원장 전문성, 접근성' },
      { label: '약점', value: '온라인 채널 부재, 콘텐츠 부재, 신규 유입 낮음' },
      { label: '기회', value: '디지털 전환 시 지역 내 온라인 1위 가능' },
      { label: '위협', value: '경쟁 미용실의 SNS 마케팅 선점' },
    ],
  },
  {
    letter: 'C',
    title: 'Competitor',
    label: '경쟁사 분석',
    icon: '⚔️',
    color: 'cyan',
    points: [
      { label: '주요 경쟁자', value: '면목동 코코미용실 (SNS 마케팅 적극 운영)' },
      { label: '경쟁 차별점', value: '코코는 젊은 감성, 더미헤어는 신뢰·관계 강점' },
      { label: '경쟁 전략', value: '50~60대 타겟 차별화 + 디지털 채널 강화' },
      { label: '모니터링', value: '네이버 리뷰 수, 인스타 팔로워, 블로그 포스팅 주기' },
    ],
  },
];

const swotData = [
  {
    type: 'S',
    title: 'Strength',
    label: '강점',
    color: 'blue',
    bg: 'bg-blue-500/10 border-blue-500/20',
    items: ['높은 단골 재방문율', '원장 전문 기술 보유', '지역 접근성 우수', '친밀한 고객 관계'],
  },
  {
    type: 'W',
    title: 'Weakness',
    label: '약점',
    color: 'red',
    bg: 'bg-red-500/10 border-red-500/20',
    items: ['SNS/블로그 콘텐츠 부재', '온라인 리뷰 수 적음', '신규 고객 유입 채널 미비', '디지털 마케팅 운영 경험 부족'],
  },
  {
    type: 'O',
    title: 'Opportunity',
    label: '기회',
    color: 'green',
    bg: 'bg-green-500/10 border-green-500/20',
    items: ['고령화로 50대+ 고객 풀 증가', '네이버플레이스 최적화 여지 큼', '경쟁사 대비 50대 타겟 공백 존재', 'AI 도구로 콘텐츠 생산 비용 절감 가능'],
  },
  {
    type: 'T',
    title: 'Threat',
    label: '위협',
    color: 'orange',
    bg: 'bg-orange-500/10 border-orange-500/20',
    items: ['코코미용실 콘텐츠 마케팅 선점', '네이버 광고비 상승 추세', '프랜차이즈 미용실 가격 경쟁', '리뷰 부재로 검색 노출 하락'],
  },
];

const practicalTips = [
  {
    icon: '⏱️',
    title: '시장조사는 2~3시간이면 충분합니다',
    description: '완벽한 조사보다 "지금 바로 실행 가능한 인사이트 1개"를 찾는 것이 목표입니다.',
  },
  {
    icon: '📱',
    title: '네이버 검색으로 경쟁사 현황을 바로 파악하세요',
    description: '"면목동 미용실" 검색 후 상위 노출 업체의 플레이스, 블로그, 리뷰를 비교하면 됩니다.',
  },
  {
    icon: '👂',
    title: '고객의 말에서 니즈를 발굴하세요',
    description: '기존 고객 3명에게 "왜 여기 오세요?"라고 물어보면 가장 강력한 마케팅 메시지가 나옵니다.',
  },
  {
    icon: '🔄',
    title: 'SWOT는 분석이 아니라 실행의 시작점입니다',
    description: 'SWOT를 완성한 뒤 "SO 전략: 강점으로 기회를 잡는 액션 1개"를 즉시 정하세요.',
  },
];

const colorVariantMap = {
  blue: {
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    letter: 'bg-gradient-to-br from-blue-500 to-blue-600',
    dot: 'bg-blue-400',
  },
  green: {
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    letter: 'bg-gradient-to-br from-green-500 to-green-600',
    dot: 'bg-green-400',
  },
  purple: {
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    letter: 'bg-gradient-to-br from-purple-500 to-purple-600',
    dot: 'bg-purple-400',
  },
  cyan: {
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    letter: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    dot: 'bg-cyan-400',
  },
};

export default function MarketResearch() {
  return (
    <div>
      <PageHero
        badge={{ label: '시장조사 프레임워크', variant: 'blue' }}
        title="시장조사 실전 가이드"
        subtitle="PEST, 3C, SWOT 프레임워크를 통해 시장을 체계적으로 분석하고, 실전 인사이트를 도출합니다."
      />

      {/* Why research matters */}
      <section className="py-16 border-t border-dark-border">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                label="왜 시장조사가 필요한가"
                title="전략 없는 실행은 비용 낭비입니다"
                subtitle="광고비를 쓰기 전에, 콘텐츠를 만들기 전에 — 누구에게, 무엇을, 어떻게 말할지 먼저 파악해야 합니다."
              />
              <div className="space-y-3">
                {[
                  '타겟 고객이 어디서 정보를 탐색하는지 파악',
                  '경쟁사와 차별화할 포인트 발견',
                  '시장 환경 변화에 선제적으로 대응',
                  '마케팅 예산과 우선순위 결정의 근거 확보',
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '분석 프레임워크', value: '3가지', sub: 'PEST · 3C · SWOT' },
                { label: '조사 소요 시간', value: '2~3시간', sub: '즉시 실행 가능' },
                { label: '핵심 인사이트', value: '1~3개', sub: '실행 우선순위 도출' },
                { label: '업데이트 주기', value: '분기 1회', sub: '시장 변화 모니터링' },
              ].map((item) => (
                <div key={item.label} className="card-dark text-center">
                  <p className="text-2xl font-black text-white mb-1">{item.value}</p>
                  <p className="text-gray-400 text-xs">{item.label}</p>
                  <p className="text-gray-600 text-xs mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PEST Analysis */}
      <section className="py-16">
        <div className="section-container">
          <SectionTitle
            label="PEST 분석"
            title="거시 환경 분석 프레임워크"
            subtitle="우리 사업에 영향을 미치는 외부 환경을 4가지 관점으로 분석합니다. 미용실 / 로컬 서비스 예시를 기준으로 작성했습니다."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pestData.map((item) => {
              const c = colorVariantMap[item.color];
              return (
                <div key={item.letter} className={`card-dark border ${c.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${c.letter} flex items-center justify-center text-white font-black text-lg`}>
                      {item.letter}
                    </div>
                    <div>
                      <p className="text-white font-bold">{item.title}</p>
                      <p className={`text-xs ${c.text}`}>{item.label}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0 mt-1.5`} />
                        <span className="text-gray-300 text-sm leading-relaxed">{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3C Framework */}
      <section className="py-16 bg-dark-surface/30">
        <div className="section-container">
          <SectionTitle
            label="3C 분석"
            title="고객 · 자사 · 경쟁사 프레임워크"
            subtitle="마케팅 전략의 핵심 3가지 축을 분석합니다. 더미헤어 미용실 사례를 기준으로 구성했습니다."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {threeCData.map((item) => {
              const c = colorVariantMap[item.color];
              return (
                <div key={item.title} className={`card-dark border ${c.border}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl ${c.letter} flex items-center justify-center text-white font-black text-lg`}>
                      {item.letter}
                    </div>
                    <div>
                      <p className="text-white font-bold">{item.title}</p>
                      <p className={`text-xs ${c.text}`}>{item.label}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {item.points.map((pt) => (
                      <div key={pt.label} className="bg-dark-surface rounded-lg p-3 border border-dark-border">
                        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">{pt.label}</p>
                        <p className="text-gray-200 text-sm leading-relaxed">{pt.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SWOT */}
      <section className="py-16">
        <div className="section-container">
          <SectionTitle
            label="SWOT 분석"
            title="강점·약점·기회·위협 분석"
            subtitle="내부 역량과 외부 환경을 종합하여 전략적 방향을 설정합니다."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {swotData.map((item) => (
              <div key={item.type} className={`rounded-xl border p-5 ${item.bg}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-black text-white w-7">{item.type}</span>
                  <span className="text-white font-bold">{item.title}</span>
                  <Badge variant={item.color === 'red' ? 'red' : item.color === 'green' ? 'green' : item.color === 'orange' ? 'orange' : 'blue'}>
                    {item.label}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {item.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-gray-500 flex-shrink-0">•</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* SO Strategy hint */}
          <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <p className="text-blue-400 font-semibold text-sm mb-2">💡 실무 포인트 — SO 전략 도출</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">강점(S) × 기회(O)</strong>: 단골 고객 신뢰(S) + 고령화로 50대+ 풀 증가(O)
              → <span className="text-blue-400">기존 단골 고객의 온라인 리뷰를 활성화하여 동세대 신규 고객 유입 도모</span>
            </p>
          </div>
        </div>
      </section>

      {/* Practical tips */}
      <section className="py-16 bg-dark-surface/30">
        <div className="section-container">
          <SectionTitle
            label="실무 포인트"
            title="현장에서 바로 쓰는 조사 팁"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {practicalTips.map((tip) => (
              <div key={tip.title} className="card-dark flex gap-4">
                <div className="text-2xl flex-shrink-0 mt-0.5">{tip.icon}</div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-2">{tip.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
