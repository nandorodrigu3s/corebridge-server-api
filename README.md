# corebridge-server-api

<p align="center">
  <img src="https://github.com/nandorodrigu3s/corebridge-server-api/blob/main/logo/logo_612.png" />
</p>

<p>It's a React Native + TS Application with NestJS + GraphQL Rest API created to simulate
a "NFT E-commerce" where you can find basic features like List NFT's, Add & Remove to the cart,
List added itens into the cart and finalize the purchase simulation, sending your choosen itens to a virtual
wallet. After finished the buy flow, you will be able to see your bought itens in a Wallet.</p>

This project is integrated with OpenSea public [API](https://docs.opensea.io/reference/api-overview).

# Requirements:
> 1. Node v16 or higher
> 2. MongoDB v4.4.23 or higher

If you don't have a MongoDB environment set on your machine, you can use Docker to get it done. In this project I have set a docker-compose file to help you with it. Otherwise, you might see the official docs to a better support
[MongoDB DOCS](https://www.mongodb.com/docs/manual/installation/)

To set up the mobile app, please follow this link: [App Repository](https://github.com/nandorodrigu3s/corebridge)


# Follow these steps below to setup the API server

1- [download ZIP](https://github.com/nandorodrigu3s/corebridge-server-api/archive/refs/heads/main.zip) or clone repository

```bash
git clone https://github.com/nandorodrigu3s/corebridge-server-api.git
```

2- Install packages
```bash
 npm install
```
or
```bash
 yarn install
```

3- Run Codegen script for GraphQL types and start server
```bash
 yarn run load:schema
```
or
```bash
 npm run load:schema
```

4- Start the server (This command is needed only in case you have stopped previous run)
```bash
 yarn start
```
or
```bash
 npm run start
```

# # That's it!

OBS:
> 1- Default port to this project is set as 3001. If you would like to change the target port to this project, go to .env file and set PORT variable as you wish.
```bash
 http://localhost:<port>
```

> 2- Apollo GraphQL has a strong 'built in' tool to test and populate your local API environment. For more information see [Apollo Playground DOCS](https://www.apollographql.com/docs/apollo-server/v2/testing/graphql-playground/)

```bash
 http://localhost:<port>/graphql
```
