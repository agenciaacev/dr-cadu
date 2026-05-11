const endoCards = [
  {
    icon: '🌀',
    text: 'Cólicas tão fortes que te impedem de trabalhar ou sair de casa',
  },
  {
    icon: '🔍',
    text: 'Diagnóstico demorado já fez vários exames sem resposta',
  },
  {
    icon: '⚡',
    text: 'Dor durante a relação sexual ou ao urinar',
  },
  {
    icon: '❓',
    text: 'Suspeita de endometriose e não sabe por onde começar',
  },
]

const digestivoCards = [
  {
    icon: '🫀',
    text: 'Dor abdominal após as refeições, especialmente à direita',
  },
  {
    icon: '🪨',
    text: 'Diagnóstico de pedra na vesícula e medo da cirurgia',
  },
  {
    icon: '💊',
    text: 'Problema digestivo sem melhora com remédio',
  },
  {
    icon: '🏥',
    text: 'Indicação cirúrgica e precisa de um médico de confiança em Fortaleza',
  },
]

interface PainCardProps {
  icon: string
  text: string
  delay: number
}

function PainCard({ icon, text, delay }: PainCardProps) {
  return (
    <div
      className="flex items-start gap-4 p-5 rounded-xl card-glass card-glass-hover"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
      <p className="text-brand-gray text-sm leading-relaxed font-medium">{text}</p>
    </div>
  )
}

export default function PainPoints() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020F1E 0%, #09264A 50%, #020F1E 100%)' }}>

      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #0BC2E9, transparent 70%)', filter: 'blur(100px)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">

        {/* Section label */}
        <div className="flex justify-center mb-4" data-aos="fade-up">
          <span className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(11,194,233,0.08)', border: '1px solid rgba(11,194,233,0.2)' }}>
            Você se identifica?
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-brand-white heading-tight mb-4"
          data-aos="fade-up" data-aos-delay="60">
          Você se identifica com alguma{' '}
          <span className="text-gradient">dessas situações?</span>
        </h2>

        <p className="text-brand-gray text-center max-w-xl mx-auto mb-16 leading-relaxed"
          data-aos="fade-up" data-aos-delay="100">
          Se sim, você está no lugar certo. O Dr. Cadu Queiroz cuida exatamente dessas condições em Fortaleza.
        </p>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Endometriose column */}
          <div>
            <div className="flex items-center gap-3 mb-6" data-aos="fade-right">
              <div className="h-px flex-1 rounded"
                style={{ background: 'linear-gradient(90deg, rgba(11,194,233,0.6), transparent)' }} />
              <span className="text-brand-cyan text-sm font-bold tracking-widest uppercase flex-shrink-0">
                Endometriose
              </span>
              <div className="h-px w-6 rounded"
                style={{ background: 'rgba(11,194,233,0.3)' }} />
            </div>
            <div className="space-y-3">
              {endoCards.map((card, i) => (
                <PainCard key={i} {...card} delay={80 + i * 60} />
              ))}
            </div>
          </div>

          {/* Digestivo column */}
          <div>
            <div className="flex items-center gap-3 mb-6" data-aos="fade-left">
              <div className="h-px flex-1 rounded"
                style={{ background: 'linear-gradient(90deg, rgba(65,178,215,0.6), transparent)' }} />
              <span className="text-brand-blue text-sm font-bold tracking-widest uppercase flex-shrink-0">
                Cirurgia Digestiva e Vesícula
              </span>
              <div className="h-px w-6 rounded"
                style={{ background: 'rgba(65,178,215,0.3)' }} />
            </div>
            <div className="space-y-3">
              {digestivoCards.map((card, i) => (
                <PainCard key={i} {...card} delay={80 + i * 60} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA connector */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-brand-gray text-base mb-6 font-medium">
            Qualquer uma dessas situações merece atenção especializada.
          </p>
          <a href="#contato"
            className="btn-primary inline-flex">
            Agendar avaliação com o Dr. Cadu
          </a>
        </div>
      </div>
    </section>
  )
}
