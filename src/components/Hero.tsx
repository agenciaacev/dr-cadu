import { useEffect, useRef } from 'react'
import anime from 'animejs'

const WHATSAPP_URL = 'https://wa.me/5585999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Cadu%20Queiroz.'

export default function Hero() {
  const orbsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Floating background orbs — continuous loop
    anime({
      targets: '.hero-orb',
      translateX: () => anime.random(-50, 50),
      translateY: () => anime.random(-50, 50),
      scale: [{ value: 0.85 }, { value: 1.15 }],
      easing: 'easeInOutSine',
      duration: () => anime.random(4000, 7000),
      delay: anime.stagger(600),
      loop: true,
      direction: 'alternate',
    })

    // Badge fade in
    anime({
      targets: '.hero-badge',
      opacity: [0, 1],
      translateY: [24, 0],
      easing: 'easeOutExpo',
      duration: 900,
      delay: 200,
    })

    // Name — letter by letter
    anime({
      targets: '.name-letter',
      opacity: [0, 1],
      translateY: [32, 0],
      easing: 'easeOutExpo',
      duration: 900,
      delay: anime.stagger(38, { start: 450 }),
    })

    // H1 headline
    anime({
      targets: '.hero-h1',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      duration: 800,
      delay: 1350,
    })

    // Subtitle
    anime({
      targets: '.hero-subtitle',
      opacity: [0, 1],
      translateY: [16, 0],
      easing: 'easeOutExpo',
      duration: 800,
      delay: 1700,
    })

    // CTA buttons
    anime({
      targets: '.hero-cta',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      duration: 800,
      delay: anime.stagger(120, { start: 2050 }),
    })

    // Trust badges
    anime({
      targets: '.hero-trust-item',
      opacity: [0, 1],
      translateY: [12, 0],
      easing: 'easeOutExpo',
      duration: 700,
      delay: anime.stagger(80, { start: 2400 }),
    })

    // Scroll indicator
    anime({
      targets: '.scroll-indicator',
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 700,
      delay: 2800,
    })

    // Scroll dot bounce
    anime({
      targets: '.scroll-dot',
      translateY: [0, 14],
      easing: 'easeInOutSine',
      duration: 1100,
      loop: true,
      direction: 'alternate',
      delay: 3100,
    })

    // Cyan line width animation under name
    anime({
      targets: '.name-underline',
      width: ['0%', '100%'],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 1200,
    })
  }, [])

  const nameText = 'Dr. Cadu Queiroz'

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-brand-dark">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,#09264A_0%,#020F1E_70%)]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Animated glow orbs */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-orb absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #0BC2E9, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="hero-orb absolute bottom-[20%] right-[8%] w-[400px] h-[400px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #41B2D7, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="hero-orb absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #0BC2E9, transparent 60%)', filter: 'blur(80px)' }} />
        <div className="hero-orb absolute top-[70%] left-[25%] w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #0BC2E9, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-7 rounded-full" style={{ background: 'linear-gradient(180deg, #0BC2E9, #41B2D7)' }} />
          <span className="text-brand-white font-bold text-lg tracking-tight">Dr. Cadu Queiroz</span>
        </div>
        <a href="#contato" className="hidden md:inline-flex btn-primary text-sm py-3 px-6">
          Agendar Consulta
        </a>
      </nav>

      {/* Hero Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-16 pt-8 pb-20">
        <div className="max-w-5xl mx-auto text-center w-full">

          {/* Credential Badge */}
          <div className="hero-badge opacity-0 mb-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full"
            style={{
              background: 'rgba(11, 194, 233, 0.08)',
              border: '1px solid rgba(11, 194, 233, 0.3)',
              backdropFilter: 'blur(10px)',
            }}>
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse inline-block" />
            <span className="text-brand-cyan text-xs font-semibold tracking-[0.15em] uppercase">
              CRM-CE 9104 &nbsp;·&nbsp; RQE 7304
            </span>
          </div>

          {/* Doctor Name — animated letter by letter */}
          <div className="mb-2">
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black heading-tight leading-none text-gradient">
              {nameText.split('').map((char, i) => (
                <span
                  key={i}
                  className="name-letter inline-block opacity-0"
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char === ' ' ? ' ' : char}
                </span>
              ))}
            </h2>
            {/* Animated underline */}
            <div className="flex justify-center mt-3 mb-6">
              <div
                className="name-underline h-[3px] rounded-full"
                style={{
                  width: '0%',
                  maxWidth: '320px',
                  background: 'linear-gradient(90deg, #0BC2E9, #41B2D7)',
                  boxShadow: '0 0 20px rgba(11, 194, 233, 0.6)',
                }}
              />
            </div>
          </div>

          {/* H1 — SEO primary heading */}
          <h1 className="hero-h1 opacity-0 text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-white mb-5 leading-tight heading-tight">
            Especialista em{' '}
            <span className="text-brand-cyan glow-cyan">Endometriose</span>
            {' '}e{' '}
            <span className="text-brand-cyan glow-cyan">Cirurgia Digestiva</span>
            {' '}em{' '}
            <span className="text-brand-blue">Fortaleza</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle opacity-0 text-base sm:text-lg lg:text-xl text-brand-gray max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Diagnóstico preciso, tratamento individualizado e cirurgia minimamente invasiva
            para quem não quer mais conviver com a dor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta opacity-0 btn-primary text-base"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
            <a href="#faq" className="hero-cta opacity-0 btn-secondary text-base">
              Tirar dúvidas primeiro
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                text: 'Médico Especialista',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                text: 'Fortaleza, CE',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                text: 'Cirurgia Minimamente Invasiva',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                text: 'Diagnóstico Rápido',
              },
            ].map((item, i) => (
              <div key={i} className="hero-trust-item opacity-0 flex items-center gap-2 text-brand-gray text-sm font-medium">
                <span className="text-brand-cyan">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-brand-gray text-[10px] tracking-[0.2em] uppercase font-semibold">Role para baixo</span>
        <div className="w-6 h-10 rounded-full flex justify-center items-start pt-2"
          style={{ border: '1.5px solid rgba(11, 194, 233, 0.35)' }}>
          <div className="scroll-dot w-1.5 h-3 bg-brand-cyan rounded-full" />
        </div>
      </div>
    </section>
  )
}
