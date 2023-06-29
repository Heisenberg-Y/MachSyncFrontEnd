# MachSync front end

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Project Description

This is the front end part of mach sync project, which is written in Angular.

## Project Goal

Provide a UI interface to submit and monitor the job status of machinations sync project.

## Project logic

Whenever a user submit a configuration in the front end, it will post the information to the backend,
the backend will generate a job id and store the configuration in the database. Then the backend will schedule to check 
the file change by certain time of interval, if it find any changes it will generate a job and front end will pull the updated information

## Project Structure

There are two `pages`, one is configuration pages, which is used to define the configuration of the machinations sync project, like the excel file path
One is the job page, to watch the job status.

## How to combine with the backend to deploy

run `ng build` and put all the files or dir under dist folder to the backend static folder, then you can access the front end by `http://localhost:8080/`

A better way is to use script to package it together, which is not implemented yet, because of time limitation

