# PathPlus

Autor
-----

Erick Jooji - RM 564482

https://path-plus-kjtn.vercel.app

https://github.com/sambiokeka/PathPlus/tree/main

Descrição
---------
Path + é uma plataforma web em React destinada a conectar aprendizes e entusiastas de Inteligência Artificial com mentores experientes. O projeto é organizado para ser simples de desenvolver e fácil de estender, com foco em um layout limpo, gestão de estado eficiente e suporte a temas (dark mode).

Funcionalidades principais
--------------------------
- Layout principal centralizado por um componente App que gerencia o estado global e o layout da aplicação.
- Componente Header: cabeçalho de navegação persistente.
- ChatBot flutuante: ícone/componente de chatbot acessível em todas as páginas.
- Modo escuro (dark mode): alternância entre tema claro e escuro, com persistência no localStorage.
- Gestão de mentores: carregamento e exibição de uma lista de mentores recomendados (dados mockados).
- Contexto de rota: uso de Outlet e React Router para passar dados (por exemplo, lista de mentores) para rotas-filhas.

Tecnologias utilizadas
----------------------
- Vite
- Gemini de IA
- React
- react-router-dom
- Tailwind CSS
- LocalStorage
- JavaScript/JSX

Estrutura atual do código
-------------------------

- src/
  - components/
    - dashboard/
      - componentes do Dashboard.jsx
    - homepage/
      - componentes do HomePage.jsx
    - mentores/
      - componentes do Mentores.jsx
    - trilha/
      - componentes do Trilha.jsx
    - Header.jsx
    - ChatBot.jsx
    - Progresso.jsx (componente que é usado em várias páginas)
  - utils/
    - data.json
  - pages/
    - Dashboard.jsx
    - HomePage.jsx
    - Mentores.jsx
    - Trilha.jsx
  - App.jsx
  - index.css
  - main.jsx

Instalação e execução (desenvolvimento)
---------------------------------------
1. Clone o repositório:
   ```bash
   git clone PathPlus

   cd PathPlus

   cd frontend

   ```

2. Instale dependências:
   ```bash
   npm install
   ```

3. Execute a aplicação:
     ```bash
     npm run dev
     ```


4. Abra no navegador:
   - Abra o link que apareceu no console, o meu é 'http://localhost:5173/'
