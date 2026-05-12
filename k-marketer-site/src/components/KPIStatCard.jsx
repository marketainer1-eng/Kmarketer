export default function KPIStatCard({ icon, label, value, target, unit = '', color = 'blue' }) {
  const colorMap = {
    blue: { border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400', glow: 'shadow-glow-blue' },
    purple: { border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400', glow: 'shadow-glow-purple' },
    cyan: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-glow-cyan' },
    green: { border: 'border-green-500/30', bg: 'bg-green-500/10', text: 'text-green-400', glow: '' },
    orange: { border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-400', glow: '' },
  };

  const c = colorMap[color] || colorMap.blue;

  return (
    <div className={`card-dark border ${c.border} ${c.glow} transition-all duration-300 hover:-translate-y-1`}>
      <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center text-xl mb-3`}>
        {icon}
      </div>
      <p className="text-gray-400 text-xs mb-1">{label}</p>
      <p className={`text-2xl font-black ${c.text} leading-none`}>
        {value}
        {unit && <span className="text-sm font-normal ml-1 text-gray-500">{unit}</span>}
      </p>
      {target && (
        <p className="text-gray-600 text-xs mt-2">목표: {target}</p>
      )}
    </div>
  );
}
