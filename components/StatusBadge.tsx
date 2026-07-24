import { getMetafieldValue } from '@/lib/cosmic'

interface StatusBadgeProps {
  value: unknown
}

function colorFor(status: string): string {
  const s = status.toLowerCase()
  if (s.includes('active') || s.includes('connected') || s.includes('published') || s.includes('نشط') || s.includes('متصل')) {
    return 'bg-green-100 text-green-700'
  }
  if (s.includes('pending') || s.includes('scheduled') || s.includes('draft') || s.includes('مجدول') || s.includes('مسودة')) {
    return 'bg-amber-100 text-amber-700'
  }
  if (s.includes('inactive') || s.includes('disconnected') || s.includes('suspended') || s.includes('غير') || s.includes('معلق')) {
    return 'bg-red-100 text-red-700'
  }
  return 'bg-gray-100 text-gray-700'
}

export default function StatusBadge({ value }: StatusBadgeProps) {
  const label = getMetafieldValue(value)
  if (!label) return null
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorFor(label)}`}>
      {label}
    </span>
  )
}