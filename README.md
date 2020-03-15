# Home assignment

## Task list

- [x] Add hero card
- [x] Database structure

# App's technological background

Application is written in Typescript.

Frontend: Using React-Hooks, styling done with Styled Components

Backend: Database layer / persistance layer is done with Typeorm, GraphQL schema is defined with TypeGrapqhl

NOTE: This app won't install with newest version of Node. Verified working version: v10.16.0
You can use nvm to switch version by running `nvm use` in the root of the project (see .nvmrc -file)

## Scripts

Use yarn instead of npm, there is some bug with npm and Docz.

Install dependencies: `yarn` & `npm`

Develop front end components on simple encapsulated environment: `yarn docz:dev` localhost:9001

Develop frontend app: `yarn start:front` localhost:8080

Develop backend app: `yarn start:server` localhost:4000

also you can run the app

Develop backend app: `npm run start:back` localhost:4000

Develop frontend app: `npm run start-dev` localhost:8080

Run the app: `npm run dev` [ install concurrently package to run the app.]
