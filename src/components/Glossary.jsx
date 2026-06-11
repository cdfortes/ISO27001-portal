import React from 'react'
import { glossaryTerms } from '../data/knowledge'
import { normalizeText } from '../lib/text'
import SectionTitle from './SectionTitle'

export default function Glossary() {
  const [query, setQuery] = React.useState('')
  const filtered = glossaryTerms.filter(([term, definition]) => normalizeText(`${term} ${definition}`).includes(normalizeText(query)))

  return (
    <section className="container-page py-14">
      <SectionTitle eyebrow="Glossário" title="Termos essenciais do SGSI">
        Um glossário prático para alinhar linguagem entre segurança, gestão, tecnologia e auditoria.
      </SectionTitle>

      <div className="glass-card p-5 sm:p-6">
        <input className="input-field" value={query} onChange={event => setQuery(event.target.value)} placeholder="Pesquisar termo..." />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map(([term, definition]) => (
            <div key={term} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
              <h3 className="text-lg font-black text-slate-950 dark:text-white">{term}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{definition}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
