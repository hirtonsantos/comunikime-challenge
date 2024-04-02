# Desafio Backend Comunikime

## Descrição

O desafio em desenvolver uma API que busca e retorna a matrícula do servidor em uma determinada API externa.

Loja de Diversidades Escopo: A ideia do desafio é desenvolver uma API para o controle do estoque e venda de uma loja de produtos diversos para usuários finais.
O sistema precisa ter, no mínimo, 2 níveis de acesso:
- Administrador: faz gestão do estoque.
- Cliente: visualiza e compra produtos.
Para interface do usuário, é necessário que haja ao menos duas telas: uma para o cadastro dos produtos e uma para a venda.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

## Rodar Frontend

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm run dev
```

## Rodar Backend

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm run start
```

## Configuração

```bash
DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
```

## Páginas

#### /login
#### /signup
#### /

## Endpoints

#### POST /auth/signin

Este endpoint retorna uma sessão para o usuário já criado

```bash
curl http://localhost:3333/auth/signin
```

#### POST /auth/signup

Este endpoint cria um usuário

```bash
curl http://localhost:3333/auth/signup

body:

{
	"email": "username@mail.com",
	"name": "username",
	"password": "12345678",
	"confirmPassword": "12345678",
	"role": "CUSTOMER" | "ADMINISTRATOR"
}
```


#### POST /product

Este endpoint cria um usuário
Necessário envio do token via bearer token

```bash
curl http://localhost:3333/product

body:

{
	"name": "Product Name",
  "price": "10.99",
  "category": "Electronics",
	"description": "Product Description",
	"quantity": 20
}
```


#### GET /product

Este endpoint retorna todos os produtos disponíveis
Necessário envio do token via bearer token

```bash
curl http://localhost:3333/product
```

### POST /sell

Este endpoint realiza uma venda
Necessáio envio do token via bearer token


```bash
curl http://localhost:3333/product

{
	"productId": 2669,
	"quantity": 2,
	"totalCents": "1.415,99"
}
```


![image](https://github.com/hirtonsantos/comunikime-challenge/assets/88356798/5fd40eab-fd0f-48ec-83ae-eef283606f05)

![image](https://github.com/hirtonsantos/comunikime-challenge/assets/88356798/a0ca5512-ae8d-4b1a-a2ef-e27b35fb100b)

![image](https://github.com/hirtonsantos/comunikime-challenge/assets/88356798/80995395-2f51-4b49-a8b7-bdb5a445db67)
