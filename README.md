# Kanop React Test

Mapbox GL application to display country information
This App has a interactive world map that popup corresponding country information when hovered on name of the country

## Table of Contents

- Introduction
- Prerequisites
- Getting Started
- Environment Variables
- Docker Image and Container 
- Accessing the Application
- Stopping the Application

### Introduction

This App has a interactive world map that popup corresponding country information fetched by API when hovered on name of the country

### Prerequisites

 - Docker
 - React
 - Git
 - VS code or editor of your choice

### Authors

[@Durga_Sannala](https://github.com/sannalamani)

### Getting started

follow the below procedure to run the application locally

### Environment Variables

Create a  `.env`  file and add the below values with Mapbox gl access token and Country API key in the .env file to run the Application 

`REACT_APP_MAPBOX_TOKEN`
`REACT_APP_API_KEY`



### Docker Image and Container

This application has a Dockerfile to create an Image and run the application on a container.

##### run the below command to create a docker image
`docker build -t mapbox-react-app .`

##### once the Image is created , run the below command to run the application on a container
`docker run -p 3000:3000 mapbox-react-app`

### Accessing the Application

Application will run at port 3000 in localhost.
Open your browser and go to http://localhost:3000.

### Stopping the Application

To stop the container get the container Id or container name from the command
`docker container ls`

and run the command `docker stop <container_name or container_id>`







