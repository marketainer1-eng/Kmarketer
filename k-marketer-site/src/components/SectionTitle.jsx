export default function SectionTitle({ label, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  
  return (
    <div className={`flex flex-col ${alignClass} mb-10`}>
      {label && (
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
