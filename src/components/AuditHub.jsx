import React from 'react'
import { auditFocus, clauses } from '../data/knowledge'
import SectionTitle from './SectionTitle'

export default function AuditHub() {
  const [clauseId, setClauseId] = React.useState('9')
  const selected = clauses.find(item => item.id === clauseId) ?? clauses[0]

  return (
    <section className="container-page py-14">
      <SectionTitle eyebrow="Auditoria" title="Preparação para auditoria interna ISO 27001">
        Estruture auditorias por critérios, âmbito, perguntas, evidências e seguimento de constatações. A abordagem foi desenhada para ser compatível com boas práticas de auditoria de sistemas de gestão.
      </SectionTitle>

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {auditFocus.map(item => (
          <div key={item.phase} className="card">
            <p className="text-sm font-black text-slate-950 dark:text-white">{item.phase}</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {item.items.map(point => (
                <li key={point} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="glass-card p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-black text-slate-950 dark:text-white">Banco de perguntas por cláusula</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Seleccione a cláusula e use as perguntas como ponto de partida para entrevistas e amostragem.</p>
          </div>
          <select className="input-field lg:w-[320px]" value={clauseId} onChange={event => setClauseId(event.target.value)}>
            {clauses.map(clause => <option key={clause.id} value={clause.id}>Cláusula {clause.id} — {clause.title}</option>)}
          </select>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-950 p-6 text-white dark:bg-slate-900">
            <span className="chip bg-white/10 text-cyan-100 ring-white/20">Cláusula {selected.id}</span>
            <h4 className="mt-4 text-2xl font-black">{selected.title}</h4>
            <p className="mt-4 text-sm leading-7 text-slate-200">{selected.intent}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <h4 className="font-black text-slate-950 dark:text-white">Perguntas de auditoria</h4>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {selected.auditQuestions.map(question => <li key={question}>{question}</li>)}
            </ol>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950 lg:col-span-2">
            <h4 className="font-black text-slate-950 dark:text-white">Evidências a amostrar</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {selected.evidence.map(item => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-300">{item}</span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Registe constatações com evidência objectiva, critério auditado, descrição clara, impacto, causa provável e prazo de acção correctiva quando aplicável.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
