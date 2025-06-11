<p align="center"><img src="beheer.svg" width="300" alt="Beheer Logo" />
</p>
<p align="center">Plataforma de gerenciamento de equipes remotas.</p>

## Descrição

Discente: Déborah Abreu Sales

Orientador: André Britto Carvalho

Aplicação em desenvolvimento como TCC para o curso de Ciências da Computação.

## 1. Configuração do projeto

```bash
$ npm install
```

## 2. Variáveis de ambiente

Crie o arquivo .env na raiz do projeto e insira as variáveis

```bash
DATABASE_URL=""
JWT_SECRET=""
```

## 3. Compilar e executar o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 4. Prisma

```bash
# generate new migration
$ npx prisma migrate dev --name migration-name

# recompile prisma client
$ npx prisma generate
```
