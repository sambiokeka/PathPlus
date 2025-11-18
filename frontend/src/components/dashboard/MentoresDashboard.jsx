const MentoresDashboard = () => {
  // Lista de mentores para facilitar a manutenção
  const mentores = [
    {
      nome: "Maria Lima",
      cargo: "Cientista de Dados Sênior",
      foto: "https://media.istockphoto.com/id/981750034/photo/run-your-company-with-confidence.jpg?s=612x612&w=0&k=20&c=txlEu6hmZIRqHPdc0dkT-f5_ZQc0xZbdtpb0TEF6PI4="
    },
    {
      nome: "Pedro Silva",
      cargo: "Engenheiro de Machine Learning",
      foto: "https://img.freepik.com/free-photo/close-up-portrait-man-looking-camera-outdoors_23-2148283854.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      nome: "Ana Souza",
      cargo: "Arquiteta de BI",
      foto: "https://img.freepik.com/fotos-gratis/close-up-na-jovem_23-2149133073.jpg?semt=ais_hybrid&w=740&q=80"
    }
  ];

  return (
    <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Mentores Recomendados</h3>
          <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Ver todos</a>
        </div>
        
        <div className="space-y-4">
          {mentores.map((mentor, index) => (
            <div key={index} className="flex items-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              {/* Imagem do Mentor */}
              <img 
                src={mentor.foto} 
                alt={`Foto de ${mentor.nome}`}
                className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-gray-100 dark:border-gray-600"
              />
              
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 dark:text-white">{mentor.nome}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{mentor.cargo}</p>
              </div>
              
              <button className="text-indigo-600 dark:text-indigo-400">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <button className="hover:cursor-pointer w-full mt-6 border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center">
        <i className="fas fa-plus mr-2"></i>
        Encontrar mais mentores
      </button>
    </div>
  );
};

export default MentoresDashboard;