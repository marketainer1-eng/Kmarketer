const variants = {
  blue: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
  purple: 'bg-purple-500/15 text-purple-400 border border-purple-500/30',
  cyan: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30',
  green: 'bg-green-500/15 text-green-400 border border-green-500/30',
  orange: 'bg-orange-500/15 text-orange-400 border border-orange-500/30',
  red: 'bg-red-500/15 text-red-400 border border-red-500/30',
  gray: 'bg-gray-500/15 text-gray-400 border border-gray-500/30',
};

export default function Badge({ children, variant = 'blue', className = '' }) {
  return (
    <span className={`badge ${variants[variant] || variants.blue} ${className}`}>
      {children}
    </span>
  );
}
