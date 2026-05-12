import { useState, useCallback } from 'react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ChecklistCard from '../components/ChecklistCard';
import Badge from '../components/Badge';
import { checklistCategories } from '../data/checklistData';

export default function Checklist() {
  // Track progress per category: { categoryId: { checked: number, total: number } }
  const [progress, setProgress] = useState(() => {
    const init = {};
    checklistCategories.forEach((cat) => {
      init[cat.id] = { checked: 0, total: cat.items.length };
    });
    return init;
  });

  const handleProgressChange = useCallback((categoryId, checkedCount, total) => {
    setProgress((prev) => ({
      ...prev,
      [categoryId]: { checked: checkedCount, total },
    }));
  }, []);

  const totalItems = Object.values(progress).reduce((sum, v) => sum + v.total, 0);
  const totalChecked = Object.values(progress).reduce((sum, v) => sum + v.checked, 0);
  const overallPct = totalItems > 0 ? Math.round((totalChecked / totalItems) * 100) : 0;

  const getMotivationMessage = () => {
    if (overallPct === 0) return '체크를 시작해보세요. 작은 실행이 큰 변화를 만듭니다.';
    if (overallPct < 25) return '좋은 시작입니다! 계속 진행해보세요.';
    if (overallPct < 50) return '잘 하고 있어요. 절반을 향해 달려가세요!';
    if (overallPct < 75) return '훌륭합니다! 중반을 넘었어요.';
    if (overallPct < 100) return '거의 다 왔습니다. 마지막 힘을 내세요!';
    return '🎉 완료! 모든 항목을 실행했습니다. 대단해요!';
  };

  return (
    <div>
      <PageHero
        badge={{ label: '실행 체크리스트', variant: 'green' }}
        title="마케팅 실행 체크리스트"
        subtitle="네이버플레이스부터 AI 자동화까지 — 빠짐없이 실행하고 진행 상황을 체크하세요."
      />

      {/* Progress summary */}
      <section className="py-8 border-t border-dark-border sticky top-16 z-40 bg-dark-bg/95 backdrop-blur-md">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide">전체 진행률</p>
                <p className={`text-3xl font-black ${overallPct === 100 ? 'text-green-400' : 'text-blue-400'}`}>
                  {overallPct}%
                </p>
              </div>
              <div className="h-10 w-px bg-dark-border" />
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide">완료 항목</p>
                <p className="text-2xl font-black text-white">{totalChecked}<span className="text-gray-600 text-sm font-normal">/{totalItems}</span></p>
              </div>
              <div className="hidden sm:block">
                <p className="text-gray-400 text-sm max-w-xs">{getMotivationMessage()}</p>
              </div>
            </div>

            {/* Category mini progress */}
            <div className="flex flex-wrap gap-2">
              {checklistCategories.map((cat) => {
                const p = progress[cat.id] || { checked: 0, total: cat.items.length };
                const pct = Math.round((p.checked / p.total) * 100);
                return (
                  <div key={cat.id} className="flex items-center gap-1.5 bg-dark-card border border-dark-border rounded-lg px-2.5 py-1.5">
                    <span className="text-sm">{cat.icon}</span>
                    <span className={`text-xs font-semibold ${pct === 100 ? 'text-green-400' : pct > 0 ? 'text-blue-400' : 'text-gray-500'}`}>
                      {pct}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Global progress bar */}
          <div className="mt-4 h-2 bg-dark-surface rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ease-out ${
                overallPct === 100
                  ? 'bg-gradient-to-r from-green-500 to-emerald-400'
                  : 'bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500'
              }`}
              style={{ width: `${overallPct}%` }}
            />
          </div>
        </div>
      </section>

      {/* Checklist grid */}
      <section className="py-16">
        <div className="section-container">
          <SectionTitle
            label="카테고리별 체크리스트"
            title="7개 실행 영역"
            subtitle="각 항목을 클릭하면 체크됩니다. 매주 또는 매달 초에 리셋하고 다시 활용하세요."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {checklistCategories.map((category) => (
              <ChecklistCard
                key={category.id}
                category={category}
                onProgressChange={handleProgressChange}
              />
            ))}
          </div>

          {/* Completed message */}
          {overallPct === 100 && (
            <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-green-500/15 to-emerald-500/10 border border-green-500/30 text-center">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-white font-black text-xl mb-2">모든 항목 완료!</h3>
              <p className="text-gray-300 text-sm">
                축하합니다! 모든 마케팅 실행 항목을 체크했습니다.
                다음 주 목표를 새롭게 설정하고 다시 시작해보세요.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Category guide */}
      <section className="py-16 bg-dark-surface/30">
        <div className="section-container">
          <SectionTitle
            label="실행 우선순위 가이드"
            title="어디서부터 시작할까요?"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="card-dark border-green-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="green">즉시 시작</Badge>
                <span className="text-green-400 font-semibold text-sm">1~2주차</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span>📍</span> 네이버플레이스 최신화</li>
                <li className="flex gap-2"><span>⭐</span> 기존 고객 리뷰 요청</li>
                <li className="flex gap-2"><span>✍️</span> 블로그 첫 포스팅</li>
              </ul>
            </div>
            <div className="card-dark border-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="blue">단기 구축</Badge>
                <span className="text-blue-400 font-semibold text-sm">2~4주차</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span>📸</span> 인스타그램 정기 운영</li>
                <li className="flex gap-2"><span>📣</span> 소액 광고 테스트</li>
                <li className="flex gap-2"><span>🤖</span> AI 콘텐츠 자동화 세팅</li>
              </ul>
            </div>
            <div className="card-dark border-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="purple">중기 최적화</Badge>
                <span className="text-purple-400 font-semibold text-sm">2개월+</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span>🌐</span> GEO/FAQ 콘텐츠 강화</li>
                <li className="flex gap-2"><span>📊</span> 데이터 기반 광고 최적화</li>
                <li className="flex gap-2"><span>🔄</span> 리뷰→콘텐츠 선순환 구조</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
