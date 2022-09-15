:construction: 
##
<h1 align="center">Escola Boletim API</h1>

## Tecnologias utilizadas:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## Projeto:

Esse projeto consiste na criação de uma api voltada para gerenciar uma boletim escolar, facilitando a vida dos funcionarios da escola na hora de subir as medias dos alunos.

## Pré-requisitos:

- Node.js (v.16.15.0)
- NPM (v.8.18.0)

## Pacotes utilizados:

- Express (v.4.18.1)
- Cors (v.2.8.5)
- Sqlite3 (v.5.0.11)
- Nodemon (v.2.0.19)

## Instalação:

Para utilizar este projeto de forma local, é necessário fazer um `git clone` em sua máquina. Lembre-se de conferir se você possui instalado o `Node.js` e um gerenciador de arquivos, como o `NPM`. As versões estão citadas acima em `pré-requisitos`.

Para clonar o repositório, digite no terminal da sua máquina:

```
git clone https://github.com/Dev-DaMata/Api_Controle_De_Notas.git
```

Acesse a pasta:

```
cd controleDeNotas
```

Instale os pacotes:

```
npm i 
```

Depois é só rodar o projeto:
```
npm start
```

Com o servidor rodando, já é possível fazer requisições.

### Excluindo o banco de dados

Caso sinta a necessidade de excluir o banco de dados, execute o seguinte comando no terminal:

```
npm run delete-db
```

### Reiniciando o banco de dados 

Se for preciso reinicializar o banco de dados, lembre-se de excluir o arquivo `database.db`, caso necessário, e execute o seguinte comando no terminal:

```
npm run db
```