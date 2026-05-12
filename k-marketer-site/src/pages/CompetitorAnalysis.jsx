import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Badge from '../components/Badge';
import ComparisonTable from '../components/ComparisonTable';
import {
  overviewCards,
  comparisonRows,
  insightCards,
  actionImplications,
} from '../data/competitorData';

export default function CompetitorAnalysis() {
  return (
    <div>
      <PageHero
        badge={{ label: '경쟁사 분석', variant: 'purple' }}
        title="경쟁사 분석 실전 케이스"
        subtitle="더미헤어 vs 면목동 코코미용실 — 실제 경쟁 구도를 분석하고 차별화 전략을 도출합니다."
      />

      {/* Brand overview */}
      <section className="py-16 border-t border-dark-border">
        <div className="section-container">
          <SectionTitle
            label="브랜드 비교 개요"
            title="두 브랜드 한눈에 비교"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {overviewCards.map((card) => (
              <div key={card.label} className="card-dark">
                <div className="text-2xl mb-3">{card.icon}</div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-3">{card.label}</p>
                <div className="space-y-3">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                    <p className="text-blue-400 text-xs font-semibold mb-1">더미헤어</p>
                    <p className="text-gray-200 text-xs leading-relaxed">{card.dummyHair}</p>
                  </div>
                  <div className="bg-dark-surface border border-dark-border rounded-lg p-3">
                    <p className="text-gray-400 text-xs font-semibold mb-1">코코미용실</p>
                    <p className="text-gray-300 text-xs leading-relaxed">{card.coco}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Brand identity banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-600/15 to-blue-800/5 p-6">
              <div className="absolute top-3 right-3">
                <Badge variant="blue">우리 브랜드</Badge>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-2xl mb-4">
                💇
              </div>
              <h3 className="text-white font-black text-xl mb-2">더미헤어</h3>
              <p className="text-blue-300 text-sm font-medium mb-3">"오래가는 신뢰, 친근한 이웃 미용실"</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                50~60대 여성 단골 고객 중심. 원장과의 오랜 관계에서 오는 신뢰가 핵심 자산.
                디지털 전환이 곧 성장의 열쇠.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-800/30 to-gray-900/20 p-6">
              <div className="absolute top-3 right-3">
                <Badge variant="gray">경쟁 브랜드</Badge>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gray-600/20 border border-gray-600/30 flex items-center justify-center text-2xl mb-4">
                ✂️
              </div>
              <h3 className="text-white font-black text-xl mb-2">면목동 코코미용실</h3>
              <p className="text-gray-400 text-sm font-medium mb-3">"세련된 감각, 트렌디한 선택"</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                30~50대 여성 타겟. SNS와 블로그 콘텐츠로 신규 고객 유입에 강점.
                젊고 트렌디한 이미지로 포지셔닝.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed comparison table */}
      <section className="py-16 bg-dark-surface/30">
        <div className="section-container">
          <SectionTitle
            label="상세 비교 분석"
            title="항목별 전략 비교표"
            subtitle="주요 마케팅 항목에 따라 두 브랜드의 전략과 포지셔닝을 비교합니다."
          />
          <ComparisonTable
            rows={comparisonRows}
            brandA="더미헤어"
            brandB="코코미용실"
          />
        </div>
      </section>

      {/* Insight cards */}
      <section className="py-16">
        <div className="section-container">
          <SectionTitle
            label="분석 인사이트"
            title="더미헤어가 얻어야 할 전략적 시사점"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insightCards.map((card) => {
              const isBlue = card.color === 'blue';
              return (
                <div
                  key={card.type}
                  className={`card-dark border ${isBlue ? 'border-blue-500/25' : 'border-purple-500/25'} transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl ${isBlue ? 'bg-blue-500/20 border-blue-500/30' : 'bg-purple-500/20 border-purple-500/30'} border flex items-center justify-center text-xl`}>
                      {card.icon}
                    </div>
                    <h3 className={`font-bold text-base ${isBlue ? 'text-blue-300' : 'text-purple-300'}`}>
                      {card.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full ${isBlue ? 'bg-blue-500/15 border border-blue-500/30' : 'bg-purple-500/15 border border-purple-500/30'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <svg className={`w-3 h-3 ${isBlue ? 'text-blue-400' : 'text-purple-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Action implications */}
      <section className="py-16 bg-dark-surface/30">
        <div className="section-container">
          <SectionTitle
            label="실행 시사점"
            title="분석을 실행으로 전환하는 4가지 방향"
            subtitle="경쟁사 분석에서 도출한 인사이트를 실제 마케팅 액션으로 연결합니다."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {actionImplications.map((item, idx) => (
              <div key={item.title} className="card-dark flex gap-4 hover:border-blue-500/25 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-600 font-bold">0{idx + 1}</span>
                    <h4 className="text-white font-bold text-sm">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion box */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <div className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0">🎯</div>
              <div>
                <h4 className="text-white font-bold mb-2">핵심 결론</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  더미헤어의 경쟁 우위는 <strong className="text-blue-400">단골 고객 신뢰 자산</strong>입니다.
                  코코미용실이 선점한 SNS 젊은 감성을 모방하는 것보다,
                  <strong className="text-purple-400"> 50~60대 타겟에 맞는 따뜻하고 신뢰감 있는 디지털 콘텐츠</strong>를 꾸준히
                  쌓아가는 것이 장기적으로 더 강력한 차별화 전략입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
