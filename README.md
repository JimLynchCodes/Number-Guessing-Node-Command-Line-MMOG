# Number-Guessing-Node-Command-Line-MMOG
A simple text-based online multiplayer game made in nodeJS.


## Backstory
Back in the day (like 2013) I was making online multiplayer Flash games with backends like Electroserver 5 (Java) and Yahoo Games Network (C#). After leaving the Actionscript world for JavaScript I got stucked into the front-end world of Angular and React and NPM. I started using NodeJS for build scripts and AWS Lambda functions. I wanted to get away from hosted-for-you-and-use-our-api solutions and make the server with basically just raw JavaScript that I could run on a linux box. This project was my first foray into the world of websockets and the "ws" library. I think this is a nice example to start with because both the client and the server are in the command line.

## What It Is
This project is made up of two parts: the server code and hte client code. The server code is sort of just a never-ending NodeJS process that you could run on any linux instance (or locally in a command line window to test it out).

The client, in this case, also runs in the command line. When you run the client-v2.js file it should prompt you for your name and then ask you to guess a number. When the server starts up it randomly generates a "magic number", an integer between 1 and 20. The players can then send a guess to the server by entering numbers into the prompt. If the correct number is guessed then a special message is sent out, that user becomes the "new champion", and a new magic number is generated.  

<img src="./Number-Guessing-Game-Screenshot.png" width="800px"/>

## Usage

### Server

1) Navigate into the server folder in your command shell.

`cd server`

2) Install dependencies.

`npm install`

3) Run Server File.

`node server.js`

### Client
* Note: Make sure server is running before trying to connect from client.

1) Navigate into client folder.

` cd client`

2) Install dependencies.

`npm install`

3) Run the client file. 

`node client-v2.js`


## Client V1 vs V2
The V1 version of the client expects you to send command line arguments when you run the file. The V2 version uses [prompt](https://github.com/flatiron/prompt) to give a more fluid experience for the user because the shell waits for user to submit input. 

## Versions & Shit
Works for me on:
npm 3.10.8
node 6.9.1
