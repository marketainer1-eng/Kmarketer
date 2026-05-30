import { Link } from 'react-router-dom';
import Badge from './Badge';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 animated-bg pointer-events-none" />
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="blue">K-Marketer</Badge>
            <Badge variant="purple">디지털 마케팅 전문</Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            마케팅으로
            <br />
            <span className="gradient-text">비즈니스를 성장</span>시키다
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            K-Marketer는 소상공인과 스타트업을 위한 실전 디지털 마케팅 솔루션을 제공합니다.
            시장 분석부터 콘텐츠 전략, 광고 운영까지 — 함께 성장합니다.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              무료 상담 신청
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#programs" className="btn-secondary inline-flex items-center gap-2">
              프로그램 둘러보기
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-14 pt-8 border-t border-dark-border">
            {[
              { value: '500+', label: '누적 수강생' },
              { value: '98%', label: '만족도' },
              { value: '3년+', label: '운영 경험' },
              { value: '50+', label: '파트너사' },
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
  );
}
