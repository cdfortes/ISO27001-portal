import React from 'react'
import { controls } from '../data/knowledge'
import { getThemeClasses, includesQuery } from '../lib/text'
import SectionTitle from './SectionTitle'

const themes = ['Todos', 'Organizacional', 'Pessoas', 'Físico', 'Tecnológico']

export default function ControlExplorer() {
  const [theme, setTheme] = React.useState('Todos')
  const [query, setQuery] = React.useState('')
  const [selected, setSelected] = React.useState(controls[0])

  const filtered = controls.filter(control => {
    const themeMatch = theme === 'Todos' || control.theme === theme
    return themeMatch && includesQuery(control, query)
  })

  React.useEffect(() => {
    if (!filtered.some(item => item.id === selected?.id)) {
      setSelected(filtered[0] ?? controls[0])
    }
  }, [theme, query])

  const counts = themes.slice(1).map(item => [item, controls.filter(control => control.theme === item).length])

  return (
    <section className="container-page py-14">
      <SectionTitle eyebrow="ISO/IEC 27002" title="Explorador de controlos">
        Consulte os controlos por tema, pesquise capacidades operacionais e veja exemplos de evidência sem reproduzir a orientação normativa completa.
      </SectionTitle>

      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {counts.map(([label, count]) => (
          <button key={label} onClick={() => setTheme(label)} className="card text-left">
            <span className={`chip ${getThemeClasses(label)}`}>{label}</span>
            <p className="mt-4 text-3xl font-black text-slate-950 dark:text-white">{count}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">controlos mapeados</p>
          </button>
        ))}
      </div>

      <div className="glass-card p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {themes.map(item => (
              <button
                key={item}
                onClick={() => setTheme(item)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  theme === item
                    ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <input className="input-field lg:w-[360px]" value={query} onChange={event => setQuery(event.target.value)} placeholder="Pesquisar controlos..." />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.48fr_0.52fr]">
          <div className="max-h-[700px] space-y-3 overflow-auto pr-1">
            {filtered.map(control => (
              <button
                key={control.id}
                onClick={() => setSelected(control)}
                className={`w-full rounded-2xl border p-4 text-left transition ${
                  selected?.id === control.id
                    ? 'border-cyan-300 bg-cyan-50 dark:border-cyan-400/40 dark:bg-cyan-400/10'
                    : 'border-slate-200 bg-white hover:border-cyan-200 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-cyan-400/30'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-slate-950 dark:text-white">{control.id} · {control.title}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{control.capability}</p>
                  </div>
                  <span className={`chip shrink-0 ${getThemeClasses(control.theme)}`}>{control.theme}</span>
                </div>
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Não foram encontrados controlos para esta pesquisa.
              </div>
            )}
          </div>

          {selected && (
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip bg-slate-100 text-slate-700 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700">{selected.id}</span>
                <span className={`chip ${getThemeClasses(selected.theme)}`}>{selected.theme}</span>
                <span className="chip bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-200 dark:ring-emerald-400/20">{selected.controlType}</span>
              </div>
              <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">{selected.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{selected.summary}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <MiniCard title="Capacidade operacional" value={selected.capability} />
                <MiniCard title="Conceito cibernético" value={selected.cyberConcept} />
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-5 dark:bg-slate-900">
                <h4 className="font-black text-slate-950 dark:text-white">Como aplicar no site</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{selected.implementationHint}</p>
              </div>

              <div className="mt-6">
                <h4 className="font-black text-slate-950 dark:text-white">Exemplos de evidência</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.evidence.map(item => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-300">{item}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-100">
                Não use este resumo como substituto da orientação completa da norma. Associe sempre o controlo ao risco, ao proprietário, ao estado de implementação e à evidência.
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}

function MiniCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{title}</p>
      <p className="mt-2 text-sm font-black text-slate-950 dark:text-white">{value}</p>
    </div>
  )
}
