const goldCards = [
  {
    number: '01',
    tag: 'Endometriose',
    title: 'Endometriose não é "cólica forte normal"',
    body: 'A média para um diagnóstico correto de endometriose no Brasil é de 7 a 10 anos. Nesse tempo, muitas mulheres ouvem que é "estresse" ou "frescura". Endometriose é uma doença inflamatória crônica e quanto antes identificada, menor o dano aos órgãos e maior a chance de tratamento eficaz.',
    accent: '#0BC2E9',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    tag: 'Cirurgia de Vesícula',
    title: 'Cirurgia de vesícula não é coisa para adiar',
    body: 'Pedra na vesícula que dói é sinal de que o órgão já está inflamado. Adiar a cirurgia aumenta o risco de complicações sérias, como infecção ou ruptura. A colecistectomia videolaparoscópica, quando feita no momento certo, tem recuperação em 2 a 5 dias e resolve o problema de vez.',
    accent: '#41B2D7',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    tag: 'Consulta',
    title: 'Uma boa consulta muda tudo',
    body: 'A maioria dos pacientes sai da consulta sem entender o próprio diagnóstico. Na consulta com o Dr. Cadu, você sai sabendo exatamente o que tem, por que sente o que sente, e qual o próximo passo. Sem jargão. Sem pressa. Sem dúvida.',
    accent: '#0BC2E9',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function GoldContent() {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-dark">
      <div className="divider-glow mx-auto max-w-5xl mb-20" />

      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #0BC2E9, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #41B2D7, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">

        {/* Section label */}
        <div className="flex justify-center mb-4" data-aos="fade-up">
          <span className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(11,194,233,0.08)', border: '1px solid rgba(11,194,233,0.2)' }}>
            Informação que transforma
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-brand-white heading-tight mb-4"
          data-aos="fade-up" data-aos-delay="60">
          O que a maioria dos médicos{' '}
          <span className="text-gradient">não te conta</span>
        </h2>

        <p className="text-brand-gray text-center max-w-xl mx-auto mb-16 leading-relaxed"
          data-aos="fade-up" data-aos-delay="100">
          Informação clara é o primeiro passo para um tratamento eficaz.
        </p>

        {/* Cards grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {goldCards.map((card, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-7 card-glass card-glass-hover flex flex-col"
              data-aos="fade-up"
              data-aos-delay={80 + i * 100}
              style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.5)' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-7 right-7 h-px rounded-full"
                style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)` }} />

              {/* Number */}
              <div className="text-6xl font-black heading-tight mb-5 leading-none"
                style={{ color: `${card.accent}18`, WebkitTextStroke: `1px ${card.accent}30` }}>
                {card.number}
              </div>

              {/* Icon + Tag */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ color: card.accent, background: `${card.accent}14`, border: `1px solid ${card.accent}30` }}>
                  {card.icon}
                </div>
                <span className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: card.accent }}>
                  {card.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-brand-white font-bold text-lg leading-tight mb-4 heading-tight">
                {card.title}
              </h3>

              {/* Body */}
              <p className="text-brand-gray text-sm leading-relaxed flex-1">
                {card.body}
              </p>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${card.accent}20, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
