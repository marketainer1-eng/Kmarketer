import { useState } from 'react';
import Badge from './Badge';

export default function ChecklistCard({ category, onProgressChange }) {
  const [checked, setChecked] = useState({});

  const toggle = (itemId) => {
    setChecked((prev) => {
      const next = { ...prev, [itemId]: !prev[itemId] };
      const count = Object.values(next).filter(Boolean).length;
      onProgressChange?.(category.id, count, category.items.length);
      return next;
    });
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const total = category.items.length;
  const pct = total > 0 ? Math.round((checkedCount / total) * 100) : 0;

  const badgeVariantMap = {
    '네이버플레이스': 'green',
    '인스타그램': 'purple',
    '블로그': 'orange',
    '리뷰 관리': 'cyan',
    '광고': 'blue',
    'AI 자동화': 'blue',
    'GEO / FAQ': 'cyan',
  };

  return (
    <div className="card-dark flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-3">
          <div className="text-2xl mt-0.5">{category.icon}</div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-white font-bold">{category.title}</h3>
              <Badge variant={badgeVariantMap[category.title] || 'blue'}>{category.tag}</Badge>
            </div>
            <p className="text-gray-400 text-xs mt-0.5">{category.description}</p>
          </div>
        </div>
        <div className="flex-shrink-0 text-right">
          <span className={`text-lg font-black ${pct === 100 ? 'text-green-400' : 'text-blue-400'}`}>
            {pct}%
          </span>
          <p className="text-gray-600 text-xs">{checkedCount}/{total}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-dark-surface rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            pct === 100
              ? 'bg-gradient-to-r from-green-500 to-emerald-400'
              : 'bg-gradient-to-r from-blue-500 to-purple-500'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Items */}
      <ul className="space-y-1">
        {category.items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              className="checklist-item w-full text-left"
            >
              <div className={`checkbox-custom ${checked[item.id] ? 'checked' : ''}`}>
                {checked[item.id] && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className={`text-sm leading-relaxed transition-colors duration-200 ${
                checked[item.id] ? 'text-gray-500 line-through' : 'text-gray-200'
              }`}>
                {item.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
