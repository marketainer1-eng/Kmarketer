import Badge from './Badge';

const missions = [
  { icon: '🌱', text: '모든 소상공인이 디지털 마케팅을 쉽게 활용하는 세상' },
  { icon: '📚', text: '실전 교육으로 진짜 마케터를 양성하는 플랫폼' },
  { icon: '🚀', text: '데이터와 창의성으로 성과를 만드는 마케팅 문화 확산' },
];

export default function VisionSection() {
  return (
    <section id="vision" className="py-24 border-t border-dark-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="purple" className="mb-4">Vision & Mission</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-6">
            우리가 꿈꾸는 <span className="gradient-text">미래</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            K-Marketer의 비전은 <strong className="text-white">한국 디지털 마케팅 생태계를 성장</strong>시키는 것입니다.
            마케팅이 어렵고 비싼 것이 아닌, 누구나 배우고 실행할 수 있는 도구가 되도록 합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {missions.map((m, i) => (
            <div key={i} className="card-dark border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center">
              <div className="text-4xl mb-4">{m.icon}</div>
              <p className="text-gray-300 leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>

        <div className="glow-line" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-black text-white mb-4">
              핵심 가치 <span className="gradient-text">3가지</span>
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Practical', desc: '실용적인 — 현장에서 바로 쓸 수 있어야 합니다.' },
                { label: 'Proven', desc: '검증된 — 수치로 증명된 방법론만 가르칩니다.' },
                { label: 'Progressive', desc: '진보적인 — AI와 새로운 트렌드를 빠르게 적용합니다.' },
              ].map((v) => (
                <div key={v.label} className="flex items-start gap-4">
                  <span className="text-blue-400 font-black text-lg w-24 flex-shrink-0">{v.label}</span>
                  <span className="text-gray-400 text-sm leading-relaxed">{v.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card-dark border-blue-500/20 text-center p-10">
            <div className="text-6xl font-black gradient-text mb-2">2030</div>
            <p className="text-gray-400">대한민국 No.1 디지털 마케팅 교육 플랫폼</p>
          </div>
        </div>
      </div>
    </section>
  );
}
