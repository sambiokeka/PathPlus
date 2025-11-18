import { FaPlay, FaStar, FaArrowRight, FaLightbulb, FaUserFriends, FaGraduationCap, FaCheck, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection = ({ stats, relatos }) => {
  const mentorStat = stats.find(s => s.label.includes('Mentores'))?.number || "200+";
  const trailStat = stats.find(s => s.label.includes('Trilhas'))?.number || "50+";

  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl mb-10 lg:mb-0 text-center">
            
            <h1 className="-mt-10 text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Prepare-se para o 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                futuro do trabalho
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-indigo-100 leading-relaxed mx-auto">
              Descubra trilhas de aprendizagem personalizadas, conecte-se com mentores 
              e desenvolva as habilidades que o mercado mais valoriza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <button className="w-full sm:w-64 hover:cursor-pointer bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center">
                  <FaPlay className="mr-3" />
                  Começar Agora
                </button>
              </Link>
              <Link to="/trilha">
                <button className="w-full sm:w-64 border-2 border-white text-white hover:cursor-pointer hover:bg-gray-800 hover:bg-opacity-10 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
                  Explorar Trilhas
                </button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center mt-8 text-indigo-100">
              <div>
                <p className="font-semibold">+10.000 profissionais já começaram</p>
                <div className="flex items-center justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-yellow-300 mr-1" />
                  ))}
                  <span className="ml-2">4.9/5 (2.4k avaliações)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-gray-50 dark:text-gray-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;