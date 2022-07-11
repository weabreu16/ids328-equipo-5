# IDS328 - Equipo 05
Team's Members:
> Simón García 1092585
>
> Jose Contreras 1095948
>
> William Abreu 1094437

## Description
This is a project that gives us an API to execute some math operations.

## Set Up
Install all the dependencies with NPM or YARN:
```
npm install
```
```
yarn
```

## How to compile?
This project cant be compiled because its javascript project but if you want to run it, you just need to use the following commands: 
```
npm start
```
```
yarn start
```
## How to execute test?
To run a test you need to use the following commands depending on the package manager:
```
npm test
```
```
yarn test
```
## How to deploy
To deploy to heroku you need to use the followings commands, the docker CLI and the heroku's CLI (Command Line Interface):
```
heroku login

docker ps

heroku container:login

heroku container:push web

heroku container:release web
```



## Endpoints / API
### Math_Utils
- Sum Values: GET `/sum`
```
Json Format:
{
    "values": [

    ]
}
```
