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
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
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
      className="text-xl md:text-2xl font-bold cursor-pointer"
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

// Slides Verticais Otimizados para Mobile
const VerticalSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      icon: <MapPin className="h-8 w-8 md:h-12 md:w-12" />,
      title: "Google Meu Negócio",
      description: "Apareça em primeiro lugar nas buscas locais",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/20 to-cyan-900/20",
    },
    {
      icon: <Globe className="h-8 w-8 md:h-12 md:w-12" />,
      title: "Site Profissional",
      description: "Site que converte visitantes em clientes",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900/20 to-emerald-900/20",
    },
    {
      icon: <Smartphone className="h-8 w-8 md:h-12 md:w-12" />,
      title: "Social Media",
      description: "Conteúdo que engaja e vende",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900/20 to-pink-900/20",
    },
    {
      icon: <Target className="h-8 w-8 md:h-12 md:w-12" />,
      title: "Estratégia Local",
      description: "Domine seu mercado local",
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
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Nossos <span className="text-blue-400">Serviços</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="h-64 md:h-96 overflow-hidden rounded-2xl md:rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`h-full bg-gradient-to-br ${slides[currentSlide].bgColor} backdrop-blur-xl rounded-2xl md:rounded-3xl border border-slate-700/50 p-6 md:p-12 flex flex-col justify-center items-center text-center`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className={`bg-gradient-to-r ${slides[currentSlide].color} p-4 md:p-6 rounded-xl md:rounded-2xl mb-4 md:mb-8`}
                >
                  <div className="text-white">{slides[currentSlide].icon}</div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl md:text-4xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                >
                  {slides[currentSlide].title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-4 md:mt-8 gap-2 md:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-gradient-to-r ${slides[index].color} scale-125`
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Controles - Ocultos no mobile */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 p-3 rounded-full transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 p-3 rounded-full transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

// Resultados Otimizados para Mobile
const ResultsSection = () => {
  const [currentResult, setCurrentResult] = useState(0)

  const results = [
    {
      business: "Pizzaria do João",
      category: "Restaurante",
      location: "São Paulo, SP",
      image: "/placeholder.svg?height=300&width=400",
      profileImage: "/placeholder.svg?height=80&width=80",
      owner: "João Silva",
      stars: 5,
      reviews: 127,
      metrics: {
        before: { value: "3", label: "clientes/dia" },
        after: { value: "45", label: "clientes/dia" },
        increase: "+1.400%",
        period: "30 dias",
      },
      testimonial: "Nunca imaginei que pudesse ter tantos clientes! Resultado incrível.",
      additionalMetrics: [
        { label: "Ligações", value: "+280%" },
        { label: "Views", value: "+450%" },
        { label: "Reservas", value: "+320%" },
      ],
    },
    {
      business: "Clínica OdontoSaúde",
      category: "Saúde",
      location: "Rio de Janeiro, RJ",
      image: "/placeholder.svg?height=300&width=400",
      profileImage: "/placeholder.svg?height=80&width=80",
      owner: "Dra. Maria Santos",
      stars: 5,
      reviews: 89,
      metrics: {
        before: { value: "5", label: "pacientes/semana" },
        after: { value: "32", label: "pacientes/semana" },
        increase: "+540%",
        period: "45 dias",
      },
      testimonial: "Agenda sempre lotada! O investimento se pagou em 2 semanas.",
      additionalMetrics: [
        { label: "Agendamentos", value: "+380%" },
        { label: "Buscas", value: "+520%" },
        { label: "Avaliações", value: "+200%" },
      ],
    },
    {
      business: "Bella Hair Salão",
      category: "Beleza",
      location: "Belo Horizonte, MG",
      image: "/placeholder.svg?height=300&width=400",
      profileImage: "/placeholder.svg?height=80&width=80",
      owner: "Ana Costa",
      stars: 5,
      reviews: 156,
      metrics: {
        before: { value: "12", label: "clientes/semana" },
        after: { value: "67", label: "clientes/semana" },
        increase: "+458%",
        period: "35 dias",
      },
      testimonial: "Melhor investimento! Consegui contratar mais funcionárias.",
      additionalMetrics: [
        { label: "Agendamentos", value: "+420%" },
        { label: "Ligações", value: "+350%" },
        { label: "Perfil Views", value: "+480%" },
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
          <Star
            key={i}
            className={`h-3 w-3 md:h-4 md:w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-slate-600"}`}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-slate-900/20 to-blue-900/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Resultados <span className="text-blue-400">Comprovados</span>
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto">
            Veja como transformamos negócios reais
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentResult}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-slate-700/50 overflow-hidden"
            >
              {/* Layout Mobile - Stack Vertical */}
              <div className="block md:hidden">
                {/* Imagem e Info do Negócio */}
                <div className="relative">
                  <img
                    src={results[currentResult].image || "/placeholder.svg"}
                    alt={results[currentResult].business}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center mb-3">
                      <img
                        src={results[currentResult].profileImage || "/placeholder.svg"}
                        alt={results[currentResult].owner}
                        className="w-8 h-8 rounded-full border border-white mr-3"
                      />
                      <div>
                        <h4 className="text-white font-semibold text-sm">{results[currentResult].owner}</h4>
                        <p className="text-slate-300 text-xs">{results[currentResult].location}</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{results[currentResult].business}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30 text-xs">
                        {results[currentResult].category}
                      </Badge>
                      {renderStars(results[currentResult].stars)}
                      <span className="text-white text-xs">({results[currentResult].reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Métricas Mobile */}
                <div className="p-4">
                  {/* Métricas Principais */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <Badge className="bg-red-600/20 text-red-300 border-red-600/30 mb-2 text-xs">ANTES</Badge>
                      <div className="text-lg font-bold text-red-400">
                        {results[currentResult].metrics.before.value}
                      </div>
                      <div className="text-xs text-slate-400">{results[currentResult].metrics.before.label}</div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                        {results[currentResult].metrics.increase}
                      </div>
                      <div className="text-xs text-slate-400">em {results[currentResult].metrics.period}</div>
                    </div>

                    <div className="text-center">
                      <Badge className="bg-green-600/20 text-green-300 border-green-600/30 mb-2 text-xs">DEPOIS</Badge>
                      <div className="text-lg font-bold text-green-400">
                        {results[currentResult].metrics.after.value}
                      </div>
                      <div className="text-xs text-slate-400">{results[currentResult].metrics.after.label}</div>
                    </div>
                  </div>

                  {/* Métricas Adicionais Mobile */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {results[currentResult].additionalMetrics.map((metric, index) => (
                      <div key={index} className="bg-slate-800/50 p-2 rounded-lg text-center backdrop-blur-sm">
                        <div className="text-sm font-bold text-blue-400">{metric.value}</div>
                        <div className="text-xs text-slate-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Depoimento Mobile */}
                  <div className="bg-slate-800/50 p-4 rounded-xl backdrop-blur-sm">
                    <Quote className="h-5 w-5 text-blue-400 mb-2" />
                    <p className="text-slate-200 italic text-sm leading-relaxed mb-3">
                      "{results[currentResult].testimonial}"
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-slate-400 text-xs">- {results[currentResult].owner}</p>
                      <div className="flex items-center gap-1">{renderStars(results[currentResult].stars)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layout Desktop - Grid */}
              <div className="hidden md:grid md:grid-cols-2 gap-0">
                {/* Lado Esquerdo - Imagem e Info do Negócio */}
                <div className="relative">
                  <img
                    src={results[currentResult].image || "/placeholder.svg"}
                    alt={results[currentResult].business}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

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

          <div className="flex justify-center mt-6 md:mt-8 gap-2 md:gap-4">
            {results.map((result, index) => (
              <button
                key={index}
                onClick={() => setCurrentResult(index)}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-full transition-all text-sm ${
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

// Equipe Otimizada para Mobile
const TeamSection = () => {
  const [currentMember, setCurrentMember] = useState(0)

  const team = [
    {
      name: "Ricardo Santos",
      role: "CEO & Especialista SEO",
      image: "/placeholder.svg?height=200&width=200",
      description: "15+ anos transformando negócios locais",
      specialties: ["Google Meu Negócio", "SEO Local", "Estratégia Digital"],
    },
    {
      name: "Marina Costa",
      role: "Desenvolvedora & Designer",
      image: "/placeholder.svg?height=200&width=200",
      description: "Sites que convertem visitantes em clientes",
      specialties: ["Sites Responsivos", "UI/UX Design", "Conversão"],
    },
    {
      name: "Carlos Mendes",
      role: "Social Media Expert",
      image: "/placeholder.svg?height=200&width=200",
      description: "Conteúdo que engaja e vende",
      specialties: ["Conteúdo Viral", "Gestão de Redes", "Engajamento"],
    },
  ]

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Nossa <span className="text-blue-400">Equipe</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMember}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="text-center">
                  <div className="relative mb-4 md:mb-6">
                    <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                      <img
                        src={team[currentMember].image || "/placeholder.svg"}
                        alt={team[currentMember].name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <Badge className="absolute -bottom-1 md:-bottom-2 left-1/2 -translate-x-1/2 bg-blue-600/20 text-blue-300 border-blue-600/30 text-xs">
                      <Award className="h-2 w-2 md:h-3 md:w-3 mr-1" />
                      Expert
                    </Badge>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {team[currentMember].name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-3 md:mb-4 text-base md:text-lg">
                    {team[currentMember].role}
                  </p>
                  <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {team[currentMember].description}
                  </p>

                  <div className="space-y-2">
                    {team[currentMember].specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center justify-center md:justify-start">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 mr-2 md:mr-3" />
                        <span className="text-slate-400 text-sm md:text-base">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 md:mt-8 gap-2 md:gap-4">
            {team.map((member, index) => (
              <button
                key={index}
                onClick={() => setCurrentMember(index)}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-full transition-all text-sm ${
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
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <AnimatedLogo />
          <Button
            onClick={redirectToWhatsApp}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm md:text-base"
          >
            <MessageCircle className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            Falar Conosco
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="text-center">
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 md:mb-8 bg-blue-900/20 text-blue-300 border-blue-700/30 px-3 py-1 md:px-4 md:py-2 backdrop-blur-sm text-xs md:text-sm">
                🚀 Transforme Seu Negócio Local
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
            >
              Domine o Google
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Multiplique Clientes
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              SEO + Site + Social Media
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Solução completa para negócios locais
              </span>
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-12 md:mb-16">
              <Button
                onClick={redirectToWhatsApp}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                Quero Crescer Agora
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-xl border border-slate-700/50"
              >
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 md:mb-2">
                  +300%
                </div>
                <p className="text-slate-400 text-sm md:text-base">Aumento Médio</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-xl border border-slate-700/50"
              >
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 md:mb-2">
                  500+
                </div>
                <p className="text-slate-400 text-sm md:text-base">Negócios Transformados</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-xl border border-slate-700/50"
              >
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 md:mb-2">
                  30 Dias
                </div>
                <p className="text-slate-400 text-sm md:text-base">Para Ver Resultados</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Slides Verticais dos Serviços */}
      <VerticalSlides />

      {/* Resultados Otimizados */}
      <ResultsSection />

      {/* Equipe */}
      <TeamSection />

      {/* CTA Final */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Pronto para <span className="text-blue-400">Crescer?</span>
            </h2>

            <div className="bg-slate-900/30 p-6 md:p-12 rounded-2xl md:rounded-3xl border border-slate-700/50 backdrop-blur-xl">
              <div className="text-center space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="flex items-center justify-center">
                    <Zap className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 md:mr-3" />
                    <span className="text-slate-300 text-sm md:text-base">Resultados Rápidos</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 md:mr-3" />
                    <span className="text-slate-300 text-sm md:text-base">Suporte Especializado</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 md:mr-3" />
                    <span className="text-slate-300 text-sm md:text-base">Crescimento Garantido</span>
                  </div>
                </div>

                <Button
                  onClick={redirectToWhatsApp}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                  Começar Agora
                  <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
                </Button>
              </div>
            </div>

            <p className="text-slate-400 mt-6 md:mt-8 text-sm md:text-base">
              ⏰ Vagas limitadas - Fale conosco hoje mesmo!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-slate-800/50">
        <div className="container mx-auto max-w-6xl text-center">
          <AnimatedLogo />
          <p className="text-slate-400 mt-3 md:mt-4 text-sm md:text-base">
            © 2024 Lokaly Hub. Transformando negócios locais.
          </p>
        </div>
      </footer>
    </div>
  )
}
