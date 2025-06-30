"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import {
  MapPin,
  Globe,
  Smartphone,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  MessageCircle,
  Award,
  Users,
  TrendingUp,
  Zap,
  Target,
  Star,
  Phone,
  Calendar,
  Eye,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// WhatsApp redirect function
const redirectToWhatsApp = () => {
  const phoneNumber = "5511999999999" // Substitua pelo número real
  const message = "Olá! Quero saber mais sobre os serviços da Lokaly Hub para meu negócio"
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}

// Animação criativa do nome Lokaly Hub
const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="text-2xl font-bold cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        animate={isHovered ? { rotateY: 360 } : { rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Lokaly
      </motion.span>
      <motion.span
        className="inline-block ml-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        animate={isHovered ? { rotateX: 360 } : { rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      >
        Hub
      </motion.span>
    </motion.div>
  )
}

// Slides Verticais Inteligentes
const VerticalSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "Google Meu Negócio",
      description: "Otimização completa para aparecer em primeiro lugar nas buscas locais",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/20 to-cyan-900/20",
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Site Profissional",
      description: "Site responsivo e otimizado que converte visitantes em clientes",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900/20 to-emerald-900/20",
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Social Media",
      description: "Gestão completa das redes sociais com conteúdo que engaja",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900/20 to-pink-900/20",
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Estratégia Local",
      description: "Metodologia exclusiva para dominar seu mercado local",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-900/20 to-red-900/20",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Nossos <span className="text-blue-400">Serviços</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="h-96 overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`h-full bg-gradient-to-br ${slides[currentSlide].bgColor} backdrop-blur-xl rounded-3xl border border-slate-700/50 p-12 flex flex-col justify-center items-center text-center`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`bg-gradient-to-r ${slides[currentSlide].color} p-6 rounded-2xl mb-8`}
                >
                  <div className="text-white">{slides[currentSlide].icon}</div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                >
                  {slides[currentSlide].title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-xl text-slate-300 max-w-2xl leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-gradient-to-r ${slides[index].color} scale-125`
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Controles */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 p-3 rounded-full transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 p-3 rounded-full transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

// Resultados Melhorados com Imagens e Estrelas
const ResultsSection = () => {
  const [currentResult, setCurrentResult] = useState(0)

  const results = [
    {
      business: "Pizzaria do João",
      category: "Restaurante",
      location: "São Paulo, SP",
      image: "/placeholder.svg?height=400&width=600",
      profileImage: "/placeholder.svg?height=100&width=100",
      owner: "João Silva",
      stars: 5,
      reviews: 127,
      metrics: {
        before: { value: "3", label: "clientes/dia", icon: <Users className="h-5 w-5" /> },
        after: { value: "45", label: "clientes/dia", icon: <Users className="h-5 w-5" /> },
        increase: "+1.400%",
        period: "30 dias",
      },
      testimonial:
        "Nunca imaginei que pudesse ter tantos clientes! A Lokaly Hub transformou completamente meu negócio. Agora tenho fila na porta!",
      additionalMetrics: [
        { icon: <Phone className="h-4 w-4" />, label: "Ligações", value: "+280%" },
        { icon: <Eye className="h-4 w-4" />, label: "Visualizações", value: "+450%" },
        { icon: <Calendar className="h-4 w-4" />, label: "Reservas", value: "+320%" },
      ],
    },
    {
      business: "Clínica OdontoSaúde",
      category: "Saúde",
      location: "Rio de Janeiro, RJ",
      image: "/placeholder.svg?height=400&width=600",
      profileImage: "/placeholder.svg?height=100&width=100",
      owner: "Dra. Maria Santos",
      stars: 5,
      reviews: 89,
      metrics: {
        before: { value: "5", label: "pacientes/semana", icon: <Users className="h-5 w-5" /> },
        after: { value: "32", label: "pacientes/semana", icon: <Users className="h-5 w-5" /> },
        increase: "+540%",
        period: "45 dias",
      },
      testimonial:
        "Resultado surpreendente! Minha agenda está sempre lotada e tenho lista de espera. O investimento se pagou em 2 semanas!",
      additionalMetrics: [
        { icon: <Phone className="h-4 w-4" />, label: "Agendamentos", value: "+380%" },
        { icon: <Eye className="h-4 w-4" />, label: "Buscas", value: "+520%" },
        { icon: <Star className="h-4 w-4" />, label: "Avaliações", value: "+200%" },
      ],
    },
    {
      business: "Bella Hair Salão",
      category: "Beleza",
      location: "Belo Horizonte, MG",
      image: "/placeholder.svg?height=400&width=600",
      profileImage: "/placeholder.svg?height=100&width=100",
      owner: "Ana Costa",
      stars: 5,
      reviews: 156,
      metrics: {
        before: { value: "12", label: "clientes/semana", icon: <Users className="h-5 w-5" /> },
        after: { value: "67", label: "clientes/semana", icon: <Users className="h-5 w-5" /> },
        increase: "+458%",
        period: "35 dias",
      },
      testimonial:
        "Melhor investimento que já fiz! Meu salão está sempre cheio e consegui contratar mais funcionárias. Recomendo de olhos fechados!",
      additionalMetrics: [
        { icon: <Calendar className="h-4 w-4" />, label: "Agendamentos", value: "+420%" },
        { icon: <Phone className="h-4 w-4" />, label: "Ligações", value: "+350%" },
        { icon: <Eye className="h-4 w-4" />, label: "Perfil Views", value: "+480%" },
      ],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentResult((prev) => (prev + 1) % results.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [results.length])

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-current" : "text-slate-600"}`} />
        ))}
      </div>
    )
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900/20 to-blue-900/10">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Resultados <span className="text-blue-400">Comprovados</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Veja como transformamos negócios reais com nossa metodologia exclusiva
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentResult}
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Lado Esquerdo - Imagem e Info do Negócio */}
                <div className="relative">
                  <img
                    src={results[currentResult].image || "/placeholder.svg"}
                    alt={results[currentResult].business}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Info do Negócio */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={results[currentResult].profileImage || "/placeholder.svg"}
                        alt={results[currentResult].owner}
                        className="w-12 h-12 rounded-full border-2 border-white mr-4"
                      />
                      <div>
                        <h4 className="text-white font-semibold">{results[currentResult].owner}</h4>
                        <p className="text-slate-300 text-sm">{results[currentResult].location}</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{results[currentResult].business}</h3>
                    <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30 mb-3">
                      {results[currentResult].category}
                    </Badge>

                    <div className="flex items-center gap-3">
                      {renderStars(results[currentResult].stars)}
                      <span className="text-white font-semibold">{results[currentResult].stars}.0</span>
                      <span className="text-slate-300">({results[currentResult].reviews} avaliações)</span>
                    </div>
                  </div>
                </div>

                {/* Lado Direito - Métricas e Depoimento */}
                <div className="p-8">
                  {/* Métricas Principais */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <Badge className="bg-red-600/20 text-red-300 border-red-600/30 mb-3">ANTES</Badge>
                      <div className="flex items-center justify-center mb-2">
                        <div className="text-red-400 mr-2">{results[currentResult].metrics.before.icon}</div>
                      </div>
                      <div className="text-2xl font-bold text-red-400">
                        {results[currentResult].metrics.before.value}
                      </div>
                      <div className="text-sm text-slate-400">{results[currentResult].metrics.before.label}</div>
                    </div>

                    <div className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                        {results[currentResult].metrics.increase}
                      </div>
                      <div className="text-sm text-slate-400">em {results[currentResult].metrics.period}</div>
                      <ArrowRight className="h-8 w-8 text-blue-400 mx-auto mt-2 animate-pulse" />
                    </div>

                    <div className="text-center">
                      <Badge className="bg-green-600/20 text-green-300 border-green-600/30 mb-3">DEPOIS</Badge>
                      <div className="flex items-center justify-center mb-2">
                        <div className="text-green-400 mr-2">{results[currentResult].metrics.after.icon}</div>
                      </div>
                      <div className="text-2xl font-bold text-green-400">
                        {results[currentResult].metrics.after.value}
                      </div>
                      <div className="text-sm text-slate-400">{results[currentResult].metrics.after.label}</div>
                    </div>
                  </div>

                  {/* Métricas Adicionais */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {results[currentResult].additionalMetrics.map((metric, index) => (
                      <div key={index} className="bg-slate-800/50 p-4 rounded-xl text-center backdrop-blur-sm">
                        <div className="text-blue-400 mb-2 flex justify-center">{metric.icon}</div>
                        <div className="text-lg font-bold text-blue-400">{metric.value}</div>
                        <div className="text-xs text-slate-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Depoimento */}
                  <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
                    <Quote className="h-8 w-8 text-blue-400 mb-4" />
                    <p className="text-slate-200 italic text-lg leading-relaxed mb-4">
                      "{results[currentResult].testimonial}"
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-slate-400 font-medium">- {results[currentResult].owner}</p>
                      <div className="flex items-center gap-2">{renderStars(results[currentResult].stars)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            {results.map((result, index) => (
              <button
                key={index}
                onClick={() => setCurrentResult(index)}
                className={`px-4 py-2 rounded-full transition-all ${
                  index === currentResult ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-400 hover:bg-slate-600"
                }`}
              >
                {result.business.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Equipe com Slides Horizontais
const TeamSection = () => {
  const [currentMember, setCurrentMember] = useState(0)

  const team = [
    {
      name: "Ricardo Santos",
      role: "CEO & Especialista SEO",
      image: "/placeholder.svg?height=300&width=300",
      description: "15+ anos transformando negócios locais através do Google",
      specialties: ["Google Meu Negócio", "SEO Local", "Estratégia Digital"],
    },
    {
      name: "Marina Costa",
      role: "Desenvolvedora & Designer",
      image: "/placeholder.svg?height=300&width=300",
      description: "Cria sites que convertem visitantes em clientes reais",
      specialties: ["Sites Responsivos", "UI/UX Design", "Conversão"],
    },
    {
      name: "Carlos Mendes",
      role: "Social Media Expert",
      image: "/placeholder.svg?height=300&width=300",
      description: "Especialista em criar conteúdo que engaja e vende",
      specialties: ["Conteúdo Viral", "Gestão de Redes", "Engajamento"],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Nossa <span className="text-blue-400">Equipe</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMember}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                      <img
                        src={team[currentMember].image || "/placeholder.svg"}
                        alt={team[currentMember].name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600/20 text-blue-300 border-blue-600/30">
                      <Award className="h-3 w-3 mr-1" />
                      Expert
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {team[currentMember].name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-4 text-lg">{team[currentMember].role}</p>
                  <p className="text-slate-300 mb-6 leading-relaxed">{team[currentMember].description}</p>

                  <div className="space-y-2">
                    {team[currentMember].specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        <span className="text-slate-400">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            {team.map((member, index) => (
              <button
                key={index}
                onClick={() => setCurrentMember(index)}
                className={`px-4 py-2 rounded-full transition-all ${
                  index === currentMember ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-400 hover:bg-slate-600"
                }`}
              >
                {member.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function SEOLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20 text-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <AnimatedLogo />
          <Button
            onClick={redirectToWhatsApp}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Falar Conosco
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="text-center">
            <motion.div variants={fadeInUp}>
              <Badge className="mb-8 bg-blue-900/20 text-blue-300 border-blue-700/30 px-4 py-2 backdrop-blur-sm">
                🚀 Transforme Seu Negócio Local
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
            >
              Domine o Google
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Multiplique Clientes
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              SEO + Site + Social Media
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Solução completa para negócios locais
              </span>
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-16">
              <Button
                onClick={redirectToWhatsApp}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Quero Crescer Agora
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6 rounded-2xl backdrop-blur-xl border border-slate-700/50"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  +300%
                </div>
                <p className="text-slate-400">Aumento Médio</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6 rounded-2xl backdrop-blur-xl border border-slate-700/50"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-slate-400">Negócios Transformados</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6 rounded-2xl backdrop-blur-xl border border-slate-700/50"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  30 Dias
                </div>
                <p className="text-slate-400">Para Ver Resultados</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Slides Verticais dos Serviços */}
      <VerticalSlides />

      {/* Resultados Melhorados */}
      <ResultsSection />

      {/* Equipe */}
      <TeamSection />

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Pronto para <span className="text-blue-400">Crescer?</span>
            </h2>

            <div className="bg-slate-900/30 p-12 rounded-3xl border border-slate-700/50 backdrop-blur-xl">
              <div className="text-center space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center">
                    <Zap className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Resultados Rápidos</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Suporte Especializado</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Crescimento Garantido</span>
                  </div>
                </div>

                <Button
                  onClick={redirectToWhatsApp}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Começar Agora
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </div>
            </div>

            <p className="text-slate-400 mt-8">⏰ Vagas limitadas - Fale conosco hoje mesmo!</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800/50">
        <div className="container mx-auto max-w-6xl text-center">
          <AnimatedLogo />
          <p className="text-slate-400 mt-4">© 2024 Lokaly Hub. Transformando negócios locais.</p>
        </div>
      </footer>
    </div>
  )
}
