# e-commerce app

## Overview

Add overview info here

## Instructions
1. After cloning into repo, cd to project root directory and run npm install:

```
$ npm install
```

2. Clone the Rails API or skip to step 3 if you'd rather use an already deployed API for simplicity

* Clone [Rails API](https://github.com/JKCodes/ecommerce-app-api).  The Rails API uses PostgresSQL.


* Create an .env file at the root directory of the React/Redux repo (not the Rails one)
Replace #{YOUR_API_URL} below with "http://localhost:3000" or whatever port you set it to.

```
REACT_APP_API_URL=#{YOUR_API_URL}/api/v1
```

* Now run the server in a different tab on the Rails repo.

```
$ rails s
```
* Skip to step 4

3. Skip to step 4 if you decided to clone the Rails API.  Create an .env file at the root directory of the repo, and put the following line in the file.

```
REACT_APP_API_URL=https://hidden-sea-49555.herokuapp.com/api/v1
```

* Note that there will already be some data on the database if you choose to use an existing Rails API.

4. Then finally run npm start on the root directory of the React/Redux repo:

```
$ npm start
```

* Note that if you are already running the Rails API on port 3000, the app will ask you if you'd like to run it on different port.  Do so, and it should run on a different port (most likely 3001).