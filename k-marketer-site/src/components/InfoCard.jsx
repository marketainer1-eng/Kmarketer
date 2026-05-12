export default function InfoCard({ icon, title, description, badge, glowColor = 'blue', children }) {
  const glowClasses = {
    blue: 'hover:border-blue-500/30 hover:shadow-glow-blue',
    purple: 'hover:border-purple-500/30 hover:shadow-glow-purple',
    cyan: 'hover:border-cyan-500/30 hover:shadow-glow-cyan',
  };

  const iconBgClasses = {
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30',
    orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30',
  };

  return (
    <div className={`card-dark card-hover ${glowClasses[glowColor] || glowClasses.blue}`}>
      {icon && (
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${iconBgClasses[glowColor] || iconBgClasses.blue} border flex items-center justify-center mb-4 text-xl`}>
          {icon}
        </div>
      )}
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-white font-bold text-base leading-snug">{title}</h3>
        {badge && <span className="ml-2 flex-shrink-0">{badge}</span>}
      </div>
      {description && (
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      )}
      {children}
    </div>
  );
}
