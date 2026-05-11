import { useState } from 'react'

const faqs = [
  {
    q: 'Quais são os sintomas de endometriose?',
    a: 'Os principais sinais são cólicas intensas antes e durante a menstruação, dor pélvica fora do período, dor durante a relação sexual, sangramento intenso e dificuldade para engravidar. Mas endometriose pode ser silenciosa por isso o diagnóstico especializado é fundamental.',
  },
  {
    q: 'Endometriose tem cura? Precisa operar?',
    a: 'Não existe cura definitiva, mas tem tratamento eficaz que devolve qualidade de vida. A cirurgia é indicada em casos específicos e pode proporcionar alívio duradouro. O Dr. Cadu avalia cada caso individualmente para indicar o melhor caminho clínico ou cirúrgico.',
  },
  {
    q: 'A cirurgia de vesícula é perigosa?',
    a: 'A colecistectomia videolaparoscópica é uma das cirurgias mais seguras e realizadas no mundo. Com um cirurgião experiente, o procedimento dura cerca de 1 hora, com alta no mesmo dia ou no dia seguinte e retorno às atividades em 2 a 5 dias.',
  },
  {
    q: 'Onde fica o consultório do Dr. Cadu Queiroz em Fortaleza?',
    a: '[Inserir endereço completo com bairro e CEP obrigatório para SEO local e Google Meu Negócio]. Entre em contato pelo WhatsApp para confirmar localização, horários e disponibilidade.',
  },
  {
    q: 'O Dr. Cadu Queiroz atende por convênio ou particular?',
    a: '[Inserir informação atualizada sobre convênios aceitos e valores de consulta particular]. Entre em contato para obter essa informação diretamente.',
  },
]

interface AccordionItemProps {
  q: string
  a: string
  index: number
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ q, a, index, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? 'rgba(9, 38, 74, 0.7)' : 'rgba(9, 38, 74, 0.35)',
        border: isOpen ? '1px solid rgba(11,194,233,0.35)' : '1px solid rgba(11,194,233,0.1)',
        boxShadow: isOpen ? '0 0 30px rgba(11,194,233,0.1)' : 'none',
      }}
      data-aos="fade-up"
      data-aos-delay={60 + index * 60}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              background: isOpen ? '#0BC2E9' : 'rgba(11,194,233,0.1)',
              color: isOpen ? '#020F1E' : '#0BC2E9',
              border: '1px solid rgba(11,194,233,0.3)',
              transition: 'all 0.3s',
            }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-brand-white font-semibold text-base leading-snug group-hover:text-brand-cyan transition-colors duration-200">
            {q}
          </span>
        </div>
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: 'rgba(11,194,233,0.08)',
            border: '1px solid rgba(11,194,233,0.2)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}>
          <svg className="w-4 h-4 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>

      {/* Answer — animated height via max-height */}
      <div
        style={{
          maxHeight: isOpen ? '400px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="px-6 pb-6 pl-[4.75rem]">
          <div className="h-px mb-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, rgba(11,194,233,0.3), transparent)' }} />
          <p className="text-brand-gray text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #020F1E 0%, #09264A 50%, #020F1E 100%)' }}>

      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-16">

        {/* Section label */}
        <div className="flex justify-center mb-4" data-aos="fade-up">
          <span className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(11,194,233,0.08)', border: '1px solid rgba(11,194,233,0.2)' }}>
            Dúvidas frequentes
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-brand-white heading-tight mb-4"
          data-aos="fade-up" data-aos-delay="60">
          Perguntas{' '}
          <span className="text-gradient">frequentes</span>
        </h2>

        <p className="text-brand-gray text-center mb-12 leading-relaxed"
          data-aos="fade-up" data-aos-delay="100">
          Tire suas dúvidas antes de agendar. Se não encontrar o que procura, fale diretamente pelo WhatsApp.
        </p>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              q={faq.q}
              a={faq.a}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA below FAQ */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-brand-gray text-sm mb-5">
            Ainda tem dúvidas? Fale diretamente com o consultório.
          </p>
          <a
            href="https://wa.me/5585999999999?text=Olá%2C%20tenho%20uma%20dúvida%20sobre%20o%20atendimento%20do%20Dr.%20Cadu%20Queiroz."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm py-3 px-7"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
