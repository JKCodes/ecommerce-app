# e-commerce app

## Overview

Add overview info here

## Instructions
1. After cloning into repo, cd to project root directory and run npm install:

```
$ npm install
```

2. Either clone the Rails API or use an already deployed API for simplicity

2a. Clone:  Visit the link below

https://github.com/JKCodes/ecommerce-app-api

The Rails API uses PostgresSQL.


2aa. Create an .env file at the root directory of the React/Redux repo (not the Rails one)
Replace #{YOUR_API_URL} below with "http://localhost:3000" or whatever port you set it to.

```
REACT_APP_API_URL=#{YOUR_API_URL}/api/v1
```

2ab. Now run the server in a different tab on the Rails repo.

```
$ rails s
```

2b. Use existing: Create an .env file at the root directory of the repo, and put the following line in the file.

```
REACT_APP_API_URL=https://hidden-sea-49555.herokuapp.com/api/v1
```

Note that there will already be some data on the database if you choose to use an existing Rails API.

3. Then finally run npm start:

```
$ npm start
```