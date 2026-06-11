export default function SectionTitle({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={`mb-8 ${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{children}</p>}
    </div>
  )
}
