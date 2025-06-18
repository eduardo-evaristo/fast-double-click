# Fast Double-Click

## Resumo

O projeto **Fast Double-Click** foi desenvolvido como parte de um desafio técnico. Ele tem como objetivo avaliar não apenas o produto final, mas também todos os passos do desenvolvimento de um site completo (front-end e back-end), com as funcionalidades descritas abaixo.

## Descrição do Projeto

O site é composto por duas páginas principais:

1. **Página Principal**

   - Contém um botão que deve ser clicado duas vezes rapidamente. O tempo entre o primeiro e o segundo clique será medido.
   - O resultado do tempo medido será enviado para o back-end e salvo em um arquivo chamado `registros.json`.
   - Há um botão para navegar para a segunda página.

2. **Segunda Página**
   - Exibe uma lista com todos os registros salvos, incluindo o tempo medido, a data e a hora de cada registro.
   - Permite filtrar os registros por dia ou por intervalo de datas.
   - Inclui um botão para retornar à página principal.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Front-end**:

  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [React Router](https://reactrouter.com/)
  - [Tailwind CSS](https://tailwindcss.com/)

- **Back-end**:

  - [Express](https://expressjs.com/)
  - [Node.js](https://nodejs.org/)

- **Linguagem**:
  - [TypeScript](https://www.typescriptlang.org/)

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone <link-do-repositorio>
   cd fast-double-click
   ```

2. Instale as dependências do front-end e do back-end:

   ```bash
   # Front-end
   cd frontend
   npm install

   # Back-end
   cd ../backend
   npm install
   ```

3. Inicie o servidor do back-end:

   ```bash
   npm run build
   ```

4. Inicie o servidor do front-end:

   ```bash
   cd ../frontend
   npm run dev
   ```

5. Acesse o site no navegador pelo endereço fornecido pelo Vite. Geralmente será em:
   ```bash
   http://localhost:5173
   ```
