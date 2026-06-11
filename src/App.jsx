import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import SearchPanel from './components/SearchPanel'
import ClauseExplorer from './components/ClauseExplorer'
import ControlExplorer from './components/ControlExplorer'
import FaqAccordion from './components/FaqAccordion'
import AssistantPanel from './components/AssistantPanel'
import ImplementationChecklist from './components/ImplementationChecklist'
import AuditHub from './components/AuditHub'
import Glossary from './components/Glossary'
import SectionTitle from './components/SectionTitle'
import { clauses, controls, implementationSteps } from './data/knowledge'

export default function App() {
  const [view, setView] = React.useState('home')
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  function navigate(nextView) {
    setView(nextView)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <Header currentView={view} onNavigate={navigate} darkMode={darkMode} onToggleDark={() => setDarkMode(value => !value)} />
      <main>
        {view === 'home' && <HomePage onNavigate={navigate} />}
        {view === 'iso27001' && <ClauseExplorer />}
        {view === 'controls' && <ControlExplorer />}
        {view === 'implementation' && <ImplementationChecklist />}
        {view === 'audit' && <AuditHub />}
        {view === 'faq' && <FaqAccordion />}
        {view === 'assistant' && <AssistantPanel />}
        {view === 'glossary' && <Glossary />}
      </main>
      <Footer />
    </div>
  )
}

function HomePage({ onNavigate }) {
  const pillars = [
    {
      title: 'Aprender',
      text: 'Entenda o SGSI, o contexto, a gestão de riscos, a Declaração de Aplicabilidade e a lógica das cláusulas 4 a 10.',
      target: 'iso27001'
    },
    {
      title: 'Aplicar',
      text: 'Use o roadmap, exemplos de evidência e o explorador de controlos para transformar requisitos em execução.',
      target: 'implementation'
    },
    {
      title: 'Auditar',
      text: 'Prepare auditorias internas com perguntas por cláusula, critérios, evidências e seguimento de não conformidades.',
      target: 'audit'
    }
  ]

  const themeCounts = ['Organizacional', 'Pessoas', 'Físico', 'Tecnológico'].map(theme => ({
    theme,
    count: controls.filter(control => control.theme === theme).length
  }))

  return (
    <>
      <Hero onNavigate={onNavigate} />
      <section className="container-page pb-10">
        <SearchPanel onNavigate={onNavigate} />
      </section>

      <section className="container-page py-14">
        <SectionTitle eyebrow="Estrutura" title="Três pilares do portal" align="center">
          O site foi desenhado como uma plataforma de conhecimento e apoio prático, não como reprodução integral da norma.
        </SectionTitle>
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <button key={pillar.title} onClick={() => onNavigate(pillar.target)} className="card text-left">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white dark:bg-white dark:text-slate-950">0{index + 1}</span>
              <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{pillar.text}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-6 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
          <div className="glass-card p-6">
            <SectionTitle eyebrow="ISO 27001" title="Mapa rápido das cláusulas">
              A navegação principal da ISO 27001 está organizada por contexto, liderança, planeamento, apoio, operação, avaliação e melhoria.
            </SectionTitle>
            <div className="grid gap-3 sm:grid-cols-2">
              {clauses.map(clause => (
                <button key={clause.id} onClick={() => onNavigate('iso27001')} className="rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-300">Cláusula {clause.id}</span>
                  <h3 className="mt-2 font-black text-slate-950 dark:text-white">{clause.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{clause.short}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <SectionTitle eyebrow="ISO 27002" title="Controlos por tema">
              A ISO 27002 organiza os controlos em quatro temas, úteis para filtros, dashboards e matrizes de implementação.
            </SectionTitle>
            <div className="space-y-4">
              {themeCounts.map(item => (
                <button key={item.theme} onClick={() => onNavigate('controls')} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <span className="font-black text-slate-950 dark:text-white">{item.theme}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-black text-slate-600 dark:bg-slate-800 dark:text-slate-300">{item.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <SectionTitle eyebrow="Roadmap" title="Da intenção à evidência" align="center">
          Cada actividade deve deixar rasto: responsável, critério, documento, registo, resultado e revisão.
        </SectionTitle>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {implementationSteps.slice(0, 8).map(([id, title, description]) => (
            <div key={id} className="card">
              <span className="text-xs font-black text-cyan-600 dark:text-cyan-300">{id}</span>
              <h3 className="mt-2 font-black text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
