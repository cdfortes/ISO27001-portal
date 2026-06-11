const navItems = [
  ['home', 'Início'],
  ['iso27001', 'ISO 27001'],
  ['controls', 'Controlos'],
  ['implementation', 'Implementação'],
  ['audit', 'Auditoria'],
  ['faq', 'FAQ'],
  ['assistant', 'Pergunte'],
  ['glossary', 'Glossário']
]

export default function Header({ currentView, onNavigate, darkMode, onToggleDark }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="container-page flex min-h-20 items-center justify-between gap-4 py-3">
        <button onClick={() => onNavigate('home')} className="group flex items-center gap-3 text-left">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-glow dark:bg-white dark:text-slate-950">
            27
          </span>
          <span>
            <span className="block text-sm font-black tracking-tight sm:text-base">ISO 27001 Hub</span>
            <span className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">SGSI, risco, controlos e auditoria</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                currentView === id
                  ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <select
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 outline-none lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            value={currentView}
            onChange={event => onNavigate(event.target.value)}
            aria-label="Navegação principal"
          >
            {navItems.map(([id, label]) => (
              <option key={id} value={id}>{label}</option>
            ))}
          </select>
          <button
            onClick={onToggleDark}
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            aria-label="Alternar tema"
          >
            {darkMode ? 'Claro' : 'Escuro'}
          </button>
        </div>
      </div>
    </header>
  )
}
