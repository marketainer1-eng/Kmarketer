export default function ComparisonTable({ rows, brandA, brandB }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-dark-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-dark-border bg-dark-surface">
            <th className="text-left px-5 py-4 text-gray-400 font-semibold w-1/4">항목</th>
            <th className="text-left px-5 py-4 font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-blue-400">{brandA}</span>
              </div>
            </th>
            <th className="text-left px-5 py-4 font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-400" />
                <span className="text-gray-300">{brandB}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={row.label}
              className={`border-b border-dark-border/50 transition-colors hover:bg-dark-surface/50 ${
                idx % 2 === 0 ? 'bg-transparent' : 'bg-dark-surface/20'
              }`}
            >
              <td className="px-5 py-4 text-gray-400 font-medium align-top">{row.label}</td>
              <td className="px-5 py-4 text-gray-200 align-top leading-relaxed">{row.brandA}</td>
              <td className="px-5 py-4 text-gray-300 align-top leading-relaxed">{row.brandB}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
