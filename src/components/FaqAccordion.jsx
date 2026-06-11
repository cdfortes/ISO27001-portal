import React from 'react'
import { faqs } from '../data/knowledge'
import { includesQuery } from '../lib/text'
import SectionTitle from './SectionTitle'

export default function FaqAccordion() {
  const [query, setQuery] = React.useState('')
  const [category, setCategory] = React.useState('Todas')
  const [openIndex, setOpenIndex] = React.useState(0)
  const categories = ['Todas', ...Array.from(new Set(faqs.map(item => item.category)))]
  const filtered = faqs.filter(item => (category === 'Todas' || item.category === category) && includesQuery(item, query))

  return (
    <section className="container-page py-14">
      <SectionTitle eyebrow="FAQ" title="Perguntas frequentes sobre ISO 27001">
        Respostas directas, orientadas à prática, com foco em implementação, evidências e auditoria.
      </SectionTitle>

      <div className="glass-card p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map(item => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  category === item
                    ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <input className="input-field lg:w-[360px]" value={query} onChange={event => setQuery(event.target.value)} placeholder="Pesquisar FAQ..." />
        </div>

        <div className="mt-6 space-y-3">
          {filtered.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={`${item.question}-${index}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                <button onClick={() => setOpenIndex(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                  <div>
                    <span className="chip bg-cyan-50 text-cyan-700 ring-cyan-200 dark:bg-cyan-400/10 dark:text-cyan-200 dark:ring-cyan-400/20">{item.category}</span>
                    <h3 className="mt-3 text-base font-black text-slate-950 dark:text-white">{item.question}</h3>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-xl font-black text-slate-500 dark:bg-slate-800 dark:text-slate-300">{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-200 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:text-slate-300">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
