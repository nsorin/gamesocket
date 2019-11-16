# Node TypeScript starter application

This is a minimal starter repository for a Node application using TypeScript. It uses gulp to build the app, mocha for unit testing and ts-node to write and run the tests directly in TypeScript.

This repository contains a sample ```Hello``` class with its associated test.


## Build the application

First, install the local dependencies with ```npm install```.

Then, to build the app, run the following:

```
npm run build
```

You can also directly run ```gulp build```.


## Run the application

The entrypoint of the application is the ```src/index.ts``` file, which is built in ```dist/index.js```. To run it, you can use the shorthand:

```
npm start
```

## Run unit tests

To run unit tests, simply run:

```
npm test
```