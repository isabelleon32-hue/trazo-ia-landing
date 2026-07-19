import { motion } from 'framer-motion'
import { useState } from 'react'

const colors = {
  red: '#E53935',
  black: '#000000',
  white: '#FFFFFF',
  gray50: '#F9FAFB',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111111',
  darkBg: '#0B0B0C',
  darkCard: '#121214',
  darkBorder: '#242429',
}

const WHATSAPP = 'https://wa.me/56936833670?text=Hola%20Trazo-IA,%20vi%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n%20para%20conocer%20c%C3%B3mo%20automatizar%20mi%20negocio'

export default function App() {
  const [solutionState, setSolutionState] = useState('before')
  const [hoveredProblem, setHoveredProblem] = useState(null)
  const [hoursVal, setHoursVal] = useState(15)
  const [costVal, setCostVal] = useState(15000)

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }

  const annualHours = hoursVal * 48
  const annualSavings = annualHours * costVal

  return (
    <div style={{ backgroundColor: colors.darkBg, color: colors.white, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* NAV */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: `rgba(11, 11, 12, 0.8)`,
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${colors.darkBorder}`,
          padding: '16px clamp(20px, 5vw, 60px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <img src="/assets/logo-horizontal.png" alt="Trazo-IA" style={{ height: '32px', objectFit: 'contain' }} />
        </div>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
          style={{
            backgroundColor: colors.red,
            color: colors.white,
            border: 'none',
            padding: '10px 24px',
            borderRadius: '6px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'all 0.3s',
            boxShadow: `0 0 20px ${colors.red}66`,
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = `0 0 40px ${colors.red}99`
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = `0 0 20px ${colors.red}66`
            e.target.style.transform = 'translateY(0)'
          }}
        >
          Asesoría Gratis
        </a>
      </motion.header>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 60px)', marginTop: '80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', backgroundColor: colors.red, opacity: 0.05, filter: 'blur(100px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', position: 'relative', zIndex: 10 }}>
          {/* LEFT */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeInUp} style={{ fontSize: '14px', fontWeight: '600', color: colors.red, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Automatizaciones Inteligentes
            </motion.p>

            <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(32px, 8vw, 60px)', fontWeight: '900', lineHeight: '1.15', marginBottom: '24px', color: colors.white }}>
              Tus procesos en <span style={{ background: `linear-gradient(135deg, ${colors.red}, #FF6B35)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>piloto automático</span>
            </motion.h1>

            <motion.p variants={fadeInUp} style={{ fontSize: '18px', color: colors.gray600, lineHeight: '1.6', marginBottom: '30px' }}>
              <strong style={{ color: colors.white }}>"Menos tareas repetitivas, más tiempo para crecer."</strong>
              <br />
              Diseñamos sistemas automatizados con Inteligencia Artificial que trabajan por ti 24/7. Recupera tu tiempo.
            </motion.p>

            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                style={{
                  backgroundColor: colors.red,
                  color: colors.white,
                  border: 'none',
                  padding: '16px 40px',
                  borderRadius: '8px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontSize: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: `0 10px 30px ${colors.red}4D`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = `0 15px 50px ${colors.red}80`
                  e.target.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = `0 10px 30px ${colors.red}4D`
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                🚀 Hablemos por WhatsApp
              </a>
              <button onClick={() => document.getElementById('metodologia').scrollIntoView({ behavior: 'smooth' })}
                style={{
                  backgroundColor: 'transparent',
                  color: colors.white,
                  border: `2px solid ${colors.darkBorder}`,
                  padding: '14px 40px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'all 0.3s',
                }}
              >
                Conoce el método
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT - DRAGON */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/assets/dragon-3d-frontal.png" alt="Trazo-IA Dragon" style={{ maxWidth: '100%', height: 'auto', filter: 'drop-shadow(0 0 40px rgba(229, 57, 53, 0.3))', mixBlendMode: 'lighten' }} />
          </motion.div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 60px)', backgroundColor: `${colors.darkCard}80`, borderTop: `1px solid ${colors.darkBorder}` }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', color: colors.red, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>La Realidad</p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', marginBottom: '20px', color: colors.white }}>
              ¿Cuánto te cuesta operar manualmente?
            </h2>
            <p style={{ fontSize: '18px', color: colors.gray600, maxWidth: '600px', margin: '0 auto' }}>
              Descubre los 6 dolores ocultos que ralentizan tu negocio
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: '⏰', title: 'Saturación Rutinaria', desc: 'Pasas horas copiando datos y enviando emails que una máquina resolvería en milisegundos' },
              { icon: '⏱️', title: 'Falta de Tiempo', desc: 'Atrapado resolviendo incendios. No puedes planificar el crecimiento de tu empresa' },
              { icon: '❌', title: 'Errores Humanos', desc: 'Datos mal traspasados, seguimientos olvidados. Cada fallo daña tu reputación' },
              { icon: '👥', title: 'Fuga de Clientes', desc: 'Un cliente te escribe y tardas horas en responder. Para entonces compró en la competencia' },
              { icon: '📦', title: 'Desorganización', desc: 'Información fragmentada en correos, cuadernos y chats. Nadie sabe el estado real' },
              { icon: '📉', title: 'Baja Productividad', desc: 'Tu equipo pasa más tiempo estructurando reportes que vendiendo o mejorando' },
            ].map((p, i) => (
              <motion.div key={i} variants={fadeInUp}
                onMouseEnter={() => setHoveredProblem(i)}
                onMouseLeave={() => setHoveredProblem(null)}
                style={{
                  padding: '32px',
                  borderRadius: '12px',
                  backgroundColor: hoveredProblem === i ? colors.red : colors.darkCard,
                  border: `2px solid ${hoveredProblem === i ? colors.red : colors.darkBorder}`,
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{p.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: hoveredProblem === i ? colors.white : colors.white }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '15px', color: hoveredProblem === i ? 'rgba(255,255,255,0.9)' : colors.gray600, lineHeight: '1.6' }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SOLUCIÓN */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 60px)', backgroundColor: colors.darkBg, borderTop: `1px solid ${colors.darkBorder}` }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', color: colors.red, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>La Transformación</p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', marginBottom: '20px', color: colors.white }}>
              Trazo-IA: Arquitectura de tu libertad
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {['✓ Respuestas inmediatas en canales clave', '✓ Integraciones robustas con tus herramientas', '✓ IA que aprende y mejora cada día'].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px', color: colors.red, marginTop: '4px' }}>●</span>
                  <p style={{ fontSize: '16px', color: colors.gray300, lineHeight: '1.6' }}>{item}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Before/After Toggle */}
            <motion.div variants={fadeInUp} style={{ backgroundColor: colors.darkCard, border: `1px solid ${colors.darkBorder}`, borderRadius: '16px', padding: '24px', overflow: 'hidden' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', backgroundColor: colors.darkBg, padding: '8px', borderRadius: '8px' }}>
                {['before', 'after'].map(state => (
                  <button key={state} onClick={() => setSolutionState(state)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      fontSize: '13px',
                      fontWeight: '600',
                      border: 'none',
                      borderRadius: '6px',
                      backgroundColor: solutionState === state ? colors.red : 'transparent',
                      color: solutionState === state ? colors.white : colors.gray600,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                    }}
                  >
                    {state === 'before' ? 'Manual ❌' : 'Con Trazo ✅'}
                  </button>
                ))}
              </div>

              <div style={{ minHeight: '180px' }}>
                {solutionState === 'before' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <p style={{ fontSize: '14px', color: colors.gray300 }}>❌ Entrada manual de datos sin automatización</p>
                    <p style={{ fontSize: '14px', color: colors.gray300 }}>❌ Seguimientos que se olvidan constantemente</p>
                    <p style={{ fontSize: '14px', color: colors.gray300 }}>❌ Sin visibilidad en vivo de métricas</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <p style={{ fontSize: '14px', color: colors.gray300 }}>✅ Ingreso automatizado en 2 segundos</p>
                    <p style={{ fontSize: '14px', color: colors.gray300 }}>✅ Seguimientos automáticos e inteligentes</p>
                    <p style={{ fontSize: '14px', color: colors.gray300 }}>✅ Reportes automáticos cada tarde</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* BENEFICIOS */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 60px)', backgroundColor: colors.darkCard, borderTop: `1px solid ${colors.darkBorder}` }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', color: colors.red, textTransform: 'uppercase', marginBottom: '12px' }}>Beneficios</p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', marginBottom: '20px', color: colors.white }}>
              Impacto directo en tu negocio
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            {[
              { emoji: '⏱️', title: 'Más Tiempo Libre', desc: 'Libera 15+ horas semanales por colaborador' },
              { emoji: '🔒', title: 'Seguridad Garantizada', desc: 'Cero errores manuales, datos protegidos' },
              { emoji: '🤝', title: 'Confianza Absoluta', desc: 'Disponible 24/7/365 sin interrupciones' },
            ].map((b, i) => (
              <motion.div key={i} variants={fadeInUp} style={{
                padding: '36px',
                backgroundColor: colors.darkBg,
                borderRadius: '12px',
                border: `2px solid ${colors.darkBorder}`,
                textAlign: 'center',
                transition: 'all 0.3s',
              }}
                whileHover={{ y: -8 }}
              >
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{b.emoji}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: colors.white }}>{b.title}</h3>
                <p style={{ fontSize: '15px', color: colors.gray600, lineHeight: '1.6' }}>{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ROI CALCULATOR */}
          <motion.div variants={fadeInUp} style={{ backgroundColor: colors.darkBg, border: `1px solid ${colors.darkBorder}`, borderRadius: '16px', padding: '36px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px', color: colors.white }}>Calculadora de Ahorro Trazo-IA</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                    <span>Horas perdidas/semana</span>
                    <span style={{ color: colors.red, fontWeight: 'bold' }}>{hoursVal} hrs</span>
                  </div>
                  <input type="range" min="5" max="60" value={hoursVal} onChange={(e) => setHoursVal(Number(e.target.value))}
                    style={{ width: '100%', accentColor: colors.red }}
                  />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                    <span>Valor tu hora</span>
                    <span style={{ color: colors.red, fontWeight: 'bold' }}>${(costVal / 1000).toFixed(0)}k</span>
                  </div>
                  <input type="range" min="5000" max="80000" step="5000" value={costVal} onChange={(e) => setCostVal(Number(e.target.value))}
                    style={{ width: '100%', accentColor: colors.red }}
                  />
                </div>
              </div>

              <div style={{ backgroundColor: colors.darkCard, padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '12px', color: colors.gray600, textTransform: 'uppercase', marginBottom: '8px' }}>Tiempo/Año</p>
                  <p style={{ fontSize: '28px', fontWeight: '900', color: colors.white }}>{annualHours.toLocaleString()} hrs</p>
                </div>
                <div style={{ borderTop: `1px solid ${colors.darkBorder}`, paddingTop: '20px' }}>
                  <p style={{ fontSize: '12px', color: colors.gray600, textTransform: 'uppercase', marginBottom: '8px' }}>Ahorro Anual</p>
                  <p style={{ fontSize: '32px', fontWeight: '900', color: colors.red }}>${(annualSavings / 1000000).toFixed(1)}M</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* METODOLOGÍA */}
      <section id="metodologia" style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 60px)', backgroundColor: colors.darkBg, borderTop: `1px solid ${colors.darkBorder}` }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', color: colors.red, textTransform: 'uppercase', marginBottom: '12px' }}>Proceso</p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', marginBottom: '20px', color: colors.white }}>
              4 pasos hacia la automatización
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { num: '01', title: 'Diagnóstico', desc: 'Analizamos tus operaciones sin costo' },
              { num: '02', title: 'Diseño', desc: 'Esbozamos la arquitectura perfecta' },
              { num: '03', title: 'Automatización', desc: 'Programamos e integramos todo' },
              { num: '04', title: 'Acompañamiento', desc: 'Soporte continuo 24/7 siempre' },
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} style={{
                padding: '32px',
                backgroundColor: colors.darkCard,
                border: `2px solid ${colors.darkBorder}`,
                borderRadius: '12px',
                position: 'relative',
                transition: 'all 0.3s',
              }}
                whileHover={{ borderColor: colors.red }}
              >
                <div style={{ fontSize: '40px', fontWeight: '900', color: colors.red, marginBottom: '16px', opacity: 0.3 }}>{step.num}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: colors.white }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: colors.gray600, lineHeight: '1.6' }}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* POR QUÉ NOSOTROS */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 60px)', backgroundColor: colors.darkCard, borderTop: `1px solid ${colors.darkBorder}` }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', color: colors.red, textTransform: 'uppercase', marginBottom: '12px' }}>Diferencial</p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', marginBottom: '20px', color: colors.white }}>
              ¿Por qué elegir Trazo-IA?
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Compromiso Absoluto', desc: 'Entregamos lo prometido o no cobramos' },
              { title: 'Seriedad Técnica', desc: 'Plataformas estables y datos protegidos' },
              { title: 'Soluciones Personalizadas', desc: 'Diseñadas para TU flujo específico' },
              { title: 'Acompañamiento Cercano', desc: 'Siempre a un mensaje de distancia' },
            ].map((value, i) => (
              <motion.div key={i} variants={fadeInUp} style={{
                padding: '28px',
                backgroundColor: colors.darkBg,
                border: `2px solid ${colors.darkBorder}`,
                borderRadius: '12px',
                borderLeft: `4px solid ${colors.red}`,
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: colors.white }}>✓ {value.title}</h3>
                <p style={{ fontSize: '14px', color: colors.gray600, lineHeight: '1.6' }}>{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: 'clamp(80px, 12vw, 160px) clamp(20px, 5vw, 60px)', backgroundColor: colors.red, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: '900', marginBottom: '24px', lineHeight: '1.2', color: colors.white }}>
            Empieza hoy a trabajar de forma más inteligente
          </h2>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', marginBottom: '40px', opacity: 0.95, lineHeight: '1.6', color: colors.white }}>
            Diagnóstico estratégico sin costo. Descubre qué automatizar esta semana.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: colors.white,
              color: colors.red,
              border: 'none',
              padding: '18px 48px',
              borderRadius: '8px',
              fontWeight: '800',
              cursor: 'pointer',
              fontSize: '16px',
              textDecoration: 'none',
              transition: 'all 0.3s',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)'
              e.target.style.boxShadow = '0 15px 60px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 10px 40px rgba(0,0,0,0.2)'
            }}
          >
            💬 Hablemos por WhatsApp
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: 'clamp(40px, 5vw, 60px)', backgroundColor: colors.darkBg, borderTop: `1px solid ${colors.darkBorder}`, color: colors.gray600, fontSize: '14px', textAlign: 'center' }}>
        <p style={{ marginBottom: '16px', fontWeight: 'bold', color: colors.white }}>TRAZO<span style={{ color: colors.red }}>IA</span></p>
        <p style={{ marginBottom: '8px' }}>✉ contacto@trazoia.com | 📞 +56 9 3683 3670</p>
        <p>&copy; 2026 Trazo-IA. Todos los derechos reservados.</p>
      </footer>

      {/* WHATSAPP FLOATING BADGE */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          backgroundColor: '#25d366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: colors.white,
          fontSize: '28px',
          cursor: 'pointer',
          zIndex: 40,
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)'
          e.target.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.6)'
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)'
          e.target.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)'
        }}
      >
        💬
      </a>
    </div>
  )
}
