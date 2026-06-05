const specialties = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    label: 'Endometriose',
    sub: 'Diagnóstico e cirurgia especializada',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    label: 'Cirurgia do Aparelho Digestivo',
    sub: 'Tratamento cirúrgico especializado',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    label: 'Cirurgia de Vesícula',
    sub: 'Videolaparoscopia com recuperação rápida',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    label: 'CRM-CE 9104 / RQE 7304',
    sub: 'Registro profissional ativo no CRM-CE',
  },
]

const stats = [
  { value: 'CRM-CE', sub: '9104', label: 'Registro ativo' },
  { value: 'RQE', sub: '7304', label: 'Especialidade' },
  { value: '2–5', sub: 'dias', label: 'Recuperação vesícula' },
  { value: 'Fortaleza', sub: 'CE', label: 'Atendimento presencial' },
]

export default function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-brand-dark">
      {/* Top divider */}
      <div className="divider-glow mx-auto max-w-5xl mb-20" />

      <div className="max-w-6xl mx-auto px-6 lg:px-16">

        {/* Section label */}
        <div className="flex justify-center mb-4" data-aos="fade-up">
          <span className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(11,194,233,0.08)', border: '1px solid rgba(11,194,233,0.2)' }}>
            Sobre o médico
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-brand-white heading-tight mb-4" data-aos="fade-up" data-aos-delay="60">
          Cirurgião Despecialista com foco em{' '}
          <span className="text-gradient">endometriose</span> e{' '}
          <span className="text-gradient">cirurgia digestiva</span>
        </h2>

        <p className="text-brand-gray text-center max-w-xl mx-auto mb-16 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Com registro CRM-CE 9104 e atuação em Fortaleza
        </p>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Bio */}
          <div data-aos="fade-right">
            {/* Photo placeholder */}
            <div className="relative mb-8 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #09264A 0%, #020F1E 100%)',
                border: '1px solid rgba(11,194,233,0.2)',
                aspectRatio: '4/3',
              }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(11,194,233,0.12)', border: '2px solid rgba(11,194,233,0.3)' }}>
                  <svg className="w-12 h-12 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-brand-gray text-sm text-center px-8">
                  Inserir foto do Dr. Cadu Queiroz<br />
                  <span className="text-brand-cyan text-xs">Alt: Dr. Cadu Queiroz especialista endometriose Fortaleza</span>
                </p>
              </div>
              {/* Glow effect on photo */}
              <div className="absolute bottom-0 left-0 right-0 h-32"
                style={{ background: 'linear-gradient(to top, rgba(11,194,233,0.08), transparent)' }} />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <div key={i} className="card-glass rounded-xl p-4 text-center"
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                  <div className="text-2xl font-black text-brand-cyan leading-none">{s.value}</div>
                  <div className="text-brand-blue text-sm font-bold">{s.sub}</div>
                  <div className="text-brand-gray text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Text & Specialties */}
          <div data-aos="fade-left" data-aos-delay="80">
            <p className="text-brand-gray text-base lg:text-lg leading-relaxed mb-8">
              <span className="text-brand-white font-semibold">Dr. Cadu Queiroz</span> é especialista em endometriose,
              cirurgia do aparelho digestivo e cirurgia de vesícula, com registro{' '}
              <span className="text-brand-cyan font-semibold">CRM-CE 9104 / RQE 7304</span>.
              Atua em Fortaleza com foco em diagnóstico rápido e tratamento que devolve qualidade de vida
              seja pelo caminho clínico ou cirúrgico.
            </p>

            <p className="text-brand-gray text-base leading-relaxed mb-10">
              Em cada consulta, o objetivo é simples: que você saia sabendo o que tem, por que
              sente o que sente, e qual o próximo passo concreto. Sem jargão. Sem pressa. Sem dúvida.
            </p>

            {/* Specialties */}
            <div className="space-y-3">
              <p className="text-brand-white text-sm font-bold tracking-widest uppercase mb-4">Especialidades</p>
              {specialties.map((item, i) => (
                <div key={i}
                  className="flex items-start gap-4 p-4 rounded-xl card-glass card-glass-hover"
                  data-aos="fade-left"
                  data-aos-delay={120 + i * 60}>
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-brand-cyan"
                    style={{ background: 'rgba(11,194,233,0.1)', border: '1px solid rgba(11,194,233,0.2)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-brand-white font-semibold text-sm leading-tight">{item.label}</p>
                    <p className="text-brand-gray text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
