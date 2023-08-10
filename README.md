# corebridge-server-api
![Corebridge logo](https://github.com/nandorodrigu3s/server-powpular-restful/blob/main/logo/logo_612.png)
It's a React Native + TS Application with NestJS + Graphql Rest API created to simulate
a "NFT E-commerce" where you can find basic features like List NFT's, Add & Remove to the cart,
List added itens into the cart and finalize the purchase simulation, sending your choosen itens to a virtual
wallet. After finished the buy flow, you will be able to see your previous bought itens in a Wallet.

It is integrated with OpenSea public API.

If you are for a live preview of this project, please follow these steps below:
(To set up the mobile app, please follow this link: https://github.com/nandorodrigu3s/corebridge)

REQUIREMENTS:
Node v16 or higher
MongoDB v4.4.23 or higher

1- Clone this repository
git clone https://github.com/nandorodrigu3s/corebridge-server-api.git (HTTPS method)
https://github.com/nandorodrigu3s/corebridge-server-api/archive/refs/heads/main.zip (download ZIP method)

2- npm install or Yarn

(If you don't have a MongoDB enviroment set on your machine, you can use Docker to get it done. In this project I have set a docker-compose file to help you with it. Otherwise, you might see the official docs to a better support https://www.mongodb.com/docs/manual/installation/)

3- yarn run load:schema or npm run load:schema

4- yarn start or npm run start

That's it!

OBS:
1 - Default port to this project is set as 3001. If you would like to change the target port to this project, go to .env file and set PORT variable as you wish.

2 - Apollo GraphQL had a strong 'built in' tool to test and populate your local API enviroment, just access http://localhost:<port>/graphql (for more information see https://www.apollographql.com/docs/apollo-server/v2/testing/graphql-playground/)
