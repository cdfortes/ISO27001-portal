export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-10 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container-page grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-center">
        <div>
          <p className="text-sm font-black text-slate-950 dark:text-white">ISO 27001 Hub</p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            Conteúdo interpretativo para apoio à compreensão, implementação e auditoria de um SGSI. Não substitui as normas oficiais nem reproduz integralmente texto normativo protegido.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          <strong className="text-slate-950 dark:text-white">Nota:</strong> valide sempre requisitos, evidências e decisões de conformidade com a norma oficial aplicável e com auditores competentes.
        </div>
      </div>
    </footer>
  )
}
