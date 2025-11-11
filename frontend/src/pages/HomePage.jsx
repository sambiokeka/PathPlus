import { useState, useEffect } from 'react';
import { FaPlay, FaGraduationCap, FaUserFriends, FaChartLine, FaRocket, FaStar, FaCheck, FaArrowRight, FaLightbulb, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa';

export default function HomePage()  {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: FaGraduationCap,
      title: 'Trilhas Personalizadas',
      description: 'Caminhos de aprendizado adaptados ao seu nível e objetivos profissionais',
      color: 'indigo'
    },
    {
      icon: FaUserFriends,
      title: 'Mentoria Especializada',
      description: 'Conecte-se com profissionais experientes da sua área de interesse',
      color: 'green'
    },
    {
      icon: FaChartLine,
      title: 'Progresso Inteligente',
      description: 'Acompanhe seu desenvolvimento com métricas e feedback contínuo',
      color: 'blue'
    },
    {
      icon: FaRocket,
      title: 'Preparação para o Futuro',
      description: 'Desenvolva as habilidades mais demandadas no mercado de trabalho',
      color: 'purple'
    }
  ];

  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Desenvolvedora Front-End',
      company: 'Tech Solutions',
      content: 'O Path+ transformou minha carreira. Em 6 meses consegui migrar do suporte técnico para desenvolvimento com um aumento de 60% no salário.',
      avatar: 'AS',
      rating: 5
    },
    {
      name: 'Carlos Mendes',
      role: 'Cientista de Dados',
      company: 'Data Analytics Co.',
      content: 'As trilhas de Data Science são incríveis. A mentoria me ajudou a construir projetos reais que impressionaram nas entrevistas.',
      avatar: 'CM',
      rating: 5
    },
    {
      name: 'Marina Oliveira',
      role: 'Product Manager',
      company: 'StartUp Inovação',
      content: 'Finalmente encontrei uma plataforma que entende as reais necessidades do mercado. As soft skills fazem toda a diferença!',
      avatar: 'MO',
      rating: 5
    }
  ];

  const stats = [
    { number: '10K+', label: 'Profissionais Impactados' },
    { number: '85%', label: 'Aumento Salarial Médio' },
    { number: '200+', label: 'Mentores Especializados' },
    { number: '50+', label: 'Trilhas Disponíveis' }
  ];

  const learningPaths = [
    {
      title: 'Data Science',
      description: 'Domine Python, ML e análise de dados',
      duration: '6 meses',
      level: 'Intermediário',
      students: '2.4k',
      color: 'blue'
    },
    {
      title: 'Desenvolvimento Full Stack',
      description: 'JavaScript, React, Node.js e muito mais',
      duration: '8 meses',
      level: 'Iniciante',
      students: '3.1k',
      color: 'green'
    },
    {
      title: 'UX/UI Design',
      description: 'Crie experiências digitais memoráveis',
      duration: '5 meses',
      level: 'Iniciante',
      students: '1.8k',
      color: 'purple'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getColorClasses = (color) => {
    const colors = {
      indigo: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300',
      green: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300',
      blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300',
      purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300'
    };
    return colors[color] || colors.indigo;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm mb-6">
                <FaLightbulb className="mr-2 text-yellow-300" />
                <span className="text-sm font-medium">O futuro do trabalho começa aqui</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Prepare-se para o 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  futuro do trabalho
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-indigo-100 leading-relaxed">
                Descubra trilhas de aprendizagem personalizadas, conecte-se com mentores 
                e desenvolva as habilidades que o mercado mais valoriza.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center">
                  <FaPlay className="mr-3" />
                  Começar Agora
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
                  Explorar Trilhas
                </button>
              </div>
              
              <div className="flex items-center mt-8 text-indigo-100">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-white rounded-full border-2 border-indigo-600 flex items-center justify-center">
                      <span className="text-indigo-600 font-bold text-sm">U{i}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold">+10.000 profissionais já começaram</p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className="text-yellow-300 mr-1" />
                    ))}
                    <span className="ml-2">4.9/5 (2.4k avaliações)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-md">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">+</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-800 dark:text-white text-lg">Path +</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Dashboard de Aprendizado</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <span>Progresso da Trilha</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-2">
                        <FaCheck className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">7</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Concluídos</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
                        <FaStar className="text-green-600 dark:text-green-400" />
                      </div>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">84%</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Pontuação</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                        <FaChartLine className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">36h</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Estudo</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    Continuar Aprendizado
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
                
                <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <FaUserFriends className="mr-2" />
                    <span className="font-semibold">+200 mentores</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <FaGraduationCap className="mr-2" />
                    <span className="font-semibold">50+ trilhas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-gray-50 dark:text-gray-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Por que escolher o <span className="text-indigo-600">Path +</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Combinamos tecnologia de ponta com metodologias de aprendizagem comprovadas 
              para oferecer a melhor experiência de desenvolvimento profissional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${getColorClasses(feature.color)}`}>
                  <feature.icon className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Trilhas em <span className="text-indigo-600">Destaque</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comece sua jornada com nossas trilhas mais populares, cuidadosamente 
              elaboradas por especialistas do mercado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-indigo-600 transition-colors">
                      {path.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {path.description}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(path.color)}`}>
                    <FaGraduationCap />
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{path.duration}</span>
                  <span>{path.level}</span>
                  <span>{path.students} alunos</span>
                </div>
                
                <button className="w-full bg-white dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-indigo-600 hover:text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white">
                  Explorar Trilha
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Ver Todas as Trilhas
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              O que dizem nossos <span className="text-indigo-600">alunos</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Histórias reais de transformação profissional através do aprendizado contínuo.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg relative">
              <div className="absolute -top-4 left-8">
                <div className="bg-indigo-600 text-white p-3 rounded-xl">
                  <FaStar className="text-2xl" />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-300 font-bold text-xl">
                      {testimonials[currentTestimonial].avatar}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mx-1" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para transformar sua carreira?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que já estão se preparando para o futuro do trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center">
              <FaPlay className="mr-3" />
              Começar Agora Gratuitamente
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
              Agendar Demonstração
            </button>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-indigo-100">
            <div className="flex items-center">
              <FaShieldAlt className="mr-2" />
              <span>7 dias grátis • Cancele quando quiser</span>
            </div>
            <div className="flex items-center">
              <FaGlobeAmericas className="mr-2" />
              <span>100% online • Aprenda de qualquer lugar</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
