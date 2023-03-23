import { Warning, Check } from '@phosphor-icons/react'

export function VeracityChip(fake?) {
  return (
    <div
      className={`flex items-center gap-2 rounded p-2 ${
        fake == 'FAKE' ? 'bg-brand-orange' : 'bg-brand'
      }`}
    >
      {fake == 'FAKE' ? (
        <Warning size={24} color="white" />
      ) : (
        <Check size={24} color="white" />
      )}
      <p className="text-base font-medium text-white">{fake}</p>
    </div>
  )
}
