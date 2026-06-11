export default function Hero({ onNavigate }) {
  const stats = [
    ['7', 'cláusulas principais'],
    ['93', 'controlos ISO 27002'],
    ['4', 'temas de controlo'],
    ['1', 'visão integrada do SGSI']
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid bg-[length:36px_36px]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/10" />
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="section-eyebrow">Portal SGSI moderno</span>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              ISO 27001 explicada de forma simples, prática e auditável.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Um site React com pesquisa, FAQ, explorador de cláusulas, controlos ISO 27002, checklist de implementação e assistente de dúvidas para apoiar equipas de segurança, compliance e auditoria.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="btn-primary" onClick={() => onNavigate('iso27001')}>Explorar ISO 27001</button>
              <button className="btn-secondary" onClick={() => onNavigate('assistant')}>Tirar uma dúvida</button>
              <button className="btn-secondary" onClick={() => onNavigate('audit')}>Preparar auditoria</button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
                  <p className="text-2xl font-black text-slate-950 dark:text-white">{value}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-4 sm:p-6">
            <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-glow dark:bg-slate-900">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Dashboard SGSI</p>
                  <h3 className="mt-2 text-2xl font-black">Visão executiva</h3>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200 ring-1 ring-emerald-300/20">MVP</span>
              </div>
              <div className="space-y-4">
                {[
                  ['Contexto e âmbito', 'Cláusula 4', '85%'],
                  ['Gestão de riscos', 'Cláusula 6', '72%'],
                  ['Auditoria interna', 'Cláusula 9.2', '64%'],
                  ['Melhoria contínua', 'Cláusula 10', '58%']
                ].map(([name, ref, width]) => (
                  <div key={name} className="rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-bold">{name}</span>
                      <span className="text-slate-300">{ref}</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-cyan-300" style={{ width }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50 ring-1 ring-cyan-200/20">
                O conteúdo é interpretativo: apresenta conceitos, evidências e perguntas de auditoria sem copiar integralmente a norma.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
