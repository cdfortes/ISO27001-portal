export function normalizeText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export function includesQuery(record, query) {
  const q = normalizeText(query)
  if (!q) return true
  return normalizeText(JSON.stringify(record)).includes(q)
}

export function getThemeClasses(theme) {
  const map = {
    Organizacional: 'bg-cyan-50 text-cyan-700 ring-cyan-200 dark:bg-cyan-400/10 dark:text-cyan-200 dark:ring-cyan-400/20',
    Pessoas: 'bg-violet-50 text-violet-700 ring-violet-200 dark:bg-violet-400/10 dark:text-violet-200 dark:ring-violet-400/20',
    Físico: 'bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-200 dark:ring-amber-400/20',
    Tecnológico: 'bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-200 dark:ring-emerald-400/20'
  }
  return map[theme] ?? 'bg-slate-50 text-slate-700 ring-slate-200 dark:bg-slate-400/10 dark:text-slate-200 dark:ring-slate-400/20'
}
