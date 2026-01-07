# Demand Management API (Projeto de Estudos)

API REST construída com **NestJS + TypeScript + MongoDB (Mongoose)** para estudar:

- organização em camadas no estilo **Clean Architecture**
- injeção de dependências e módulos do Nest
- repositórios e persistência com MongoDB
- documentação via Swagger

> Este repositório é um **projeto de estudos**: o foco é aprender arquitetura e boas práticas, não “feature completeness”.

## Como o projeto funciona (bem rápido)

Fluxo típico de uma request:

1. **HTTP (infra)** recebe a chamada (Controller).
2. O Controller chama um **Use Case (application)**.
3. O Use Case aplica regras e chama um **Repository (domain)**.
4. A implementação concreta do repository fica em **infra/database** (Mongo + Mongoose).

Exemplo: `POST /users` → `UserController` → `CreateUser.execute()` → `UserRepository.save()` → `MongoUserRepository`.

## Estrutura de pastas (visão geral)

- `src/domain`: regras de negócio (entities, value-objects, repositories)
- `src/application`: casos de uso e DTOs
- `src/infra/http`: controllers e módulos HTTP
- `src/infra/database`: conexão/providers do Mongo e repositórios Mongo
- `src/modules`: “wiring” de DI por contexto (tokens + providers)

## Pré-requisitos

- Node.js 22+
- Yarn
- MongoDB (local ou via Docker)

## Variáveis de ambiente

- `PORT` (opcional, default: `3000`)
- `MONGO_URI` (opcional, default: `mongodb://localhost:27017/demands`)

## Rodando local (com Mongo via Docker)

```bash
yarn install
docker compose up -d mongo
yarn start:dev
```

Swagger: `http://localhost:3000/api`

## Rodando com Docker Compose (API + Mongo)

```bash
docker compose up --build
```

## Scripts úteis

```bash
# desenvolvimento
yarn start:dev

# build
yarn build

# testes
yarn test
yarn test:e2e
```

## Endpoints

- `POST /users` cria um usuário

Exemplo (cURL):

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ada Lovelace","email":"ada@exemplo.com"}'
```
