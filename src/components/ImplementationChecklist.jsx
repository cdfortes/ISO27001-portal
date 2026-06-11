import React from 'react'
import { implementationSteps } from '../data/knowledge'
import SectionTitle from './SectionTitle'

export default function ImplementationChecklist() {
  const [done, setDone] = React.useState(['01', '02'])
  const progress = Math.round((done.length / implementationSteps.length) * 100)

  function toggle(id) {
    setDone(current => (current.includes(id) ? current.filter(item => item !== id) : [...current, id]))
  }

  return (
    <section className="container-page py-14">
      <SectionTitle eyebrow="Implementação" title="Roadmap prático de SGSI">
        Um roteiro interactivo para transformar os requisitos da ISO 27001 em actividades, evidências e melhoria contínua.
      </SectionTitle>

      <div className="grid gap-6 lg:grid-cols-[0.32fr_0.68fr]">
        <aside className="glass-card h-fit p-6">
          <p className="text-sm font-black text-slate-950 dark:text-white">Progresso do MVP</p>
          <p className="mt-2 text-5xl font-black tracking-tight text-slate-950 dark:text-white">{progress}%</p>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div className="h-full rounded-full bg-cyan-400 transition-all" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Esta checklist é demonstrativa. Em produção, deve ser ligada a responsáveis, prazos, evidências, riscos e estado de aprovação.
          </p>
        </aside>

        <div className="space-y-3">
          {implementationSteps.map(([id, title, description]) => {
            const isDone = done.includes(id)
            return (
              <button key={id} onClick={() => toggle(id)} className="group w-full rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div className="flex gap-4">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-sm font-black transition ${isDone ? 'bg-cyan-400 text-slate-950' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300'}`}>
                    {isDone ? 'OK' : id}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-slate-950 dark:text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
