import React from 'react'
import { clauses, controls, faqs, glossaryTerms } from '../data/knowledge'
import { includesQuery } from '../lib/text'

export default function SearchPanel({ onNavigate }) {
  const allRecords = [
    ...clauses.map(item => ({ type: 'Cláusula', title: `${item.id}. ${item.title}`, body: item.short, target: 'iso27001' })),
    ...controls.map(item => ({ type: 'Controlo', title: `${item.id} ${item.title}`, body: `${item.theme} · ${item.capability}`, target: 'controls' })),
    ...faqs.map(item => ({ type: 'FAQ', title: item.question, body: item.answer, target: 'faq' })),
    ...glossaryTerms.map(([term, definition]) => ({ type: 'Glossário', title: term, body: definition, target: 'glossary' }))
  ]

  return <SearchPanelInner allRecords={allRecords} onNavigate={onNavigate} />
}

function SearchPanelInner({ allRecords, onNavigate }) {
  const [query, setQuery] = React.useState('')
  const results = query.trim() ? allRecords.filter(record => includesQuery(record, query)).slice(0, 8) : []

  return (
    <div className="glass-card p-5 sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-black text-slate-950 dark:text-white">Pesquisa inteligente</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Procure por risco, auditoria, SoA, fornecedores, cloud, acessos, incidentes ou evidências.</p>
        </div>
        <div className="lg:w-[420px]">
          <input
            className="input-field"
            placeholder="Pesquisar no portal..."
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </div>
      </div>

      {results.length > 0 && (
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {results.map((record, index) => (
            <button key={`${record.type}-${record.title}-${index}`} onClick={() => onNavigate(record.target)} className="rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
              <span className="chip bg-slate-100 text-slate-600 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">{record.type}</span>
              <p className="mt-3 line-clamp-2 text-sm font-black text-slate-950 dark:text-white">{record.title}</p>
              <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500 dark:text-slate-400">{record.body}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
