export const caseOverview = {
  brand: '더미헤어',
  category: '미용실 / 헤어샵',
  location: '서울 면목동',
  target: '50~60대 여성',
  competitor: '면목동 코코미용실',
  challenge: '단골 고객은 있지만 온라인 가시성이 낮고 신규 고객 유입이 정체 상태',
  goal: '디지털 채널 활성화를 통해 신규 고객 월 20명 이상 유입, 예약 전환율 15% 향상',
};

export const persona = {
  avatar: '👩',
  name: '김미자 (가상 페르소나)',
  description: '55세 / 면목동 거주 주부 / 미용실 단골 고객',
  tags: ['50대', '지역 주민', '구전 신뢰형', '스마트폰 사용자'],
  traits: [
    { label: '주요 관심사', value: '자연스러운 염색, 볼륨 펌, 두피 케어' },
    { label: '고민', value: '나이 들수록 머리가 얇아짐. 자연스럽게 가꾸고 싶음' },
    { label: '미디어 이용', value: '네이버, 카카오스토리, 유튜브, 지역 맘카페' },
    { label: '신뢰 요인', value: '지인 추천, 원장과의 대화, 매장 청결도' },
    { label: '예약 방식', value: '전화 예약 선호, 카카오 채널도 이용' },
    { label: '가격 민감도', value: '합리적 가격 선호, 지나친 업셀링 거부감' },
  ],
};

export const marketSummary = [
  { icon: '📍', label: '상권 특성', value: '면목동 주거 밀집 지역. 50대 이상 여성 비율 높음' },
  { icon: '💇', label: '경쟁 환경', value: '반경 500m 내 미용실 5개. 코코미용실이 SNS 마케팅 적극 운영' },
  { icon: '🔍', label: '검색 트렌드', value: '"면목동 미용실", "면목동 헤어" 월 검색량 1,200~2,000' },
  { icon: '📱', label: '디지털 현황', value: '50대 스마트폰 이용률 89%. 네이버 검색 의존도 높음' },
];

export const contentStrategy = [
  {
    channel: '네이버 블로그',
    icon: '✍️',
    color: 'green',
    ideas: [
      '"면목동에서 자연스러운 염색 잘 하는 곳" 키워드 포스팅',
      '두피 케어 + 자연 펌 시술 후기 (실제 고객 사례)',
      '시즌별 헤어 트렌드 — 중장년 여성 스타일 가이드',
    ],
  },
  {
    channel: '인스타그램',
    icon: '📸',
    color: 'purple',
    ideas: [
      '시술 전후 비교 사진 (50~60대 고객 동의 후 게시)',
      '원장 인사 영상 — "오늘도 예쁘게 해드릴게요" 감성',
      '가게 내부 청결 + 편안한 공간 소개 릴스',
    ],
  },
  {
    channel: '네이버플레이스 소식',
    icon: '📍',
    color: 'blue',
    ideas: [
      '이달의 할인 이벤트 공지 (신규 고객 할인)',
      '시즌 인기 시술 소개 (파마, 염색, 두피케어)',
      '고객 리뷰 하이라이트 공유',
    ],
  },
];

export const channelStrategy = [
  { channel: '네이버플레이스', priority: '최우선', reason: '50~60대 로컬 검색 핵심', action: '사진 업데이트 + 소식 주 1회', color: 'blue' },
  { channel: '네이버 블로그', priority: '핵심', reason: '검색 유입 + SEO 장기 자산', action: '월 4회 지역 키워드 포스팅', color: 'green' },
  { channel: '인스타그램', priority: '보조', reason: '비주얼 신뢰 구축', action: '주 2~3회 피드 + 월 2회 릴스', color: 'purple' },
  { channel: '카카오채널', priority: '유지', reason: '기존 고객 소통 및 재방문', action: '예약 확인 자동화 + 이벤트 알림', color: 'cyan' },
  { channel: '네이버 검색광고', priority: '단기', reason: '빠른 노출 확보', action: '지역+서비스 키워드 월 10만원 테스트', color: 'orange' },
];

export const aiOpportunities = [
  { icon: '💬', title: '콘텐츠 아이디어 생성', description: 'ChatGPT로 블로그 주제 및 포스팅 초안 생성. "50대 여성 헤어 스타일" 관련 키워드 아이디어 도출' },
  { icon: '⭐', title: '리뷰 분석', description: '네이버플레이스 리뷰를 AI로 분류 — 긍정/부정 패턴 파악, 자주 언급되는 장단점 추출' },
  { icon: '❓', title: 'FAQ 초안 자동 생성', description: '"면목동 미용실 FAQ" 형식으로 AI가 질문-답변 세트 생성. GEO 최적화 콘텐츠로 활용' },
  { icon: '🌐', title: 'GEO / 지역 SEO 문구', description: '"면목동에서 자연스러운 염색 전문 미용실" 등 AI가 지역 기반 랜딩 문구 제안' },
];

export const kpiCards = [
  { icon: '🔍', label: '네이버플레이스 조회', value: '월 800+', target: '월 1,500', color: 'blue' },
  { icon: '📞', label: '신규 문의 수', value: '월 20+', target: '월 40', color: 'purple' },
  { icon: '⭐', label: '리뷰 수 (누적)', value: '50+', target: '100개', color: 'cyan' },
  { icon: '✍️', label: '블로그 유입', value: '월 300+', target: '월 600', color: 'green' },
  { icon: '📅', label: '예약 전환율', value: '15%', target: '25%', color: 'orange' },
];

export const actionPlan = [
  {
    week: '1주차',
    label: '기반 세팅',
    color: 'blue',
    tasks: [
      '네이버플레이스 사업장 정보 전면 업데이트',
      '매장 내외부 고화질 사진 10장+ 촬영 및 업로드',
      '카카오채널 예약 자동 메시지 설정',
      '블로그 프로필 및 첫 포스팅 작성',
    ],
  },
  {
    week: '2주차',
    label: '콘텐츠 시작',
    color: 'purple',
    tasks: [
      '블로그 2번째 포스팅 (지역 키워드 집중)',
      '인스타그램 시술 before/after 3장 게시',
      '네이버플레이스 소식 첫 게시 (이달의 이벤트)',
      '기존 고객 리뷰 요청 문자 발송',
    ],
  },
  {
    week: '3주차',
    label: '광고 테스트',
    color: 'cyan',
    tasks: [
      '네이버 검색광고 소액 테스트 (5만원)',
      '인스타그램 지역 타겟 광고 1개 집행',
      '블로그 3번째 포스팅 (두피케어 키워드)',
      '리뷰 답변 및 고객 소통 강화',
    ],
  },
  {
    week: '4주차',
    label: '성과 분석 및 개선',
    color: 'green',
    tasks: [
      '네이버플레이스 조회수 / 클릭수 데이터 확인',
      '광고 효과 분석 — CTR / 예약 전환 측정',
      '블로그 유입 키워드 분석 후 다음 달 주제 결정',
      '신규 고객 수 집계 및 2달차 전략 수립',
    ],
  },
];
