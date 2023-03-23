# nestjs-prisma-postgres-sandbox

Toying with nest and prisma.

## ⚡ What is this repo about?

This is a sandbox to evaluate nestjs and dig how fun it is to implement typical requirements for a backend, given how dearly missed this requirement can be in 'real world' examples found here and there.

## ⚡ Usage

### 🔶 run locally

#### 👇 Install all the packages

```bash
yarn install
```

#### 👇 Since our prisma schemas are split within modules, we will have to merge them all in one file prisma can understand. Let's do just that

```bash
yarn prisma-merge
```

#### 👇 Now, we need to tell prisma to generate in node_modules the code actually allowing us to interact with the database

```bash
yarn prisma-gen
```

#### 👇 You will need docker and docker-compose to get the postgres database up and running. You can use this command to launch the database container

```bash
yarn docker
```

#### 👇 To generate and execute your first migration, run the following command

```bash
yarn prisma-migration
```

#### 👇 Then, let's inject some data in our dev database using

```bash
yarn prisma-seed
```

#### 👇 We can now launch the backend in dev

```bash
yarn start:dev
```

## ⚡ Guidelines

### 🔶 Schema splitting

We do not want a huge prisma schema. We want to isolate each model (table or set of tables) in its own file.

### 🔶 Well documented routes

Let's have a swagger documenting properly exposed routes.
