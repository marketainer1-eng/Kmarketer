import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Badge from '../components/Badge';
import PersonaCard from '../components/PersonaCard';
import KPIStatCard from '../components/KPIStatCard';
import {
  caseOverview,
  persona,
  marketSummary,
  contentStrategy,
  channelStrategy,
  aiOpportunities,
  kpiCards,
  actionPlan,
} from '../data/caseData';

const channelColorMap = {
  blue: { badge: 'blue', border: 'border-blue-500/20', text: 'text-blue-400', bg: 'bg-blue-500/10' },
  green: { badge: 'green', border: 'border-green-500/20', text: 'text-green-400', bg: 'bg-green-500/10' },
  purple: { badge: 'purple', border: 'border-purple-500/20', text: 'text-purple-400', bg: 'bg-purple-500/10' },
  cyan: { badge: 'cyan', border: 'border-cyan-500/20', text: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  orange: { badge: 'orange', border: 'border-orange-500/20', text: 'text-orange-400', bg: 'bg-orange-500/10' },
};

const weekColors = {
  '1주차': { border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400', dot: 'bg-blue-500' },
  '2주차': { border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400', dot: 'bg-purple-500' },
  '3주차': { border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400', dot: 'bg-cyan-500' },
  '4주차': { border: 'border-green-500/30', bg: 'bg-green-500/10', text: 'text-green-400', dot: 'bg-green-500' },
};

export default function DummyHairCase() {
  return (
    <div>
      <PageHero
        badge={{ label: '케이스 학습', variant: 'orange' }}
        title="더미헤어 마케팅 케이스"
        subtitle="서울 면목동 미용실을 대상으로 실전 마케팅 전략을 수립하고, AI 활용부터 30일 액션 플랜까지 구체적으로 구성합니다."
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="orange">실전 케이스</Badge>
          <Badge variant="blue">더미헤어</Badge>
          <Badge variant="purple">50~60대 타겟</Badge>
          <Badge variant="cyan">AI 활용</Badge>
        </div>
      </PageHero>

      {/* Case overview */}
      <section className="py-16 border-t border-dark-border">
        <div className="section-container">
          <SectionTitle
            label="케이스 개요"
            title="더미헤어 — 어떤 브랜드인가"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { label: '브랜드명', value: caseOverview.brand, icon: '💇' },
                { label: '업종', value: caseOverview.category, icon: '🏪' },
                { label: '위치', value: caseOverview.location, icon: '📍' },
                { label: '주요 타겟', value: caseOverview.target, icon: '👥' },
                { label: '주요 경쟁자', value: caseOverview.competitor, icon: '⚔️' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-dark-card border border-dark-border rounded-xl">
                  <span className="text-xl w-8 text-center flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">{item.label}</p>
                    <p className="text-white font-semibold text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="card-dark border border-red-500/20 bg-red-500/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🚨</span>
                  <h4 className="text-red-300 font-bold text-sm">현재 과제 (Challenge)</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{caseOverview.challenge}</p>
              </div>
              <div className="card-dark border border-green-500/20 bg-green-500/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🎯</span>
                  <h4 className="text-green-300 font-bold text-sm">마케팅 목표 (Goal)</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{caseOverview.goal}</p>
              </div>
              <div className="card-dark border border-blue-500/20">
                <p className="text-blue-400 font-semibold text-xs uppercase tracking-wide mb-2">이 케이스에서 배우는 것</p>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex gap-2"><span className="text-blue-400">→</span> 타겟 페르소나 설정 방법</li>
                  <li className="flex gap-2"><span className="text-blue-400">→</span> 채널 전략 우선순위 결정</li>
                  <li className="flex gap-2"><span className="text-blue-400">→</span> AI 도구 마케팅 실전 적용</li>
                  <li className="flex gap-2"><span className="text-blue-400">→</span> 30일 액션 플랜 수립</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Persona */}
      <section className="py-16 bg-dark-surface/30">
        <div className="section-container">
          <SectionTitle
            label="타겟 페르소나"
            title="우리 고객은 누구인가"
            subtitle="마케팅 전략의 모든 결정은 타겟 페르소나에서 출발합니다."
          />
          <div className="max-w-3xl">
            <PersonaCard persona={persona} />
          </div>
          <div className="mt-5 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 max-w-3xl">
            <p className="text-purple-400 font-semibold text-xs uppercase tracking-wide mb-1">💡 페르소나 활용법</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              콘텐츠를 만들 때마다 "김미자 씨가 이 글을 보면 공감할까?"라고 물어보세요.
              타겟의 언어로 말하는 콘텐츠가 검색과 공유 모두 잘 됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Market Summary */}
      <section className="py-16">
        <div className="section-container">
          <SectionTitle
            label="시장 현황"
            title="면목동 미용 시장 요약"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {marketSummary.map((item) => (
              <div key={item.label} className="card-dark flex gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-gray-200 text-sm leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor insight */}
      <section className="py-16 bg-dark-surface/30">
        <div className="section-container">
          <SectionTitle
            label="경쟁사 인사이트"
            title="코코미용실에서 배우는 것"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="card-dark border-gray-600/30">
              <h4 className="text-gray-300 font-bold text-sm mb-3">코코미용실이 잘 하는 것</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {['SNS 시술 비주얼 콘텐츠 정기 게시', '네이버 블로그 키워드 포스팅', '인스타그램 릴스로 감성 브랜딩'].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-gray-600">•</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card-dark border-blue-500/20">
              <h4 className="text-blue-300 font-bold text-sm mb-3">더미헤어가 벤치마킹할 것</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {['블로그 포스팅 주기화 (월 4회)', '플레이스 소식 기능 활용', '시술 before/after 콘텐츠'].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-blue-400">→</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card-dark border-purple-500/20">
              <h4 className="text-purple-300 font-bold text-sm mb-3">더미헤어만의 차별점</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {['50~60대 타겟 맞춤 콘텐츠 톤', '단골 관계 기반 신뢰 스토리', '지역 커뮤니티 연계 마케팅'].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-purple-400">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link to="/competitor-analysis" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors">
              전체 경쟁사 분석 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Content Strategy */}
      <section className="py-16">
        <div className="section-container">
          <SectionTitle
            label="콘텐츠 전략"
            title="채널별 추천 콘텐츠 방향"
            subtitle="50~60대 타겟을 기준으로 각 채널에 맞는 콘텐츠 전략을 수립합니다."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contentStrategy.map((cs) => {
              const c = channelColorMap[cs.color];
              return (
                <div key={cs.channel} className={`card-dark border ${c.border}`}>
                  <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center text-xl mb-4`}>
                    {cs.icon}
                  </div>
                  <h3 className={`font-bold text-base mb-3 ${c.text}`}>{cs.channel}</h3>
                  <ul className="space-y-2.5">
                    {cs.ideas.map((idea) => (
                      <li key={idea} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                        <span className={`${c.text} flex-shrink-0 mt-0.5`}>›</span>
                        {idea}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Channel Strategy */}
      <section className="py-16 bg-dark-surface/30">
        <div className="section-container">
          <SectionTitle
            label="채널 전략"
            title="추천 채널별 우선순위"
            subtitle="자원이 한정된 소상공인을 위한 단계별 채널 전략입니다."
          />
          <div className="overflow-x-auto rounded-xl border border-dark-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-border bg-dark-surface">
                  <th className="text-left px-5 py-4 text-gray-400 font-semibold">채널</th>
                  <th className="text-left px-5 py-4 text-gray-400 font-semibold">우선순위</th>
                  <th className="text-left px-5 py-4 text-gray-400 font-semibold">이유</th>
                  <th className="text-left px-5 py-4 text-gray-400 font-semibold">실행 방안</th>
                </tr>
              </thead>
              <tbody>
                {channelStrategy.map((row, idx) => {
                  const c = channelColorMap[row.color];
                  return (
                    <tr key={row.channel} className={`border-b border-dark-border/50 hover:bg-dark-surface/50 transition-colors ${idx % 2 === 0 ? '' : 'bg-dark-surface/20'}`}>
                      <td className="px-5 py-4 text-white font-semibold">{row.channel}</td>
                      <td className="px-5 py-4">
                        <Badge variant={row.color}>{row.priority}</Badge>
                      </td>
                      <td className="px-5 py-4 text-gray-400">{row.reason}</td>
                      <td className="px-5 py-4 text-gray-300">{row.action}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AI Opportunities */}
      <section className="py-16">
        <div className="section-container">
          <SectionTitle
            label="AI 활용 기회"
            title="더미헤어에서 AI를 이렇게 씁니다"
            subtitle="ChatGPT, 생성형 AI 도구를 마케팅 업무에 실제로 적용하는 방법입니다."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {aiOpportunities.map((item) => (
              <div key={item.title} className="card-dark border border-blue-500/15 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-bold text-sm">{item.title}</h4>
                      <Badge variant="purple">AI 활용</Badge>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <p className="text-blue-400 font-semibold text-sm mb-2">🌐 GEO (Generative Engine Optimization)</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              ChatGPT, Perplexity 등 AI 검색 엔진에서 "면목동 미용실 추천" 같은 질의에 더미헤어가 답변으로 노출되려면,
              <strong className="text-white"> FAQ 형식의 지역 키워드 콘텐츠</strong>를 블로그와 홈페이지에 꾸준히 발행해야 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="py-16 bg-dark-surface/30">
        <div className="section-container">
          <SectionTitle
            label="성과 지표 (KPI)"
            title="무엇으로 성과를 측정할까"
            subtitle="마케팅 실행 후 30일~90일 기준으로 추적할 핵심 성과 지표입니다."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {kpiCards.map((kpi) => (
              <KPIStatCard
                key={kpi.label}
                icon={kpi.icon}
                label={kpi.label}
                value={kpi.value}
                target={kpi.target}
                color={kpi.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 30-day action plan */}
      <section className="py-16">
        <div className="section-container">
          <SectionTitle
            label="30일 액션 플랜"
            title="이번 달 무엇을 할 것인가"
            subtitle="4주 단위로 나눈 구체적인 실행 로드맵입니다. 바로 오늘부터 시작할 수 있습니다."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {actionPlan.map((week) => {
              const wc = weekColors[week.week];
              return (
                <div key={week.week} className={`card-dark border ${wc.border}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${wc.dot}`} />
                    <span className={`text-sm font-black ${wc.text}`}>{week.week}</span>
                    <Badge variant={week.color}>{week.label}</Badge>
                  </div>
                  <ul className="space-y-2.5">
                    {week.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${wc.dot} flex-shrink-0 mt-1.5`} />
                        <span className="text-gray-300 text-xs leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA to checklist */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold mb-1">실행 체크리스트로 오늘 할 일 정리하기</h4>
              <p className="text-gray-400 text-sm">위 액션 플랜을 체크리스트로 하나씩 확인하면서 실행하세요.</p>
            </div>
            <Link to="/checklist" className="btn-primary flex-shrink-0">
              체크리스트 바로가기 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
