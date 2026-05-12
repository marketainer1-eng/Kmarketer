import Badge from './Badge';

export default function PersonaCard({ persona }) {
  return (
    <div className="card-dark border border-purple-500/20 shadow-glow-purple">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/30 flex items-center justify-center text-2xl flex-shrink-0">
          {persona.avatar}
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{persona.name}</h3>
          <p className="text-gray-400 text-sm">{persona.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {persona.tags?.map((tag) => (
              <Badge key={tag} variant="purple">{tag}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {persona.traits?.map((trait) => (
          <div key={trait.label} className="bg-dark-surface rounded-lg p-3 border border-dark-border">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{trait.label}</p>
            <p className="text-gray-200 text-sm leading-relaxed">{trait.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
