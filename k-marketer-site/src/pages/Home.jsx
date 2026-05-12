import { Link, useNavigate } from 'react-router-dom';
import Badge from '../components/Badge';
import SectionTitle from '../components/SectionTitle';
import InfoCard from '../components/InfoCard';

const workflowSteps = [
  { step: '01', label: '시장조사', icon: '🔍', to: '/market-research', color: 'from-blue-500 to-blue-600' },
  { step: '02', label: '전략도출', icon: '🎯', to: null, color: 'from-purple-500 to-purple-600' },
  { step: '03', label: '콘텐츠기획', icon: '✍️', to: null, color: 'from-violet-500 to-violet-600' },
  { step: '04', label: '실행방안', icon: '⚡', to: '/checklist', color: 'from-cyan-500 to-cyan-600' },
  { step: '05', label: '피드백', icon: '📊', to: null, color: 'from-teal-500 to-teal-600' },
];

const valueCards = [
  {
    icon: '🧩',
    title: '실전 프레임워크',
    description: 'PEST, 3C, SWOT 등 현장에서 바로 쓸 수 있는 마케팅 분석 틀을 제공합니다.',
    badge: <Badge variant="blue">실전</Badge>,
    glowColor: 'blue',
  },
  {
    icon: '✅',
    title: '체크리스트 기반 실행',
    description: '네이버플레이스부터 광고, 리뷰 관리까지 — 빠짐없이 실행할 수 있는 항목별 체크리스트.',
    badge: <Badge variant="green">체크리스트</Badge>,
    glowColor: 'cyan',
  },
  {
    icon: '🤖',
    title: 'AI / GEO 활용',
    description: 'ChatGPT 콘텐츠 자동화, FAQ 최적화, 생성형 AI 검색 노출 전략을 실전에 적용합니다.',
    badge: <Badge variant="purple">AI 활용</Badge>,
    glowColor: 'purple',
  },
  {
    icon: '📋',
    title: '케이스 학습',
    description: '더미헤어 미용실 사례로 실제 마케팅 전략이 어떻게 수립되고 실행되는지 배웁니다.',
    badge: <Badge variant="orange">템플릿</Badge>,
    glowColor: 'blue',
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 animated-bg pointer-events-none" />
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="blue">실전 도구함</Badge>
              <Badge variant="purple">K-Marketer.kr</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              디지털 마케터를 위한
              <br />
              <span className="gradient-text">실전 도구함</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              시장 조사부터 전략 수립, 콘텐츠 기획, 실행, 피드백까지 —
              마케터가 현장에서 즉시 활용할 수 있는 프레임워크와 체크리스트를 제공합니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/dummy-hair-case" className="btn-primary inline-flex items-center gap-2">
                더미헤어 케이스 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/checklist" className="btn-secondary inline-flex items-center gap-2">
                실행 체크리스트 시작하기
              </Link>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6 mt-14 pt-8 border-t border-dark-border">
              {[
                { value: '5개', label: '실전 페이지' },
                { value: '7개', label: '체크리스트 카테고리' },
                { value: '40+', label: '실행 항목' },
                { value: '1개', label: '실전 케이스' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-black text-white">{stat.value}</div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow section */}
      <section className="py-20 border-t border-dark-border">
        <div className="section-container">
          <SectionTitle
            label="마케팅 워크플로"
            title="5단계 실전 마케팅 프로세스"
            subtitle="시장을 이해하고, 전략을 세우고, 콘텐츠를 만들고, 실행하고, 결과를 분석합니다."
            align="center"
          />

          <div className="relative flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 mt-8">
            {workflowSteps.map((step, idx) => (
              <div key={step.step} className="flex flex-row sm:flex-col items-center sm:flex-1">
                {/* Card */}
                <div className={`flex-1 sm:flex-none w-full bg-dark-card border border-dark-border rounded-xl p-4 sm:p-5 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1 ${step.to ? 'cursor-pointer' : ''}`}
                  onClick={() => step.to && navigate(step.to)}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl mb-3 mx-auto`}>
                    {step.icon}
                  </div>
                  <p className="text-gray-500 text-xs text-center mb-1">{step.step}</p>
                  <p className="text-white font-bold text-center text-sm">{step.label}</p>
                  {step.to && (
                    <p className="text-blue-400 text-xs text-center mt-1">바로가기 →</p>
                  )}
                </div>

                {/* Arrow (hidden on last item) */}
                {idx < workflowSteps.length - 1 && (
                  <div className="flex items-center justify-center sm:w-6 mx-1 sm:mx-0 flex-shrink-0">
                    <span className="text-gray-600 text-lg rotate-90 sm:rotate-0">›</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value cards */}
      <section className="py-20">
        <div className="section-container">
          <SectionTitle
            label="이 사이트에서 할 수 있는 것"
            title="즉시 활용 가능한 4가지 도구"
            subtitle="학습을 마친 마케터가 현장에서 바로 사용할 수 있도록 설계했습니다."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueCards.map((card) => (
              <InfoCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                badge={card.badge}
                glowColor={card.glowColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Academy relation */}
      <section className="py-20">
        <div className="section-container">
          <div className="glow-line mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Academy */}
            <div className="card-dark border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-xl">
                  📚
                </div>
                <div>
                  <Badge variant="purple">배우는 곳</Badge>
                  <h3 className="text-white font-bold mt-1">K-마케터 아카데미</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                마케팅 개념, 전략 이론, MRI 진단, 실습 과제를 통해 마케터로 성장하는 교육 플랫폼입니다.
              </p>
              <a
                href="https://kmarketer-d4wf7pgz.manus.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                아카데미 방문 →
              </a>
            </div>

            {/* Practical site */}
            <div className="card-dark border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-xl">
                  ⚡
                </div>
                <div>
                  <Badge variant="blue">적용하는 곳</Badge>
                  <h3 className="text-white font-bold mt-1">K-Marketer 실전 사이트</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                배운 내용을 실전에서 즉시 활용할 수 있도록 — 프레임워크, 체크리스트, 케이스 스터디를 모은 실행 도구함입니다.
              </p>
              <span className="inline-flex items-center gap-2 mt-4 text-blue-400 text-sm font-medium">
                지금 바로 여기입니다 ✓
              </span>
            </div>
          </div>

          {/* Connection arrow */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <span className="text-purple-400">아카데미에서 배우고</span>
              <span className="text-2xl">→</span>
              <span className="text-blue-400">실전 사이트에서 적용하세요</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20">
        <div className="section-container">
          <div className="relative rounded-2xl overflow-hidden border border-dark-border bg-dark-card p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />
            <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />

            <div className="relative z-10">
              <Badge variant="cyan" className="mb-4">실전 시작</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 mt-3">
                지금 바로 실전 도구를 사용하세요
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                더미헤어 케이스로 실전 마케팅 전략을 확인하거나, 체크리스트로 오늘 할 일을 정리하세요.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/dummy-hair-case" className="btn-primary">
                  더미헤어 케이스 시작하기
                </Link>
                <Link to="/checklist" className="btn-secondary">
                  체크리스트 바로가기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
