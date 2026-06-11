import React from 'react'
import { clauses } from '../data/knowledge'
import SectionTitle from './SectionTitle'

export default function ClauseExplorer() {
  const [selectedId, setSelectedId] = React.useState('6')
  const selected = clauses.find(clause => clause.id === selectedId) ?? clauses[0]

  return (
    <section className="container-page py-14">
      <SectionTitle eyebrow="ISO/IEC 27001" title="Explorador das cláusulas 4 a 10">
        Navegue pelos requisitos de gestão do SGSI, com intenção prática, evidências esperadas e perguntas úteis para auditoria interna.
      </SectionTitle>

      <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
        <div className="grid gap-3">
          {clauses.map(clause => (
            <button
              key={clause.id}
              onClick={() => setSelectedId(clause.id)}
              className={`rounded-2xl border p-4 text-left transition ${
                selectedId === clause.id
                  ? 'border-cyan-300 bg-cyan-50 shadow-md dark:border-cyan-400/40 dark:bg-cyan-400/10'
                  : 'border-slate-200 bg-white hover:border-cyan-200 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-400/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-sm font-black text-white dark:bg-white dark:text-slate-950">{clause.id}</span>
                <div>
                  <p className="font-black text-slate-950 dark:text-white">{clause.title}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{clause.short}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <article className="glass-card overflow-hidden">
          <div className="border-b border-slate-200 bg-white/80 p-6 dark:border-slate-800 dark:bg-slate-900/80">
            <span className="chip bg-slate-100 text-slate-700 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700">Cláusula {selected.id}</span>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950 dark:text-white">{selected.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{selected.intent}</p>
          </div>

          <div className="grid gap-5 p-6 md:grid-cols-2">
            <InfoList title="Foco prático" items={selected.highlights} />
            <InfoList title="Evidências típicas" items={selected.evidence} />
            <div className="md:col-span-2">
              <InfoList title="Perguntas de auditoria" items={selected.auditQuestions} ordered />
            </div>
            <div className="md:col-span-2 rounded-2xl bg-slate-950 p-5 text-white dark:bg-slate-800">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Lente de risco</p>
              <p className="mt-3 text-sm leading-6 text-slate-100">{selected.riskLens}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

function InfoList({ title, items, ordered = false }) {
  const ListTag = ordered ? 'ol' : 'ul'
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
      <h4 className="font-black text-slate-950 dark:text-white">{title}</h4>
      <ListTag className={`mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300 ${ordered ? 'list-decimal pl-5' : ''}`}>
        {items.map(item => (
          <li key={item} className={ordered ? '' : 'flex gap-3'}>
            {!ordered && <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />}
            <span>{item}</span>
          </li>
        ))}
      </ListTag>
    </div>
  )
}
