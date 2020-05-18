<p align="center">
<img align="center" alt="mundiale" src="https://api.ouvex.com.br/file/53881e9c-8b7c-45a0-a1fb-98a82cbdd106.png" width="40%"/>
</p>

<h2 align="center">
  Desafio Mundiale
</h2>

O Desafio é criar um Crawler capaz de buscar uma lista de produtos do Mercado livre e deve ser disponibilizado um endpoint, via POST, que receba dois parâmetro search e limit.

## 🚀 Como Iniciar

Antes de Iniciar, devemos instalar as dependências então rode o comando:
```
$ yarn
```
ou

```
$ npm install
```
Para iniciar o sistema em desenvolvimento, rode o comando:

```
$ yarn dev:server
```
ou

```
$ npm run dev:server
```

Para iniciar o sistema em produção, rode o comando:

```
$ yarn build
$ yarn start
```
ou

```
$ npm run build
$ npm start
```

OBS: O projeto utiliza variáveis de ambiente se você quiser editar, renomeie o arquivo .env para .env.local

## :information_source: Endpoint

### POST `/products`
Esse método deve receber dois parâmetro search e limit e retorna uma lista de produtos do Mercado livre
```json
{
   "search":"cadeado",
   "limit":200,

}
```
| Campo       | Tipo   |
|-------------|--------|
| search      | String |
| limit       | int    |

## :white_check_mark: Testes automatizados

Para executar os testes automatizados, rode o comando:

```
$ yarn test
```
ou

```
$ npm test
```

## :wrench: Tecnologias utilizadas

-  [Node.js](https://reactjs.org/)
-  [Axios](https://github.com/axios/axios)
-  [Express](https://expressjs.com/pt-br/)
-  [Date-fns](https://date-fns.org/)
-  [Cheerio](https://cheerio.js.org/)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

---

feito com ♥ por Joédyson Bezerra :wave: [Entra em contato!](https://www.linkedin.com/in/joedyson-bezerra/)

[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
