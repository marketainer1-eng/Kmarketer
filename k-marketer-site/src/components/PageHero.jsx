import Badge from './Badge';

export default function PageHero({ badge, title, subtitle, children }) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 animated-bg pointer-events-none" />
      <div className="absolute inset-0 hero-grid pointer-events-none opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          {badge && (
            <div className="mb-4">
              <Badge variant={badge.variant || 'blue'}>{badge.label}</Badge>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
