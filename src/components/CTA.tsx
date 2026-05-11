import { useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/5585999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Cadu%20Queiroz.'

export default function CTA() {
  const [formData, setFormData] = useState({ nome: '', telefone: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá, meu nome é ${formData.nome}. ${formData.mensagem} Meu telefone: ${formData.telefone}`
    )
    window.open(`https://wa.me/5585999999999?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section
      id="contato"
      className="relative py-24 lg:py-32 overflow-hidden bg-brand-dark"
    >
      {/* Top divider */}
      <div className="divider-glow mx-auto max-w-5xl mb-20" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #0BC2E9, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">
        {/* Section label */}
        <div className="flex justify-center mb-4" data-aos="fade-up">
          <span
            className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(11,194,233,0.08)',
              border: '1px solid rgba(11,194,233,0.2)',
            }}
          >
            Próximo passo
          </span>
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-brand-white heading-tight mb-4"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          Agende sua consulta com o{' '}
          <span className="text-gradient">Dr. Cadu Queiroz</span>{' '}
          em Fortaleza
        </h2>

        <p
          className="text-brand-gray text-center max-w-2xl mx-auto mb-16 leading-relaxed text-base lg:text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Você não precisa continuar convivendo com dor ou com dúvida. Se está em Fortaleza
          e quer uma avaliação especializada em endometriose ou cirurgia digestiva, o
          próximo passo é simples: agende agora.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — WhatsApp CTA + info */}
          <div data-aos="fade-right">
            {/* Primary CTA card */}
            <div
              className="rounded-2xl p-8 mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(11,194,233,0.12) 0%, rgba(9,38,74,0.6) 100%)',
                border: '1px solid rgba(11,194,233,0.3)',
                boxShadow: '0 0 40px rgba(11,194,233,0.1)',
              }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(11,194,233,0.15)',
                    border: '1px solid rgba(11,194,233,0.3)',
                  }}
                >
                  <svg className="w-7 h-7 text-brand-cyan" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-brand-white font-bold text-lg leading-tight">Agendamento pelo WhatsApp</p>
                  <p className="text-brand-gray text-sm">Resposta rápida · Confirmação imediata</p>
                </div>
              </div>

              <p className="text-brand-gray text-sm leading-relaxed mb-6">
                A forma mais rápida de agendar. Clique abaixo e fale diretamente com o consultório
                do Dr. Cadu Queiroz em Fortaleza.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar pelo WhatsApp
              </a>
            </div>

            {/* Trust items */}
            <div className="space-y-3">
              {[
                { icon: '✓', text: 'Especialista em endometriose e cirurgia digestiva em Fortaleza' },
                { icon: '✓', text: 'CRM-CE 9104 / RQE 7304 registro ativo' },
                { icon: '✓', text: 'Diagnóstico claro e tratamento individualizado' },
                { icon: '✓', text: 'Cirurgia minimamente invasiva com recuperação rápida' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ background: 'rgba(11,194,233,0.15)', color: '#0BC2E9' }}
                  >
                    {item.icon}
                  </span>
                  <p className="text-brand-gray text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Contact Form */}
          <div data-aos="fade-left" data-aos-delay="80">
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(9,38,74,0.45)',
                border: '1px solid rgba(11,194,233,0.15)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <p className="text-brand-white font-bold text-lg mb-1">Prefere preencher um formulário?</p>
              <p className="text-brand-gray text-sm mb-7">Enviaremos seu contato direto pelo WhatsApp.</p>

              {sent ? (
                <div className="text-center py-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(11,194,233,0.15)', border: '1px solid rgba(11,194,233,0.3)' }}
                  >
                    <svg className="w-8 h-8 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-brand-white font-bold text-lg mb-2">Mensagem enviada!</p>
                  <p className="text-brand-gray text-sm">O WhatsApp foi aberto com sua mensagem. Aguarde o retorno do consultório.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nome */}
                  <div>
                    <label className="block text-brand-gray text-xs font-semibold tracking-widest uppercase mb-2">
                      Seu nome
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      placeholder="Como prefere ser chamado(a)?"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl text-brand-white text-sm outline-none transition-all duration-200 placeholder:text-brand-gray/50"
                      style={{
                        background: 'rgba(2,15,30,0.6)',
                        border: '1px solid rgba(11,194,233,0.2)',
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(11,194,233,0.6)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(11,194,233,0.2)')}
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-brand-gray text-xs font-semibold tracking-widest uppercase mb-2">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      placeholder="(85) 9 9999-9999"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl text-brand-white text-sm outline-none transition-all duration-200 placeholder:text-brand-gray/50"
                      style={{
                        background: 'rgba(2,15,30,0.6)',
                        border: '1px solid rgba(11,194,233,0.2)',
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(11,194,233,0.6)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(11,194,233,0.2)')}
                    />
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-brand-gray text-xs font-semibold tracking-widest uppercase mb-2">
                      Motivo da consulta
                    </label>
                    <textarea
                      name="mensagem"
                      rows={3}
                      placeholder="Ex: Suspeita de endometriose, pedra na vesícula..."
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl text-brand-white text-sm outline-none transition-all duration-200 resize-none placeholder:text-brand-gray/50"
                      style={{
                        background: 'rgba(2,15,30,0.6)',
                        border: '1px solid rgba(11,194,233,0.2)',
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(11,194,233,0.6)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(11,194,233,0.2)')}
                    />
                  </div>

                  <button type="submit" className="btn-secondary w-full justify-center mt-2">
                    Enviar pelo WhatsApp
                  </button>

                  <p className="text-brand-gray/60 text-xs text-center">
                    Seus dados são usados apenas para o agendamento.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
