const WHATSAPP_URL =
  'https://wa.me/5585999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Cadu%20Queiroz.'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-brand-dark overflow-hidden">
      {/* Top divider glow */}
      <div className="divider-glow" />

      {/* Subtle background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #0BC2E9, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

          {/* Column 1 — NAP (idêntico ao Google Meu Negócio) */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-1.5 h-7 rounded-full"
                style={{ background: 'linear-gradient(180deg, #0BC2E9, #41B2D7)' }}
              />
              <span className="text-brand-white font-black text-lg tracking-tight">Dr. Cadu Queiroz</span>
            </div>

            {/* NAP — Name, Address, Phone — deve ser idêntico ao GMB */}
            <address className="not-italic space-y-3">
              <p className="text-brand-white font-semibold text-sm">
                Dr. Carlos Eduardo Queiroz
              </p>

              <div className="flex items-start gap-2.5 text-brand-gray text-sm leading-relaxed">
                <svg className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {/* Inserir endereço idêntico ao Google Meu Negócio */}
                <span>
                  [Inserir endereço completo]<br />
                  [Bairro], Fortaleza – CE<br />
                  CEP: [00000-000]
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-brand-gray text-sm">
                <svg className="w-4 h-4 text-brand-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:+5585999999999"
                  className="hover:text-brand-cyan transition-colors duration-200"
                >
                  (85) 9 9999-9999
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-brand-gray text-sm">
                <svg className="w-4 h-4 text-brand-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Seg a Sex: 08h às 18h</span>
              </div>
            </address>
          </div>

          {/* Column 2 — Especialidades */}
          <div>
            <p className="text-brand-white font-bold text-sm tracking-widest uppercase mb-6">Especialidades</p>
            <ul className="space-y-3">
              {[
                'Endometriose diagnóstico e cirurgia',
                'Cirurgia do aparelho digestivo',
                'Cirurgia de vesícula (videolaparoscopia)',
                'Colecistectomia videolaparoscópica',
                'Dor pélvica crônica',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-brand-gray text-sm">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#0BC2E9' }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-2">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{
                  background: 'rgba(11,194,233,0.08)',
                  border: '1px solid rgba(11,194,233,0.2)',
                  color: '#0BC2E9',
                }}
              >
                CRM-CE 9104
              </div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold ml-2"
                style={{
                  background: 'rgba(65,178,215,0.08)',
                  border: '1px solid rgba(65,178,215,0.2)',
                  color: '#41B2D7',
                }}
              >
                RQE 7304
              </div>
            </div>
          </div>

          {/* Column 3 — CTA + Mapa */}
          <div>
            <p className="text-brand-white font-bold text-sm tracking-widest uppercase mb-6">Agende sua consulta</p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center mb-6 text-sm py-3.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar pelo WhatsApp
            </a>

            {/* Google Maps placeholder */}
            <div
              className="w-full rounded-xl overflow-hidden flex items-center justify-center"
              style={{
                height: '140px',
                background: 'rgba(9,38,74,0.4)',
                border: '1px solid rgba(11,194,233,0.15)',
              }}
            >
              {/*
                SUBSTITUIR pelo embed real do Google Maps:
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%" height="140" style={{border:0}}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Consultório Dr. Cadu Queiroz — Especialista em Endometriose em Fortaleza"
                />
              */}
              <div className="text-center px-4">
                <svg className="w-8 h-8 text-brand-cyan mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-brand-gray text-xs">Substituir pelo embed do Google Maps</p>
                <p className="text-brand-cyan text-xs mt-1">Fortaleza, CE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-glow mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-gray text-xs">
          <p>
            © {year} Dr. Carlos Eduardo Queiroz · CRM-CE 9104 · Fortaleza, CE · Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span
              className="px-2 py-1 rounded text-[10px] font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(11,194,233,0.08)',
                border: '1px solid rgba(11,194,233,0.15)',
                color: '#A3C5DB',
              }}
            >
              Especialista em Endometriose · Fortaleza
            </span>
          </div>
        </div>

        {/* Hidden SEO text — keywords de cauda longa em HTML corrido */}
        <p className="sr-only">
          Médico especialista em endometriose em Fortaleza. Tratamento de endometriose Fortaleza.
          Cirurgia de vesícula em Fortaleza. Laparoscopia vesícula Fortaleza.
          Diagnóstico de endometriose Fortaleza. Dor e cólica forte ginecologista Fortaleza.
          Colecistectomia videolaparoscopia CE. Cirurgião digestivo Fortaleza.
          Especialista endometriose CE. Dr Cadu Queiroz CRM-CE 9104.
        </p>
      </div>
    </footer>
  )
}
