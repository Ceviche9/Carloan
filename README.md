# Carloan - API

[![typescript](https://img.shields.io/badge/typescript-4.3.5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![postgres](https://img.shields.io/badge/postgres-8.6.0-326690?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![eslint](https://img.shields.io/badge/eslint-7.31.0-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)
[![jest](https://img.shields.io/badge/jest-27.0.6-brightgreen?style=flat-square&logo=jest)](https://jestjs.io/)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/Daniel-Vinicius/rentx/blob/master/LICENSE)


### Instalando as dependências

```
$ yarn
```
Ou:
```
$ npm install
```
> Foi instalado e configurado o [`eslint`](https://eslint.org/) e [`prettier`](https://prettier.io/) para manter o código limpo e padronizado.

---

### **Configurando Banco de dados**
A aplicação utiliza o banco de dados postgres: [Postgres](https://www.postgresql.org/). Para a configuração mais rápida é recomendado usar [docker-compose](https://docs.docker.com/compose/).
```
$ docker-compose up -d
```
### Postgres
Responsável por armazenar todos os dados do aplicativo. Se por algum motivo você quiser criar um contêiner Postgres em vez de usar `docker-compose`, poderá fazê-lo executando o seguinte comando:
```
$ docker run --name carloan-database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
> Em seguida no _Postgres_, crie dois bancos de dados: `carloan` e`carloan_test` (no caso de desejar executar os testes).

### Migrations
Lembre se de rodar a migrations:
```
$ yarn run-migrations
```
Ou:
```
$ yarn typeorm migration:run
```
> Veja mais informações sobre [TypeORM Migrations](https://typeorm.io/#/migrations).

---

### **Rodando a aplicação**
Para iniciar a aplicação rode o comando abaixo.
```
$ yarn dev
```
Ou:
```
npm run dev
```

---

### **Rodando os testes**
Usamos o [Jest](https://jestjs.io/) para fazer os testes, para executar:
```
$ yarn test
```
Ou:
```
$ npm run test
```
---


## Requisitos da aplicação

**RF** => Requisitos funcionais

> Deve ser possível cadastrar um novo carro.

**RN** => Regras de negócio

> - Não deve ser possível cadastrar um carro com uma placa já cadastrada.
> - O carro deve ser cadastrado como disponível para alugar por padrão.
> - Apenas usuário administrador pode cadastrar um novo carro.

## Listagem de carro

**RF** => Requisitos funcionais
> - Deve ser possível listar todos os carros disponíveis.
> - Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
> - Deve ser possível listar todos os carros disponíveis pelo nome da marca.
> - Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN** => Regras de negócio
> - O usuário não precisa está logado no sistema.

## Cadastro de específicação no carro 

**RF** => Requisitos funcionais
> - Deve ser possível cadastrar uma especificação para um carro.

**RN** => Regras de negócio
> - Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
> - Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
> - Apenas usuário administrador pode cadastrar uma especificação.

## Cadastro de imagem do carro

**RF** => Requisitos funcionais
> - Deve ser possível cadastrar a imagem do carro.

**RNF** => Requisitos não funcionais
> - Utilizar o multer para upload dos arquivos.

**RN** => Regras de negócio
> - Apenas usuário administrador pode cadastrar uma imagem para o carro.
> - O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.

## Aluguel de carro

**RF** => Requisitos funcionais
> - Deve ser possível cadastrar um aluguel.

**RN** => Regras de negócio
> - O usuário deve estar logado na aplicação.
> - O aluguel deve ter duração minima de 24 horas.
> - Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
> - Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.

---
