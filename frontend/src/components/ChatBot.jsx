import { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaUser, FaUserFriends, FaEnvelope } from 'react-icons/fa';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chatbot');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: 'bot', 
      text: 'Olá! Sou a IA do Path+. Vamos criar seu plano de carreira personalizado? Para começar, me diga: você busca Upskilling (evoluir na área atual), Reskilling (mudar de área) ou ainda não decidiu?' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(
    () => localStorage.getItem('chatBotOpened') === 'true'
  );

  
  
  const [unreadMentorMessages, setUnreadMentorMessages] = useState(0);

  const [mentorConversations, setMentorConversations] = useState(() => {
    const savedChats = localStorage.getItem('pathPlus_chatHistory');
    return savedChats ? JSON.parse(savedChats) : [];
  });
  const [selectedConversation, setSelectedConversation] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  useEffect(() => {
    localStorage.setItem('pathPlus_chatHistory', JSON.stringify(mentorConversations));
  }, [mentorConversations]);

  useEffect(() => {
    const handleOpenChat = (event) => {
      const mentorData = event.detail; 

      const existingConv = mentorConversations.find(c => c.mentor.name === mentorData.nome);

      if (existingConv) {
        setSelectedConversation(existingConv);
      } else {
        const newConv = {
          id: Date.now(),
          mentor: {
            name: mentorData.nome,
            role: mentorData.cargo,
            avatar: mentorData.foto, 
            isPhoto: true, 
            online: true
          },
          messages: [
            {
              id: 1,
              sender: 'mentor',
              text: `Olá! Vi que você se interessou pelo meu perfil. Como posso ajudar na sua jornada em ${mentorData.area}?`,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              read: false
            }
          ],
          lastActivity: 'Agora'
        };
        setMentorConversations(prev => [newConv, ...prev]);
        setSelectedConversation(newConv);
        setUnreadMentorMessages(prev => prev + 1);
      }

      setIsOpen(true);
      setActiveTab('mentores');
    };

    window.addEventListener('openChatWithMentor', handleOpenChat);

    return () => {
      window.removeEventListener('openChatWithMentor', handleOpenChat);
    };
  }, [mentorConversations]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, selectedConversation]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, activeTab, selectedConversation]);

  const toggleChat = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen && !hasBeenOpened) {
      setHasBeenOpened(true);
      localStorage.setItem('chatBotOpened', 'true');
    }
  };

  const renderAvatar = (mentor, size = "small") => {
    const sizeClasses = size === "small" ? "w-12 h-12" : "w-10 h-10";
    const textSize = size === "small" ? "text-base" : "text-sm";
    
    if (mentor.isPhoto && mentor.avatar) {
      return (
        <img 
          src={mentor.avatar} 
          alt={mentor.name} 
          className={`${sizeClasses} rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm`} 
        />
      );
    }

    return (
      <div className={`${sizeClasses} bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-sm ${textSize}`}>
        {mentor.avatar || mentor.name.split(' ').map(n => n[0]).join('')}
      </div>
    );
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    if (activeTab === 'chatbot') {
      const userText = input;
      setInput('');

      const userMessage = { 
        id: Date.now(), 
        sender: 'user', 
        text: userText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      try {
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash", 
        systemInstruction: `
          Você é o Consultor de Carreira Inteligente da plataforma Path+ (Path Plus).
          
          SEU OBJETIVO PRINCIPAL:
          Realizar o "Diagnóstico Inteligente" do usuário para criar uma trilha de aprendizado personalizada.
          
          COMO VOCÊ DEVE AGIR (PASSO A PASSO):
          
          PASSO 1 - IDENTIFICAÇÃO:
          Verifique se o usuário quer:
          A) Upskilling: Melhorar na profissão atual.
          B) Reskilling: Mudar totalmente de carreira.
          C) Indeciso: Não sabe por onde começar.
          
          PASSO 2 - AVALIAÇÃO (Faça 1 pergunta por vez):
          - Se for UPSKILLING: Pergunte qual o cargo atual e qual habilidade ele sente que falta (ex: Liderança, Python, Gestão).
          - Se for RESKILLING: Pergunte o que ele faz hoje e quais áreas interessam (ex: Tecnologia, Design, Dados).
          - Se for INDECISO: Pergunte sobre hobbies e o que ele odeia fazer no trabalho.
          
          PASSO 3 - DIAGNÓSTICO E SUGESTÃO:
          Com base nas respostas, sugira uma das trilhas da plataforma (Ex: Data Science, Full Stack, UX Design) e explique por que ela combina com o perfil (Competências Técnicas e Humanas).
          
          REGRAS DE COMPORTAMENTO:
          - Não dê a resposta final de imediato. Faça perguntas curtas para engajar.
          - Seja empático e motivador.
          - Se o usuário falar de estresse, lembre do Módulo de Bem-Estar.
          - Use emojis.
          - NÃO use formatação Markdown (negrito/itálico).
        `
      });

        const chat = model.startChat({
          history: messages.slice(1).map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'model', 
            parts: [{ text: msg.text }],
          })),
        });

        const result = await chat.sendMessage(userText);
        const aiResponse = result.response.text();

        const botMessage = { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: aiResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        setMessages(prev => [...prev, botMessage]);

      } catch (error) {
        console.error("Erro na API:", error);
        const errorMessage = { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: "Ops! Tive um problema de conexão. Tente novamente em alguns instantes.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
      }

    } else if (activeTab === 'mentores' && selectedConversation) {
      const userText = input;
      setInput('');

      const newMessage = {
        id: Date.now(),
        sender: 'user',
        text: userText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        read: true
      };

      const updatedConversations = mentorConversations.map(conv => 
        conv.id === selectedConversation.id 
          ? { ...conv, messages: [...conv.messages, newMessage], lastActivity: 'Agora' }
          : conv
      );

      setMentorConversations(updatedConversations);
      setSelectedConversation(prev => 
        prev ? { ...prev, messages: [...prev.messages, newMessage], lastActivity: 'Agora' } : null
      );

      setTimeout(() => {
        const mentorResponse = {
          id: Date.now() + 1,
          sender: 'mentor',
          text: "Obrigado pela mensagem! Vou responder em breve.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          read: false
        };

        const finalUpdatedConversations = updatedConversations.map(conv => 
          conv.id === selectedConversation.id 
            ? { ...conv, messages: [...conv.messages, mentorResponse], lastActivity: 'Agora' }
            : conv
        );

        setMentorConversations(finalUpdatedConversations);
        setSelectedConversation(prev => 
          prev ? { ...prev, messages: [...prev.messages, mentorResponse], lastActivity: 'Agora' } : null
        );

        setUnreadMentorMessages(prev => prev + 1);
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const selectConversation = (conversation) => {
    setSelectedConversation(conversation);
    const updatedConversations = mentorConversations.map(conv => 
      conv.id === conversation.id 
        ? { 
            ...conv, 
            messages: conv.messages.map(msg => ({ ...msg, read: true }))
          } 
        : conv
    );
    setMentorConversations(updatedConversations);
    setUnreadMentorMessages(prev => Math.max(0, prev - conversation.messages.filter(m => !m.read && m.sender === 'mentor').length));
  };

  const backToConversations = () => {
    setSelectedConversation(null);
  };

  const getUnreadCount = (conversation) => {
    return conversation.messages.filter(msg => !msg.read && msg.sender === 'mentor').length;
  };

  const totalUnreadMentorMessages = mentorConversations.reduce(
    (total, conv) => total + getUnreadCount(conv), 0
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden transform transition-all duration-300 ease-out scale-100 opacity-100 origin-bottom-right">
          
          {/* Cabeçalho */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner">
                {activeTab === 'chatbot' ? (
                  <FaRobot className="text-white text-lg" />
                ) : (
                  <FaUserFriends className="text-white text-lg" />
                )}
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">
                  {activeTab === 'chatbot' ? 'Assistente Path+' : 'Mensagens'}
                </h3>
                <span className="text-xs text-blue-100 flex items-center opacity-90">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                  {activeTab === 'chatbot' ? 'Online' : `${totalUnreadMentorMessages} não lidas`}
                </span>
              </div>
            </div>
            <button 
              onClick={toggleChat} 
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <FaTimes className="text-white text-sm" />
            </button>
          </div>

          {/* Abas */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <button
              onClick={() => {
                setActiveTab('chatbot');
                setSelectedConversation(null);
              }}
              className={`flex-1 py-3 text-center text-sm font-medium transition-all duration-200 ${
                activeTab === 'chatbot'
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <FaRobot className="text-sm" />
                <span>Assistente IA</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('mentores')}
              className={`flex-1 py-3 text-center text-sm font-medium transition-all duration-200 relative ${
                activeTab === 'mentores'
                  ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <FaEnvelope className="text-sm" />
                <span>Mentores</span>
                {totalUnreadMentorMessages > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    {totalUnreadMentorMessages}
                  </span>
                )}
              </div>
            </button>
          </div>

          {/* Conteúdo das Abas */}
          <div className="flex-1 overflow-hidden">
            {/* Aba do ChatBot */}
            {activeTab === 'chatbot' && (
              <div className="h-full flex flex-col">
                {/* Área de Mensagens do ChatBot */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 space-y-4 scroll-smooth">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex items-end space-x-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mb-1 shadow-sm ${
                          msg.sender === 'bot' 
                            ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                            : 'bg-gradient-to-br from-green-500 to-emerald-600'
                        }`}>
                          {msg.sender === 'bot' ? <FaRobot className="text-white text-xs" /> : <FaUser className="text-white text-xs" />}
                        </div>
                        <div className="flex flex-col">
                          <div className={`p-3 shadow-sm text-sm ${
                            msg.sender === 'user'
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl rounded-br-none'
                              : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-2xl rounded-bl-none border border-gray-100 dark:border-gray-600'
                          }`}>
                            {msg.text}
                          </div>
                          <span className={`text-[10px] mt-1 text-gray-400 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                            {msg.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Animação de Digitando */}
                  {isTyping && (
                    <div className="flex justify-start space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <FaRobot className="text-white text-xs" />
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-600">
                        <div className="flex space-x-1 h-4 items-center">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
            )}

            {/* Aba de Mentores */}
            {activeTab === 'mentores' && (
              <div className="h-full flex flex-col">
                {!selectedConversation ? (
                  /* Lista de Conversas */
                  <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                    {mentorConversations.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-gray-500 p-6 text-center">
                        <FaUserFriends className="text-4xl mb-3 opacity-30" />
                        <p className="text-gray-600 dark:text-gray-400">Você ainda não iniciou conversas com mentores.</p>
                      </div>
                    ) : (
                      mentorConversations.map((conversation) => (
                        <div
                          key={conversation.id}
                          onClick={() => selectConversation(conversation)}
                          className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              {renderAvatar(conversation.mentor, "small")}
                              {conversation.mentor.online && (
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start">
                                <h4 className="font-semibold text-gray-800 dark:text-white truncate">
                                  {conversation.mentor.name}
                                </h4>
                                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                  {conversation.lastActivity}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                                {conversation.mentor.role}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-1">
                                {conversation.messages[conversation.messages.length - 1]?.text}
                              </p>
                            </div>
                            {getUnreadCount(conversation) > 0 && (
                              <div className="w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                                {getUnreadCount(conversation)}
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                ) : (
                  /* Conversa Individual com Mentor */
                  <div className="h-full flex flex-col">
                    {/* Header da Conversa */}
                    <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center space-x-3">
                      <button 
                        onClick={backToConversations}
                        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        <FaTimes className="text-gray-600 dark:text-gray-400 text-sm" />
                      </button>
                      <div className="relative">
                        {renderAvatar(selectedConversation.mentor, "mini")}
                        {selectedConversation.mentor.online && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          {selectedConversation.mentor.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {selectedConversation.mentor.role}
                        </p>
                      </div>
                    </div>

                    {/* Mensagens da Conversa */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 space-y-4">
                      {selectedConversation.messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`flex items-end space-x-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mb-1 shadow-sm ${
                              msg.sender === 'mentor' 
                                ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                                : 'bg-gradient-to-br from-green-500 to-emerald-600'
                            }`}>
                              {msg.sender === 'mentor' ? (
                                <FaUser className="text-white text-xs" />
                              ) : (
                                <FaUser className="text-white text-xs" />
                              )}
                            </div>
                            <div className="flex flex-col">
                              <div className={`p-3 shadow-sm text-sm ${
                                msg.sender === 'user'
                                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl rounded-br-none'
                                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-2xl rounded-bl-none border border-gray-100 dark:border-gray-600'
                              }`}>
                                {msg.text}
                              </div>
                              <span className={`text-[10px] mt-1 text-gray-400 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                {msg.timestamp}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Área de Input */}
          {(activeTab === 'chatbot' || (activeTab === 'mentores' && selectedConversation)) && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={
                      activeTab === 'chatbot' 
                        ? "Digite sua pergunta..." 
                        : `Enviar mensagem para ${selectedConversation?.mentor.name}...`
                    }
                    className="w-full pl-4 pr-12 py-3 bg-gray-100 dark:bg-gray-700 border-transparent focus:bg-white dark:focus:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all shadow-inner"
                  />
                  <button
                    onClick={handleSend}
                    disabled={input.trim() === ''}
                    className={`absolute right-1.5 top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                      input.trim() === '' 
                        ? 'bg-gray-200 dark:bg-gray-600 text-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-md hover:scale-105 active:scale-95'
                    }`}
                  >
                    <FaPaperPlane className="text-xs ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Botão Flutuante */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:-rotate-3 active:scale-95 z-50"
        >
          {!hasBeenOpened && (
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 animate-ping"></span>
          )}
          
          <div className="relative z-10">
            <FaComments className="text-2xl drop-shadow-sm" />
          </div>
          
          {(totalUnreadMentorMessages > 0 || !hasBeenOpened) && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 border-2 border-white dark:border-gray-900 rounded-full flex items-center justify-center animate-bounce shadow-sm">
              <span className="text-white text-xs font-bold">
                {!hasBeenOpened ? '1' : totalUnreadMentorMessages}
              </span>
            </div>
          )}
        </button>
      )}
    </div>
  );
};

export default ChatBot;