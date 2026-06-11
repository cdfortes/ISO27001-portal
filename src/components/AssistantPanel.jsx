import React from 'react'
import { assistantAnswers, faqs } from '../data/knowledge'
import { normalizeText } from '../lib/text'
import SectionTitle from './SectionTitle'

const quickQuestions = [
  'O que é a Declaração de Aplicabilidade?',
  'Como preparar uma auditoria interna?',
  'Que evidências preciso para avaliação de riscos?',
  'Qual a diferença entre ISO 27001 e ISO 27002?'
]

export default function AssistantPanel() {
  const [question, setQuestion] = React.useState('')
  const [history, setHistory] = React.useState([
    {
      role: 'assistant',
      content: 'Faça uma pergunta sobre SGSI, risco, auditoria, evidências, controlos ou ISO 27002. Este assistente é local e usa respostas pré-configuradas para o MVP.'
    }
  ])

  function answerQuestion(text) {
    const normal = normalizeText(text)
    const found = assistantAnswers.find(item => item.keywords.some(keyword => normal.includes(normalizeText(keyword))))
    const faq = faqs.find(item => normal.includes(normalizeText(item.question).slice(0, 16)))

    if (found) {
      return {
        role: 'assistant',
        structured: found
      }
    }

    if (faq) {
      return {
        role: 'assistant',
        structured: {
          title: faq.question,
          answer: faq.answer,
          reference: 'FAQ do portal',
          evidence: ['Validar requisito aplicável', 'confirmar documentação', 'ligar ao risco e ao controlo']
        }
      }
    }

    return {
      role: 'assistant',
      structured: {
        title: 'Resposta geral',
        answer: 'Não encontrei uma resposta específica no MVP. Para uma análise rigorosa, relacione a pergunta com uma cláusula ISO 27001, um controlo ISO 27002, o risco tratado e a evidência disponível.',
        reference: 'Base de conhecimento local do portal',
        evidence: ['cláusula aplicável', 'controlo relacionado', 'registo ou evidência objectiva']
      }
    }
  }

  function submit(text = question) {
    if (!text.trim()) return
    const userMessage = { role: 'user', content: text.trim() }
    const assistantMessage = answerQuestion(text)
    setHistory(current => [...current, userMessage, assistantMessage])
    setQuestion('')
  }

  return (
    <section className="container-page py-14">
      <SectionTitle eyebrow="Assistente" title="Pergunte à ISO 27001">
        Um assistente local de demonstração para responder a dúvidas frequentes com resposta directa, referência e exemplos de evidência.
      </SectionTitle>

      <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
        <aside className="glass-card p-5 sm:p-6">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">Perguntas rápidas</h3>
          <div className="mt-4 space-y-3">
            {quickQuestions.map(item => (
              <button key={item} onClick={() => submit(item)} className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                {item}
              </button>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
            Para produção, pode ligar este painel a uma API própria com pesquisa semântica, desde que responda apenas com conteúdo autorizado e referencie cláusulas/controlos.
          </div>
        </aside>

        <div className="glass-card flex min-h-[620px] flex-col overflow-hidden">
          <div className="border-b border-slate-200 p-5 dark:border-slate-800">
            <p className="text-sm font-black text-slate-950 dark:text-white">Conversa</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Modo MVP: respostas baseadas em palavras-chave e FAQ.</p>
          </div>

          <div className="flex-1 space-y-4 overflow-auto p-5">
            {history.map((message, index) => (
              <Message key={index} message={message} />
            ))}
          </div>

          <form
            onSubmit={event => {
              event.preventDefault()
              submit()
            }}
            className="border-t border-slate-200 p-4 dark:border-slate-800"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <input className="input-field" value={question} onChange={event => setQuestion(event.target.value)} placeholder="Escreva a sua pergunta..." />
              <button className="btn-primary shrink-0" type="submit">Perguntar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Message({ message }) {
  if (message.role === 'user') {
    return (
      <div className="ml-auto max-w-[84%] rounded-3xl bg-slate-950 px-5 py-4 text-sm leading-6 text-white dark:bg-white dark:text-slate-950">
        {message.content}
      </div>
    )
  }

  if (message.structured) {
    const { title, answer, reference, evidence } = message.structured
    return (
      <div className="max-w-[92%] rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <p className="text-base font-black text-slate-950 dark:text-white">{title}</p>
        <p className="mt-3 text-slate-600 dark:text-slate-300"><strong>Resposta:</strong> {answer}</p>
        <p className="mt-3 text-slate-600 dark:text-slate-300"><strong>Referência:</strong> {reference}</p>
        <div className="mt-3">
          <p className="font-bold text-slate-950 dark:text-white">Evidências úteis</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {evidence.map(item => (
              <span key={item} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200">{item}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[88%] rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
      {message.content}
    </div>
  )
}
