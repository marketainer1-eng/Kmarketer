import Badge from './Badge';
import SectionTitle from './SectionTitle';

const values = [
  {
    icon: '🎯',
    title: '실전 중심',
    description: '이론보다 현장에서 바로 쓸 수 있는 실전 전략을 중심으로 교육하고 컨설팅합니다.',
  },
  {
    icon: '📊',
    title: '데이터 기반',
    description: '감이 아닌 데이터로 의사결정을 내립니다. 숫자로 증명되는 마케팅을 만들어갑니다.',
  },
  {
    icon: '🤝',
    title: '동반 성장',
    description: '단순 서비스 제공이 아닌, 클라이언트와 함께 성장하는 파트너십을 추구합니다.',
  },
  {
    icon: '🔄',
    title: '지속적 개선',
    description: '시장은 변합니다. 끊임없이 학습하고 전략을 개선하는 문화를 만들어갑니다.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 border-t border-dark-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="blue" className="mb-4">About Us</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mt-3 mb-6">
              K-Marketer는<br />
              <span className="gradient-text">어떤 곳인가요?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              K-Marketer는 디지털 마케팅 교육과 컨설팅을 통해 소상공인, 스타트업,
              그리고 마케터를 꿈꾸는 사람들이 실질적인 성과를 만들어낼 수 있도록
              돕는 전문 기관입니다.
            </p>
            <p className="text-gray-400 leading-relaxed">
              네이버, 인스타그램, 유튜브, 구글 광고부터 AI 활용 콘텐츠 자동화까지
              — 변화하는 디지털 환경에서 살아남는 마케팅 전략을 함께 만들어갑니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="card-dark card-hover">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
