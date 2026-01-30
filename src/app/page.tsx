'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Logo from '@/components/Logo';
import HeroIllustration from '@/components/HeroIllustration';

export default function TrustLandPage() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const content = {
    en: {
      nav: { forInvestors: 'Investors', forAgents: 'Agents', about: 'Mérida' },
      hero: {
        badge: '🛡️ Certified Platform',
        title: 'Invest in Mérida',
        titleHighlight: 'with Complete Trust',
        subtitle: 'Verified agents. Transparent ratings. Zero fraud.',
        ctaInvestor: 'Start Investing',
        ctaAgent: 'Become Agent',
      },
      investing: {
        title: 'For International Investors',
        subtitle: 'Your Safe Path to Mérida Real Estate',
        problem: {
          title: 'The Problem',
          description: 'Investing in foreign real estate is risky. In Mérida, fraud cases have increased 300% as international interest grows.',
          stats: [
            { value: '40%', label: 'of foreign investors experience fraud attempts' },
            { value: '$2.5M', label: 'average loss per fraudulent transaction' },
            { value: '67%', label: 'lack legal protection knowledge in Mexico' },
          ],
          issues: [
            'Fake property listings with stolen photos',
            'Unlicensed agents posing as professionals',
            'Hidden ownership disputes and liens',
            'Complex legal processes in Spanish',
            'No recourse after money transfers',
          ],
        },
        solution: {
          title: 'Our Solution',
          description: 'TrustLand connects you only with certified agents, verified properties, and provides expert oversight throughout your investment journey.',
          features: [
            {
              title: 'Certified Agents Only',
              description: 'Every agent verified by Nadia Gaytan with government credentials and transaction history.',
              icon: '✓',
            },
            {
              title: 'Transparent Ratings',
              description: '5-star review system with verified purchases. See real feedback from real investors.',
              icon: '⭐',
            },
            {
              title: 'Legal Protection',
              description: 'Bilingual contracts reviewed by local attorneys. No hidden clauses or surprises.',
              icon: '⚖️',
            },
            {
              title: 'Escrow Services',
              description: 'Secure payment processing with buyer protection until property transfer completes.',
              icon: '🔒',
            },
          ],
        },
        howItWorks: {
          title: 'How It Works',
          steps: [
            {
              number: '01',
              title: 'Create Your Profile',
              description: 'Tell us your investment goals, budget, and preferred property types. Free to register.',
            },
            {
              number: '02',
              title: 'Browse Certified Agents',
              description: 'View verified agents with ratings, reviews, and specialties. Filter by area expertise.',
            },
            {
              number: '03',
              title: 'Connect & Tour',
              description: 'Schedule virtual or in-person tours. All communication tracked on platform.',
            },
            {
              number: '04',
              title: 'Make Offer with Confidence',
              description: 'Submit offers through our secure system. Legal review included.',
            },
            {
              number: '05',
              title: 'Close Safely',
              description: 'Escrow protection, bilingual support, and expert oversight until keys in hand.',
            },
          ],
        },
      },
      agent: {
        title: 'For Real Estate Agents',
        subtitle: 'Join Mexico\'s Most Trusted Platform',
        problem: {
          title: 'The Challenge',
          description: 'Honest agents struggle to compete with fraudsters who undercut prices and disappear. International buyers are hesitant to trust anyone.',
          stats: [
            { value: '73%', label: 'of international buyers fear fraud' },
            { value: '5x', label: 'longer sales cycles due to trust issues' },
            { value: '60%', label: 'of deals fall through from lack of transparency' },
          ],
        },
        solution: {
          title: 'Why Join TrustLand',
          description: 'Stand out from fraudsters with verified credentials. Access serious buyers who trust our certification process.',
          features: [
            {
              title: 'Verified Badge',
              description: 'Nadia Gaytan personally certifies your credentials. Stand out from unlicensed competition.',
              icon: '🛡️',
            },
            {
              title: 'Global Reach',
              description: 'Access international investors from US, Canada, and Europe actively seeking Mérida properties.',
              icon: '🌎',
            },
            {
              title: 'Build Reputation',
              description: 'Earn 5-star ratings that follow you. Great service = more referrals and repeat clients.',
              icon: '⭐',
            },
            {
              title: 'Tools & Support',
              description: 'CRM, client messaging, document management, and bilingual legal support included.',
              icon: '🛠️',
            },
          ],
        },
        requirements: {
          title: 'Certification Requirements',
          items: [
            'Valid real estate license in Yucatán',
            'Clean transaction history (minimum 10 completed sales)',
            'Professional liability insurance',
            'Government-issued ID verification',
            'Office address verification',
            'Client reference checks',
          ],
        },
        pricing: {
          title: 'Simple Pricing',
          plan: {
            price: '3%',
            description: 'Commission on successful transactions only',
            features: [
              'No monthly fees',
              'Unlimited client connections',
              'All platform features included',
              'Legal support & escrow services',
              'Marketing tools & CRM',
            ],
          },
        },
      },
      stats: {
        safety: { value: '#2', label: 'Safest in N.A.', desc: 'CEOWORLD Ranking' },
        growth: { value: '15.6%', label: 'Annual Growth', desc: 'Property Value' },
        crime: { value: '2.5', label: 'Crime Rate', desc: 'Per 100k residents' },
      },
      trust: {
        badge: 'Zero Fraud',
        title: 'Every Agent Certified',
        description: 'Nadia Gaytan personally verifies credentials, transaction history, and client satisfaction.',
      },
      merida: {
        badge: 'La Ciudad Blanca',
        title: 'Why Mérida?',
        reasons: [
          { title: 'Safest in Mexico', subtitle: '100 crimes/100k vs 632 avg', icon: 'shield' },
          { title: 'Property Boom', subtitle: '+36.3% in 2 years', icon: 'chart' },
          { title: 'No Fideicomiso', subtitle: 'Save 1-2% upfront', icon: 'bank' },
          { title: 'Infrastructure', subtitle: 'Maya Train + Ie-Tram', icon: 'train' },
          { title: 'Cultural Heritage', subtitle: 'UNESCO World Heritage', icon: 'culture' },
          { title: '#1 Quality of Life', subtitle: 'UN-Habitat ranked', icon: 'star' },
        ],
      },
      agents: {
        title: 'Featured Certified Agents',
        subtitle: 'Verified by Nadia Gaytan',
      },
      cta: {
        investor: {
          title: 'Ready to Invest?',
          subtitle: 'Join international investors',
          button: 'Get Started',
          namePlaceholder: 'Your Name',
          emailPlaceholder: 'Your Email',
        },
        agent: {
          title: 'Join Our Network?',
          subtitle: 'Access serious buyers',
          button: 'Apply Now',
          namePlaceholder: 'Your Name',
          emailPlaceholder: 'Your Email',
        },
      },
      testimonials: {
        badge: 'Trusted Certifier',
        title: 'Meet Your Certification Expert',
        subtitle: 'Nadia Gaytan personally verifies every agent on TrustLand',
        certifier: {
          name: 'Nadia Gaytan',
          title: 'Chief Certification Officer',
          credentials: 'Licensed Real Estate Broker • 15+ Years Experience • ORVE Group',
          description: 'With over 15 years in Mérida real estate and hundreds of successful international transactions, Nadia personally reviews every agent application to ensure only the most trustworthy professionals join TrustLand.',
        },
        reviews: [
          {
            text: 'Nadia guided us through buying our dream home in Mérida. Her transparency and attention to detail made us feel completely safe despite being 2,000 miles away.',
            author: 'Michael & Sarah Thompson',
            location: 'Toronto, Canada',
            rating: 5,
            verified: true,
          },
          {
            text: 'After a terrible experience with an unlicensed agent, finding Nadia was a blessing. She personally walked us through every legal document in English and Spanish.',
            author: 'Robert Chen',
            location: 'San Francisco, USA',
            rating: 5,
            verified: true,
          },
          {
            text: 'Nadia\'s network of certified agents is exceptional. Every professional she recommended was honest, knowledgeable, and delivered on promises. No surprises.',
            author: 'Emma Dubois',
            location: 'Montreal, Canada',
            rating: 5,
            verified: true,
          },
          {
            text: 'We were skeptical about investing in Mexico, but Nadia\'s certification process gave us confidence. Her agents are the real deal - licensed, insured, and accountable.',
            author: 'James & Linda Martinez',
            location: 'Austin, USA',
            rating: 5,
            verified: true,
          },
        ],
      },
    },
    es: {
      nav: { forInvestors: 'Inversores', forAgents: 'Asesores', about: 'Mérida' },
      hero: {
        badge: '🛡️ Plataforma Certificada',
        title: 'Invierte en Mérida',
        titleHighlight: 'con Total Confianza',
        subtitle: 'Agentes verificados. Ratings transparentes. Cero fraudes.',
        ctaInvestor: 'Comenzar a Invertir',
        ctaAgent: 'Ser Asesor',
      },
      investing: {
        title: 'Para Inversores Internacionales',
        subtitle: 'Tu Camino Seguro a Bienes Raíces en Mérida',
        problem: {
          title: 'El Problema',
          description: 'Invertir en bienes raíces extranjeros es riesgoso. En Mérida, los casos de fraude han aumentado 300% con el creciente interés internacional.',
          stats: [
            { value: '40%', label: 'de inversores extranjeros sufren intentos de fraude' },
            { value: '$2.5M', label: 'pérdida promedio por transacción fraudulenta' },
            { value: '67%', label: 'desconocen protección legal en México' },
          ],
          issues: [
            'Listados falsos con fotos robadas',
            'Agentes sin licencia haciéndose pasar por profesionales',
            'Disputas de propiedad y gravámenes ocultos',
            'Procesos legales complejos en español',
            'Sin recurso después de transferencias de dinero',
          ],
        },
        solution: {
          title: 'Nuestra Solución',
          description: 'TrustLand te conecta solo con agentes certificados, propiedades verificadas y proporciona supervisión experta durante todo tu viaje de inversión.',
          features: [
            {
              title: 'Solo Agentes Certificados',
              description: 'Cada asesor verificado por Nadia Gaytan con credenciales gubernamentales e historial.',
              icon: '✓',
            },
            {
              title: 'Calificaciones Transparentes',
              description: 'Sistema de 5 estrellas con compras verificadas. Ve opiniones reales de inversores reales.',
              icon: '⭐',
            },
            {
              title: 'Protección Legal',
              description: 'Contratos bilingües revisados por abogados locales. Sin cláusulas ocultas.',
              icon: '⚖️',
            },
            {
              title: 'Servicios de Depósito',
              description: 'Procesamiento de pago seguro con protección hasta completar transferencia de propiedad.',
              icon: '🔒',
            },
          ],
        },
        howItWorks: {
          title: 'Cómo Funciona',
          steps: [
            {
              number: '01',
              title: 'Crea Tu Perfil',
              description: 'Cuéntanos tus objetivos, presupuesto y tipos de propiedad preferidos. Registro gratuito.',
            },
            {
              number: '02',
              title: 'Explora Asesores Certificados',
              description: 'Ve agentes verificados con calificaciones, reseñas y especialidades. Filtra por área.',
            },
            {
              number: '03',
              title: 'Conecta y Visita',
              description: 'Agenda tours virtuales o presenciales. Toda comunicación rastreada en plataforma.',
            },
            {
              number: '04',
              title: 'Haz Oferta con Confianza',
              description: 'Envía ofertas por nuestro sistema seguro. Revisión legal incluida.',
            },
            {
              number: '05',
              title: 'Cierra de Forma Segura',
              description: 'Protección de depósito, soporte bilingüe y supervisión experta hasta tener las llaves.',
            },
          ],
        },
      },
      agent: {
        title: 'Para Asesores Inmobiliarios',
        subtitle: 'Únete a la Plataforma Más Confiable de México',
        problem: {
          title: 'El Desafío',
          description: 'Agentes honestos luchan por competir con estafadores que bajan precios y desaparecen. Compradores internacionales dudan en confiar.',
          stats: [
            { value: '73%', label: 'de compradores internacionales temen fraudes' },
            { value: '5x', label: 'ciclos de venta más largos por falta de confianza' },
            { value: '60%', label: 'de tratos fallan por falta de transparencia' },
          ],
        },
        solution: {
          title: 'Por Qué Unirte a TrustLand',
          description: 'Destácate de estafadores con credenciales verificadas. Accede a compradores serios que confían en nuestro proceso.',
          features: [
            {
              title: 'Insignia Verificada',
              description: 'Nadia Gaytan certifica personalmente tus credenciales. Destaca de la competencia sin licencia.',
              icon: '🛡️',
            },
            {
              title: 'Alcance Global',
              description: 'Accede a inversores internacionales de EE.UU., Canadá y Europa buscando propiedades en Mérida.',
              icon: '🌎',
            },
            {
              title: 'Construye Reputación',
              description: 'Gana calificaciones de 5 estrellas que te siguen. Buen servicio = más referidos y clientes recurrentes.',
              icon: '⭐',
            },
            {
              title: 'Herramientas y Soporte',
              description: 'CRM, mensajería de clientes, gestión de documentos y soporte legal bilingüe incluido.',
              icon: '🛠️',
            },
          ],
        },
        requirements: {
          title: 'Requisitos de Certificación',
          items: [
            'Licencia inmobiliaria válida en Yucatán',
            'Historial limpio de transacciones (mínimo 10 ventas completadas)',
            'Seguro de responsabilidad profesional',
            'Verificación de ID gubernamental',
            'Verificación de dirección de oficina',
            'Verificación de referencias de clientes',
          ],
        },
        pricing: {
          title: 'Precios Simples',
          plan: {
            price: '3%',
            description: 'Comisión solo en transacciones exitosas',
            features: [
              'Sin cuotas mensuales',
              'Conexiones ilimitadas con clientes',
              'Todas las características de la plataforma',
              'Soporte legal y servicios de depósito',
              'Herramientas de marketing y CRM',
            ],
          },
        },
      },
      stats: {
        safety: { value: '#2', label: 'Más Segura N.A.', desc: 'Ranking CEOWORLD' },
        growth: { value: '15.6%', label: 'Crecimiento Anual', desc: 'Valor Propiedades' },
        crime: { value: '2.5', label: 'Tasa Criminal', desc: 'Por 100k residentes' },
      },
      trust: {
        badge: 'Cero Fraudes',
        title: 'Cada Asesor Certificado',
        description: 'Nadia Gaytan verifica personalmente credenciales, historial y satisfacción.',
      },
      merida: {
        badge: 'La Ciudad Blanca',
        title: '¿Por Qué Mérida?',
        reasons: [
          { title: 'Más Segura México', subtitle: '100 crímenes/100k vs 632', icon: 'shield' },
          { title: 'Boom Inmobiliario', subtitle: '+36.3% en 2 años', icon: 'chart' },
          { title: 'Sin Fideicomiso', subtitle: 'Ahorra 1-2% inicial', icon: 'bank' },
          { title: 'Infraestructura', subtitle: 'Tren Maya + Ie-Tram', icon: 'train' },
          { title: 'Patrimonio Cultural', subtitle: 'UNESCO Patrimonio', icon: 'culture' },
          { title: '#1 Calidad Vida', subtitle: 'Ranking UN-Habitat', icon: 'star' },
        ],
      },
      agents: {
        title: 'Asesores Certificados Destacados',
        subtitle: 'Verificados por Nadia Gaytan',
      },
      cta: {
        investor: {
          title: '¿Listo para Invertir?',
          subtitle: 'Únete a inversores internacionales',
          button: 'Comenzar',
          namePlaceholder: 'Tu Nombre',
          emailPlaceholder: 'Tu Correo',
        },
        agent: {
          title: '¿Unirte a Nuestra Red?',
          subtitle: 'Accede a compradores serios',
          button: 'Aplicar',
          namePlaceholder: 'Tu Nombre',
          emailPlaceholder: 'Tu Correo',
        },
      },
      testimonials: {
        badge: 'Certificadora de Confianza',
        title: 'Conoce a Tu Experta en Certificación',
        subtitle: 'Nadia Gaytan verifica personalmente cada asesor en TrustLand',
        certifier: {
          name: 'Nadia Gaytan',
          title: 'Directora de Certificación',
          credentials: 'Corredora Inmobiliaria Licenciada • 15+ Años Experiencia • Grupo ORVE',
          description: 'Con más de 15 años en bienes raíces de Mérida y cientos de transacciones internacionales exitosas, Nadia revisa personalmente cada solicitud de asesor para garantizar que solo los profesionales más confiables se unan a TrustLand.',
        },
        reviews: [
          {
            text: 'Nadia nos guió para comprar nuestra casa de ensueño en Mérida. Su transparencia y atención al detalle nos hicieron sentir completamente seguros a pesar de estar a 3,000 km de distancia.',
            author: 'Michael & Sarah Thompson',
            location: 'Toronto, Canadá',
            rating: 5,
            verified: true,
          },
          {
            text: 'Después de una experiencia terrible con un agente sin licencia, encontrar a Nadia fue una bendición. Nos guió personalmente por cada documento legal en inglés y español.',
            author: 'Robert Chen',
            location: 'San Francisco, EUA',
            rating: 5,
            verified: true,
          },
          {
            text: 'La red de agentes certificados de Nadia es excepcional. Cada profesional que recomendó fue honesto, conocedor y cumplió sus promesas. Sin sorpresas.',
            author: 'Emma Dubois',
            location: 'Montreal, Canadá',
            rating: 5,
            verified: true,
          },
          {
            text: 'Éramos escépticos sobre invertir en México, pero el proceso de certificación de Nadia nos dio confianza. Sus agentes son genuinos - licenciados, asegurados y responsables.',
            author: 'James & Linda Martinez',
            location: 'Austin, EUA',
            rating: 5,
            verified: true,
          },
        ],
      },
    },
  };

  const t = content[language];

  const mockAgents = [
    {
      name: 'Carlos Méndez',
      rating: 4.9,
      reviews: 127,
      transactions: 143,
      specialties: ['Luxury', 'Beach'],
      color: 'from-blue-400 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
      name: 'Sofia Hernández',
      rating: 5.0,
      reviews: 89,
      transactions: 92,
      specialties: ['Investment', 'Condos'],
      color: 'from-purple-400 to-pink-500',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: 'Miguel Ángel Torres',
      rating: 4.8,
      reviews: 156,
      transactions: 168,
      specialties: ['Commercial', 'Land'],
      color: 'from-orange-400 to-red-500',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: 'Ana Patricia Ruiz',
      rating: 4.9,
      reviews: 103,
      transactions: 109,
      specialties: ['Colonial', 'Reno'],
      color: 'from-green-400 to-teal-500',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Language Toggle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-4 right-4 z-50 flex gap-2"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
            language === 'en'
              ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/50'
              : 'bg-white/90 text-gray-700 border border-gray-200'
          }`}
        >
          EN
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLanguage('es')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
            language === 'es'
              ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/50'
              : 'bg-white/90 text-gray-700 border border-gray-200'
          }`}
        >
          ES
        </motion.button>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-sky-100/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Logo />
            <div className="flex flex-col">
              <span className="text-xl font-black bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 bg-clip-text text-transparent leading-tight">
                TrustLand
              </span>
              <span className="text-[9px] font-bold text-sky-600/70 tracking-wider leading-none">
                CERTIFIED PLATFORM
              </span>
            </div>
          </motion.div>

          <div className="hidden sm:flex items-center gap-4 md:gap-4">
            {[
              { label: t.nav.forInvestors, href: '#investors' },
              { label: t.nav.forAgents, href: '#agents' },
              { label: t.nav.about, href: '#merida' },
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ scale: 1.05 }}
                className="text-sm font-semibold text-gray-700 hover:text-sky-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-8 px-4 sm:px-6 min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-blue-50 to-white" />

            {/* Animated clouds */}
            {[
              { x: [0, 50, 0], y: 80, width: 180, delay: 0 },
              { x: [0, -60, 0], y: 140, width: 220, delay: 2 },
            ].map((cloud, idx) => (
              <motion.div
                key={idx}
                animate={{ x: cloud.x }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: cloud.delay }}
                className="absolute"
                style={{ top: cloud.y, left: '10%' }}
              >
                <svg width={cloud.width} height="60" viewBox="0 0 200 60" fill="none">
                  <ellipse cx="50" cy="35" rx="35" ry="25" fill="white" fillOpacity="0.4" />
                  <ellipse cx="100" cy="30" rx="50" ry="30" fill="white" fillOpacity="0.5" />
                  <ellipse cx="150" cy="35" rx="35" ry="25" fill="white" fillOpacity="0.4" />
                </svg>
              </motion.div>
            ))}

            <HeroIllustration />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100/90 backdrop-blur-sm border border-sky-200 mb-4 shadow-lg"
              >
                <span className="text-xs font-bold text-sky-700">{t.hero.badge}</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight font-display">
                <span className="text-gray-900 block">{t.hero.title}</span>
                <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text text-transparent block">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-gray-600 mb-6">{t.hero.subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-2">
                <motion.a
                  href="#start-investing"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(56,189,248,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-bold shadow-xl shadow-sky-500/30 relative overflow-hidden group text-center text-sm"
                >
                  <span className="relative z-10">{t.hero.ctaInvestor} →</span>
                </motion.a>
                <motion.a
                  href="#become-agent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/90 backdrop-blur-md text-sky-600 rounded-xl font-bold border-2 border-sky-200 hover:border-sky-400 transition-all text-center text-sm"
                >
                  {t.hero.ctaAgent}
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=1600&fit=crop"
                  alt="Mérida Architecture"
                  width={1200}
                  height={1600}
                  className="object-cover w-full h-full"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent" />

                {/* Floating stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl"
                >
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: '500+', label: language === 'en' ? 'Properties' : 'Propiedades' },
                      { value: '#2', label: language === 'en' ? 'Safest' : 'Más Segura' },
                      { value: '15.6%', label: language === 'en' ? 'Growth' : 'Crecimiento' },
                    ].map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-black bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-xs font-semibold text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4 bg-gradient-to-br from-sky-50 via-blue-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[t.stats.safety, t.stats.growth, t.stats.crime].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-sky-100 hover:border-sky-300 transition-all hover:shadow-2xl hover:shadow-sky-500/20"
              >
                <div className="text-3xl sm:text-5xl font-black bg-gradient-to-br from-sky-600 to-blue-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-base font-black text-gray-900 mb-1">{stat.label}</div>
                <div className="text-[10px] sm:text-xs text-gray-500">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="investors" className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-200 mb-3">
              <span className="text-xs font-bold text-sky-700">{t.trust.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-xl font-black text-gray-900 mb-4 font-display">{t.trust.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.trust.description}</p>
          </div>

          <div className="relative w-full h-48 rounded-3xl overflow-hidden shadow-2xl mb-8">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=600&fit=crop"
              alt="Office"
              width={1600}
              height={600}
              className="object-cover w-full h-full"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-blue-900/60 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-3xl font-black mb-4">🛡️</div>
                <div className="text-xl font-black">100% Verified Agents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mérida Benefits */}
      <section id="merida" className="py-10 px-4 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sky-200 mb-3">
              <span className="text-xs font-bold text-sky-700">{t.merida.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-xl font-black text-gray-900 font-display">{t.merida.title}</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {t.merida.reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white border-2 border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-3">{reason.icon === 'shield' ? '🛡️' : reason.icon === 'chart' ? '📈' : reason.icon === 'bank' ? '🏛️' : reason.icon === 'train' ? '🚄' : reason.icon === 'culture' ? '🎭' : '⭐'}</div>
                <h3 className="text-base font-black text-gray-900 mb-1">{reason.title}</h3>
                <p className="text-xs text-gray-600">{reason.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section id="agents" className="py-10 px-4 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2 font-display">{t.agents.title}</h2>
            <p className="text-gray-600">{t.agents.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {mockAgents.map((agent, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 rounded-3xl bg-white border-2 border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all"
              >
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>

                <h4 className="text-sm font-black text-gray-900 text-center mb-2">{agent.name}</h4>

                <div className="flex items-center justify-center gap-1 mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-base ${i < Math.floor(agent.rating) ? 'text-amber-400' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold">{agent.rating}</span>
                </div>

                <div className="text-center text-xs text-gray-600 mb-3">
                  {agent.transactions} {language === 'en' ? 'deals' : 'ventas'}
                </div>

                <div className="flex flex-wrap gap-1 justify-center">
                  {agent.specialties.map((specialty, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 text-xs font-bold">
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Investing Section */}
      <section id="start-investing" className="py-8 px-4 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-2xl font-black text-gray-900 mb-4 font-display">{t.investing.title}</h2>
            <p className="text-xl text-gray-600">{t.investing.subtitle}</p>
          </motion.div>

          {/* The Problem */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 mb-4">
                <span className="text-sm font-bold text-red-700">{t.investing.problem.title}</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{t.investing.problem.description}</h3>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {t.investing.problem.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-100"
                >
                  <div className="text-2xl font-black text-red-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-700">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200">
              <h4 className="text-xl font-black text-gray-900 mb-6">Common Fraud Tactics:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.investing.problem.issues.map((issue, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-sm">✕</span>
                    </div>
                    <span className="text-gray-700">{issue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-4">
                <span className="text-sm font-bold text-green-700">{t.investing.solution.title}</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{t.investing.solution.description}</h3>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {t.investing.solution.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-300 hover:shadow-xl transition-all"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="text-xl font-black text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-4 font-display">{t.investing.howItWorks.title}</h3>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 to-blue-600 hidden sm:block" />

              <div className="space-y-8">
                {t.investing.howItWorks.steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg relative z-10">
                      {step.number}
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-2xl font-black text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become Agent Section */}
      <section id="become-agent" className="py-8 px-4 bg-gradient-to-br from-blue-50 via-sky-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-2xl font-black text-gray-900 mb-4 font-display">{t.agent.title}</h2>
            <p className="text-xl text-gray-600">{t.agent.subtitle}</p>
          </motion.div>

          {/* The Challenge */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-4">
                <span className="text-sm font-bold text-orange-700">{t.agent.problem.title}</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{t.agent.problem.description}</h3>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4">
              {t.agent.problem.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-100"
                >
                  <div className="text-2xl font-black text-orange-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-700">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Join */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
                <span className="text-sm font-bold text-blue-700">{t.agent.solution.title}</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{t.agent.solution.description}</h3>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {t.agent.solution.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border-2 border-blue-200 hover:border-blue-300 hover:shadow-xl transition-all"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="text-xl font-black text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl font-black text-gray-900 text-center mb-4">{t.agent.requirements.title}</h3>
            </motion.div>

            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
              {t.agent.requirements.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-blue-100"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-48 bg-white/10 rounded-full blur-3xl" />
              <div className="relative">
                <h3 className="text-xl font-black mb-2 text-center">{t.agent.pricing.title}</h3>
                <div className="text-center mb-8">
                  <div className="text-4xl font-black mb-2">{t.agent.pricing.plan.price}</div>
                  <p className="text-blue-100">{t.agent.pricing.plan.description}</p>
                </div>

                <div className="space-y-3">
                  {t.agent.pricing.plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href="#agents"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 block text-center px-8 py-4 rounded-2xl bg-white text-blue-600 font-black hover:bg-blue-50 transition-all shadow-xl"
                >
                  {language === 'en' ? 'Apply Now' : 'Aplicar Ahora'}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Forms */}
      <section className="py-10 px-4 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-4">
          {/* Investor CTA */}
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="text-xl font-black mb-2 font-display">{t.cta.investor.title}</h3>
              <p className="text-sky-100 mb-6">{t.cta.investor.subtitle}</p>

              <form className="space-y-3">
                <input
                  type="text"
                  placeholder={t.cta.investor.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder={t.cta.investor.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full px-6 py-3 rounded-xl bg-white text-sky-600 font-bold hover:bg-sky-50 transition-all shadow-xl">
                  {t.cta.investor.button}
                </button>
              </form>
            </div>
          </div>

          {/* Agent CTA */}
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="text-xl font-black mb-2 font-display">{t.cta.agent.title}</h3>
              <p className="text-blue-100 mb-6">{t.cta.agent.subtitle}</p>

              <form className="space-y-3">
                <input
                  type="text"
                  placeholder={t.cta.agent.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder={t.cta.agent.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full px-6 py-3 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all shadow-xl">
                  {t.cta.agent.button}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Nadia Gaytan */}
      <section className="py-8 px-4 bg-gradient-to-br from-white via-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <span className="text-sm font-bold text-blue-700">{t.testimonials.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-2xl font-black text-gray-900 mb-4 font-display">{t.testimonials.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.testimonials.subtitle}</p>
          </motion.div>

          {/* Nadia's Profile Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-10"
          >
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white to-sky-50 border-2 border-blue-200 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />

              <div className="relative grid sm:grid-cols-[300px_1fr] gap-8 items-center">
                {/* Image */}
                <div className="mx-auto sm:mx-0 relative">
                  <div className="relative w-64 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src="/images/nadia-gaytan.svg"
                      alt="Nadia Gaytan - Chief Certification Officer"
                      width={256}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Trust Badge Overlay */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black text-sm shadow-xl flex items-center gap-2">
                    <span>✓</span>
                    <span>{language === 'en' ? 'Verified Certifier' : 'Certificadora Verificada'}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{t.testimonials.certifier.name}</h3>
                  <div className="text-xl text-blue-600 font-bold mb-3">{t.testimonials.certifier.title}</div>
                  <div className="text-sm text-gray-600 mb-6">{t.testimonials.certifier.credentials}</div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t.testimonials.certifier.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-xl bg-white border border-blue-100">
                      <div className="text-xl font-black text-blue-600">15+</div>
                      <div className="text-xs text-gray-600">{language === 'en' ? 'Years' : 'Años'}</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white border border-blue-100">
                      <div className="text-xl font-black text-blue-600">500+</div>
                      <div className="text-xs text-gray-600">{language === 'en' ? 'Transactions' : 'Transacciones'}</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white border border-blue-100">
                      <div className="text-xl font-black text-blue-600">100%</div>
                      <div className="text-xs text-gray-600">{language === 'en' ? 'Verified' : 'Verificado'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client Reviews */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-xl font-black text-gray-900 text-center mb-8">
              {language === 'en' ? 'Client Testimonials' : 'Testimonios de Clientes'}
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {t.testimonials.reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-400">⭐</span>
                  ))}
                </div>

                {/* Verified Badge */}
                {review.verified && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-4">
                    <span className="text-xs font-bold text-green-700">
                      ✓ {language === 'en' ? 'Verified Purchase' : 'Compra Verificada'}
                    </span>
                  </div>
                )}

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-black">
                    {review.author.split(' ')[0][0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.author}</div>
                    <div className="text-sm text-gray-600">{review.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-2xl font-black mb-3">
                {language === 'en' ? '100% Certified. 100% Trustworthy.' : '100% Certificado. 100% Confiable.'}
              </h4>
              <p className="text-blue-100">
                {language === 'en'
                  ? 'Every agent on TrustLand is personally reviewed by Nadia Gaytan. No exceptions.'
                  : 'Cada asesor en TrustLand es revisado personalmente por Nadia Gaytan. Sin excepciones.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="scale-90">
                <Logo />
              </div>
              <div>
                <div className="text-xl font-black">TrustLand</div>
                <div className="text-xs text-gray-400">Transparent. Verified. Trustworthy.</div>
              </div>
            </div>

            <div className="text-xs text-gray-400">© 2026 TrustLand. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
