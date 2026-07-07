const criteria = [
  { label: 'Readability', with: true, without: false },
  { label: 'Maintainability', with: true, without: false },
  { label: 'Reusability', with: true, without: false },
  { label: 'Validation', with: true, without: false },
  { label: 'Responsiveness', with: true, without: false },
  { label: 'Accessibility', with: true, without: false },
  { label: 'Error Handling', with: true, without: false },
  { label: 'Naming Convention', with: true, without: false },
  { label: 'Overall Code Quality', with: true, without: false },
]

function CheckIcon() {
  return (
    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function ComparisonTable() {
  return (
    <div className="glass rounded-2xl overflow-hidden animate-fadeIn">
      <div className="px-6 py-4 border-b border-white/10">
        <h3 className="text-lg font-bold gradient-text">Comparison</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">Criteria</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">Without Instructions</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">With Instructions</th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((item, index) => (
              <tr key={item.label} className={`border-b border-white/5 transition-colors hover:bg-white/5 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                <td className="px-6 py-4 text-sm text-gray-300 font-medium">{item.label}</td>
                <td className="px-6 py-4 text-center">
                  {item.without ? <CheckIcon /> : <CrossIcon />}
                </td>
                <td className="px-6 py-4 text-center">
                  {item.with ? <CheckIcon /> : <CrossIcon />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
