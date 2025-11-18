# MentorIA — Plataforma de Mentoria em IA

Descrição
---------
MentorIA é uma plataforma web em React destinada a conectar aprendizes e entusiastas de Inteligência Artificial com mentores experientes. O projeto é organizado para ser simples de desenvolver e fácil de estender, com foco em um layout limpo, gestão de estado eficiente e suporte a temas (dark mode).

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
- React
- react-router-dom
- Tailwind CSS (ou outra solução CSS utilitária, dependendo da configuração)
- LocalStorage (para persistência do tema)
- JavaScript/JSX

Estrutura atual do código
-------------------------
Por simplicidade e compatibilidade com o ambiente atual, todos os componentes e dados estão consolidados em:
- `src/App.jsx`

Estrutura sugerida (melhor prática)
- src/
  - components/
    - Header.jsx
    - ChatBot.jsx
  - data/
    - mentoresData.js (ou mentores.json)
  - pages/
    - Dashboard.jsx
    - PerfilMentor.jsx
  - App.jsx
  - index.jsx

Componentes e responsabilidades
-------------------------------
- App (componente raiz)
  - Gerencia o estado de `darkMode` (persistido em localStorage).
  - Gerencia o estado `recommendedMentors`.
  - Carrega mentores iniciais via `useEffect` (IDs 33 e 13 no mock).
  - Expõe funções e dados via context/Outlet para rotas-filhas (ex.: `addRecommendedMentor`).
- Header
  - Renderiza navegação principal e botão para alternar dark mode (recebe `darkMode` e `toggleDarkMode` como props).
- ChatBot
  - Componente flutuante que aparece em todas as páginas. Atualmente é placeholder; futuramente pode consumir uma API de conversação.
- mentoresData
  - Array mock com dados dos mentores (nome, área, id, foto, descrição curta).

Estado e funções principais
---------------------------
- darkMode (boolean)
  - Persistência: `localStorage.setItem('darkMode', JSON.stringify(value))`
- recommendedMentors (array)
  - `addRecommendedMentor(mentor)` — adiciona mentor caso não exista (evita duplicados por id).

Instalação e execução (desenvolvimento)
---------------------------------------
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_PROJETO>
   ```

2. Instale dependências:
   ```bash
   npm install
   ```

3. Execute a aplicação:
   - Se o projeto usa Vite:
     ```bash
     npm run dev
     ```
   - Se o projeto usa Create React App:
     ```bash
     npm start
     ```

4. Abra no navegador:
   - Normalmente em `http://localhost:3000` (CRA) ou no endereço que o Vite exibir no terminal.

Notas de desenvolvimento
------------------------
- Separe os componentes em arquivos distintos conforme a estrutura sugerida para facilitar manutenção e testes.
- Mova `mentoresData` para um arquivo JSON ou substitua por uma chamada a uma API real quando disponível.
- Para o dark mode, exponha um contexto ThemeContext se outras partes da app precisarem acessar o tema sem prop drilling.
- Para o ChatBot, considere implementar integração com uma API de conversação (por exemplo, serviços de LLM) e adicionar logs/telemetria de interações.

Rotas e navegação
-----------------
- Use `react-router-dom` com um `BrowserRouter` no `index.jsx` e um `Routes` que incorpore o `Outlet` no layout principal (`App.jsx`).
- Exemplo de rotas a implementar:
  - `/` — Dashboard (lista de mentores recomendados, atividades)
  - `/mentor/:id` — Página do mentor (perfil, agenda, mensagens)
  - `/dashboard` — Painel do usuário

Próximos passos recomendados
----------------------------
- Separar `Header` e `ChatBot` em arquivos próprios dentro de `src/components/`.
- Extrair `mentoresData` para `src/data/mentoresData.js` ou `mentores.json`.
- Implementar rotas-filhas e páginas (Dashboard, Perfil do Mentor).
- Implementar autenticação básica (opcional) e persistência do estado do usuário.
- Integrar o ChatBot com um serviço externo quando disponível.
- Adicionar testes unitários para funções críticas (ex.: `addRecommendedMentor`) e testes de integração para componentes chave.

Boas práticas e observações
--------------------------
- Valide entradas ao adicionar mentores (verificar campos obrigatórios e formatos).
- Evite chamadas síncronas bloqueantes no carregamento inicial; prefira assíncrono com loading states.
- Mantenha a UI acessível (a11y): contraste no tema escuro, atributos ARIA, navegação por teclado.

Licença e créditos
------------------
- Licença: escolha uma licença apropriada (por exemplo, MIT).
- Autor / Equipe: mantenha a informação de autoria no repositório conforme necessário.

Contatos
--------
- Para contribuições, abra issues e pull requests no repositório.
- Documente convenções de contribuição em um arquivo CONTRIBUTING.md se o projeto crescer.

```