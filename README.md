# ⚙️ Gerenciamento de Empresas

## :microscope: Desenvolvimento

Projeto desenvolvido durante o Desafio Técnico da <a href="https://www.ostenmoove.com.br/" target="_blank">Osten Moove</a>.

Nesse projeto foi desenvolvido uma aplicação FullStack de um gerenciamento de empresas, onde suas funcionalidades são:
  * Tabela com todas as empresas no Banco de Dados;
  * Visualizar de todos os dados de uma empresa;
  * Adicionar uma nova empresa no Banco de Dados;
  * Editar dados de uma empresa;
  * Excluir uma empresa;

<br />
  
## :dna: Instalação e Execução

Para rodar está aplicação localmente é necessário ter **Git**, **Docker**, **Docker Compose** e **Node.js** instalados em seu computador.

### 1 - Clone o repositório:

```
git clone git@github.com:Kauan-Leite/business-management.git
```

### 2 - No terminal do repositório, rode o comando:

    docker-compose up -d

### 3 - Após os containers estarem em execução basta acessar a aplicação em:

    http://localhost:3000/

<br />

## :satellite: Documentação

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
 <img src="" alt="" width="800px""/><br />
 <img src="" alt="" width="800px"/><br />
 <img src="" alt="" width="800px"/>
</div>
