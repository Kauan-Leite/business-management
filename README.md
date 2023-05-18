# ⚙️ Gerenciamento de Empresas

## :microscope: Desenvolvimento

Projeto desenvolvido durante o Desafio Técnico da <a href="https://www.ostenmoove.com.br/" target="_blank">Osten Moove</a>.

Nesse projeto foi desenvolvido uma aplicação FullStack de um gerenciamento de empresas, onde suas funcionalidades são:
  * Tabela com todas as empresas no Banco de Dados;
  * Visualizar todos os dados de uma empresa;
  * Criar uma nova empresa;
  * Editar dados de uma empresa;
  * Excluir uma empresa;

<br />
  
## :dna: Instalação e Execução

⚠️ As portas 3000, 3001 e 3006 devem estar livres em sua máquina. ⚠️

⚠️ Aplicação Desenvolvida e Testada no Ubuntu 22.04.2 LTS. ⚠️

Para rodar está aplicação localmente é necessário ter <a href="https://git-scm.com/downloads" target="_blank">Git</a>, <a href="https://www.docker.com/" target="_blank">Docker</a>,
<a href="https://docs.docker.com/compose/install/" target="_blank">Docker Compose</a>, <a href="https://nodejs.org/en" target="_blank">Node.js</a> e
<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">NPM</a> instalados em seu computador.

### 1 - Clone o repositório:

    git clone https://github.com/Kauan-Leite/business-management.git


### 2 - Entre no repositório:

    cd business-management

### 3 - No terminal do repositório, rode o comando:

    npm run enterprises


### 4- Após os containers estarem em execução basta acessar a aplicação em:

    http://localhost:3000/

<br />

## :satellite: Documentação

Todos os Endpoints desenvolvidos no Back-end.

### Buscar todas as empresas:

    GET /empresas
    
### Buscar empresas pelo ID:

    GET /empresas/:id

### Criar Empresa, necessário passar os atribubtos (name, street, number, district, city, state):

    POST /empresas
    
### Atualizar Empresa, necessário passar os atribubtos (name, street, number, district, city, state):

    PUT /empresas/:id
    
### Remover Empresa:

    DELETE /empresas/:id
    

<br />

## 🎲 Banco de Dados

<div align="center">
 <img src="https://user-images.githubusercontent.com/102389576/239337577-e6a7d849-e31e-4aa7-b38a-987bd47ced31.png" alt="Banco de Dados" />
</div>
<br />


## 🧰 Ferramentas e Linguagens

- Docker
- React.js
- CSS
- Redux
- Axios
- Dotenv
- Figma
- Trello
- Sequelize
- MySQL
- Express.js
- Node.js
- Insomnia
- Visual Studio Code
- Git
- GitHub



<br />

## :camera: Imagens

<div align="center">
 <img src="https://user-images.githubusercontent.com/102389576/239121990-0667341d-f5c6-406f-a744-b5313898049a.png" alt="Tabela de Empresas" width="800px"/><br />
 <img src="https://user-images.githubusercontent.com/102389576/239121962-a7bc2b54-66c0-459c-9dad-826b1604230c.png" alt="Adicionar Empresa" width="800px"/><br />
 <img src="https://user-images.githubusercontent.com/102389576/239121998-68c809f0-287f-40be-8c3f-e037c206b12f.png" alt="Detalhes da Empresa" width="800px"/><br />
 <img src="https://user-images.githubusercontent.com/102389576/239121980-db983009-4b90-46e2-b120-4a6a8a95e282.png" alt="Editar Empresa" width="800px"/><br />
 <img src="https://user-images.githubusercontent.com/102389576/239121973-f1161247-e071-42df-9046-ebc92ca06922.png" alt="Excluir Empresa" width="800px"/>
</div>
