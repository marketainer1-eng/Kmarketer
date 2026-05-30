import { useState } from 'react';
import Badge from './Badge';

const contactInfo = [
  { icon: '📧', label: '이메일', value: 'contact@k-marketer.kr' },
  { icon: '📱', label: '카카오톡', value: '@k-marketer' },
  { icon: '🕐', label: '운영시간', value: '평일 09:00 – 18:00' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', contact: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-t border-dark-border">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Badge variant="blue" className="mb-4">Contact</Badge>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
            지금 바로 <span className="gradient-text">무료 상담</span>을 신청하세요
          </h2>
          <p className="text-gray-400">어떤 프로그램이 맞는지 전문가가 직접 안내해드립니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="card-dark">
              <h3 className="text-white font-bold mb-6">연락처 정보</h3>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-lg flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">{c.label}</div>
                      <div className="text-white font-medium">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-dark border-purple-500/20">
              <h3 className="text-white font-bold mb-3">K-마케터 아카데미</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                온라인 교육 플랫폼에서 자기 속도에 맞게 학습하세요.
              </p>
              <a
                href="https://kmarketer-d4wf7pgz.manus.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                아카데미 방문하기 →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="card-dark">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-white font-bold text-xl mb-2">신청이 완료되었습니다!</h3>
                <p className="text-gray-400 text-sm">1-2 영업일 내 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">이름 *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">연락처 (이메일 또는 전화번호) *</label>
                  <input
                    type="text"
                    name="contact"
                    required
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">관심 분야</label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="basic">디지털 마케팅 기초</option>
                    <option value="standard">실전 마케팅 마스터</option>
                    <option value="pro">AI 마케팅 전문가</option>
                    <option value="consulting">1:1 컨설팅</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">문의 내용</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="궁금한 점을 자유롭게 적어주세요."
                    className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  무료 상담 신청하기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
