import ctaBg from '../assets/background-cta.jpg'

const WHATSAPP_URL =
  'https://wa.me/5585999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Cadu%20Queiroz.'

export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden">

      {/* Background image */}
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-brand-dark/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 py-24 lg:py-36 text-center">

        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{
            background: 'rgba(11,194,233,0.08)',
            border: '1px solid rgba(11,194,233,0.25)',
          }}
          data-aos="fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          <span className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase">Próximo passo</span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-white heading-tight leading-tight mb-5"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          Agende sua consulta com o{' '}
          <span className="text-gradient">Dr. Cadu Queiroz</span>{' '}
          em Fortaleza
        </h2>

        {/* Description */}
        <p
          className="text-brand-gray text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Você não precisa continuar convivendo com dor ou com dúvida. O próximo passo é simples
          — fale agora com o consultório e agende sua avaliação.
        </p>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="140">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base inline-flex px-10 py-4"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar pelo WhatsApp
          </a>
        </div>

        {/* Trust items */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3"
          data-aos="fade-up"
          data-aos-delay="180"
        >
          {[
            'Especialista em endometriose e cirurgia digestiva',
            'CRM-CE 9104 · RQE 7304',
            'Cirurgia minimamente invasiva',
            'Diagnóstico claro e individualizado',
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2 text-brand-gray text-sm">
              <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold"
                style={{ background: 'rgba(11,194,233,0.15)', color: '#0BC2E9' }}>
                ✓
              </span>
              {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
