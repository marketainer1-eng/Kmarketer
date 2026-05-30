import Badge from './Badge';

const timeline = [
  {
    year: '2021',
    month: '03',
    title: 'K-Marketer 설립',
    desc: '소상공인 디지털 마케팅 교육 전문 기관으로 출발했습니다.',
    color: 'blue',
  },
  {
    year: '2021',
    month: '09',
    title: '첫 번째 교육 프로그램 런칭',
    desc: '네이버 플레이스 & 스마트스토어 마케팅 과정을 오픈했습니다.',
    color: 'purple',
  },
  {
    year: '2022',
    month: '04',
    title: '수강생 100명 달성',
    desc: '누적 수강생 100명을 돌파하며 입소문으로 성장했습니다.',
    color: 'cyan',
  },
  {
    year: '2022',
    month: '11',
    title: 'SNS 마케팅 과정 추가',
    desc: '인스타그램·유튜브 콘텐츠 마케팅 과정을 추가 개설했습니다.',
    color: 'green',
  },
  {
    year: '2023',
    month: '06',
    title: 'AI 마케팅 과정 신설',
    desc: 'ChatGPT 활용 콘텐츠 자동화 및 GEO 전략 과정을 개설했습니다.',
    color: 'blue',
  },
  {
    year: '2024',
    month: '03',
    title: 'K-마케터 아카데미 온라인 플랫폼 오픈',
    desc: '전국 어디서나 수강 가능한 온라인 교육 플랫폼을 론칭했습니다.',
    color: 'purple',
  },
];

const colorMap = {
  blue: 'bg-blue-500/20 border-blue-500/40 text-blue-400',
  purple: 'bg-purple-500/20 border-purple-500/40 text-purple-400',
  cyan: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400',
  green: 'bg-green-500/20 border-green-500/40 text-green-400',
};

const dotMap = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  cyan: 'bg-cyan-500',
  green: 'bg-green-500',
};

export default function HistorySection() {
  return (
    <section id="history" className="py-24 border-t border-dark-border">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Badge variant="cyan" className="mb-4">History</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
            K-Marketer의 <span className="gradient-text">걸어온 길</span>
          </h2>
          <p className="text-gray-400">작은 시작에서 대한민국 디지털 마케팅 교육을 바꾸고 있습니다.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-dark-border" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 pl-14">
                {/* Dot */}
                <div className={`absolute left-4 top-3 w-4 h-4 rounded-full border-2 border-dark-bg ${dotMap[item.color]} flex-shrink-0`} />

                <div className="flex-1 card-dark hover:border-blue-500/20 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded border ${colorMap[item.color]}`}>
                      {item.year}.{item.month}
                    </span>
                    <h3 className="text-white font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
