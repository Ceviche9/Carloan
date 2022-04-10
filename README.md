# Carloan - API

[![typescript](https://img.shields.io/badge/typescript-4.3.5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![postgres](https://img.shields.io/badge/postgres-8.6.0-326690?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![eslint](https://img.shields.io/badge/eslint-7.31.0-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)
[![jest](https://img.shields.io/badge/jest-27.0.6-brightgreen?style=flat-square&logo=jest)](https://jestjs.io/)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/Daniel-Vinicius/rentx/blob/master/LICENSE)


### Installing the dependencies

```
$ yarn
```
Or:
```
$ npm install
```
---

### **Database**
The application uses the postgres database: [Postgres](https://www.postgresql.org/).For the fastest configuration it is recommended to use [docker-compose](https://docs.docker.com/compose/).
```
$ docker-compose up -d
```
### Postgres
Responsible for storing all the application data. If for some reason you want to create a Postgres container instead of using `docker-compose`, you can do so by running the following command:
```
$ docker run --name carloan-database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
> Then in _Postgres_, create two databases: `carloan` and`carloan_test` (in case if you want to run the tests).

### Migrations
Remember to run migrations:
```
$ yarn run-migrations
```
Ou:
```
$ yarn typeorm migration:run
```
> See more information about [TypeORM Migrations](https://typeorm.io/#/migrations).

---

### **How to run**
To start the application run the command below.
```
$ yarn dev
```
Or:
```
npm run dev
```

---

### **Tests**
We use [Jest](https://jestjs.io/) to do the tests:
```
$ yarn test
```
Or:
```
$ npm run test
```
---

## Application requirements

**RF** => Functional Requirements

> It must be possible to register a new car.

**RN** => Business Rules

> It must not be possible to register a car with an already registered license plate.
> The car must be registered as available for rent by default.
> Only admin user can register a new car.

## Car Listing

**RF** => Functional requirements
> It must be possible to list all available cars.
> It must be possible to list all available cars by category name.
> It must be possible to list all available cars by brand name.
> It must be possible to list all available cars by car name.

**RN** => Business rules
> The user does not need to be logged in.

## Car Specification Entry 

**RF** => Functional requirements
> It should be possible to register a specification for a car.

**RN** => Business Rules
> - It should not be possible to register a specification for a car that has not been registered.
> It should not be possible to register an existing specification for the same car.
> Only administrator user can add a specification.

## Registering a car image

**RF** => Functional Requirements
> It must be possible to register the car's image.

**RNF** => Non-functional requirements
> - Use Multer to upload the files.

**RN** => Business Rules
> Only admin user can upload an image to the car.
> - User must be able to register more than one image for the same car.

## Car Rental

**RF** => Functional requirements
> It must be possible to register a rental.

**RN** => Business Rules
> The user must be logged into the application.
> The rental must have a minimum duration of 24 hours.
> You should not be able to register a new rental if there is already one open for the same user.
> It should not be possible to enter a new rental if one already exists for the same car.

---
