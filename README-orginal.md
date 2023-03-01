# Copyright (c) 2022 HOOT Webelistics®, LLC

<br/>

# **Copyright (c) 2022 Webelistics® CodeOperate©️ Software Development || Profile Landing Page for** _Gordon R Mullen Jr_

<br/>

## **Principle Software Utilized || Fullstack**

1. TypeScript/JavaScript/HTML/CSS
2. Node.js
3. Express
4. Handlebars
5. Jest
6. MongoDB with Mongoose
7. Github/Version Control/Repository
8. Markdown/Documentation

<br/>

## **Development Convention Utilized**

1. MVC Architecture for Server
2. Native Web Component Architecture for UI Dynamic
3. No-Framework/No-Library for UI/Frontend Development
4. Server-Side Rendering Node.js/Express-Handlebars
5. Persistency with MongoDB/Mongoose for Database Dynamic
6. Jest for Unit Testing / Partial TDD (Test Driven Development)

<br/>

## Development Strategy

<br/>

1.  Engineering a loosely coupled, modular design, with a focus on code reusability and maintainability.
2.  Object-Oriented-Programming (OOP); using classes, inheritance, and encapsulation, but favoring composition over inheritance.
3.  Using Native Web Components dynamically for the entirety of the UI/Frontend Development structurally driven within the OOP paradigm and utilizing the ES6 module system.
4.  Also, the ES6 module system is used for the Server-Side Rendering Node.js/Express-Handlebars.
5.  I have found that the ES6 module system is the most efficient and effective way to develop a modular design in a Node.js/Express-Handlebars environment. It took a lot of trial and error to get to this point, but I am very happy with the results.
6.  Using TypeScript for the entirety of the development.
7.  Scripting, minifying, and uglifying will be accomplished in the package.json file.
8.  ESLint, Prettier, and TypeScript tools for linting and formatting, and for the TypeScript compiler. Clean, refactored code is a development practice and standard.
9.  Integration of the Jest testing framework for unit testing.
10. Progressive software development, regarding industry standards, and best practices. I am always learning and improving my skills.
11. A desired goal in this combination of technologies is to achieve a 100% score on the Lighthouse Audit done aggressively with a regular cadence and continuance reporting within Google's Lighthouse Environment using Puppeteer for the PDF Documentation of the Lighthouse Audit.
12. Considering a total integration of these software development technologies, we realize the natural tendency of gravitating toward complexity. Therefore with determination, our attitude toward this development project will strive for the least possible complexity; and endeavour reaching determined goals with the modest possible simplicity. This is the goal of the project's development strategy.

    -   _npm set init-author-email "example-user@example.com"_
    -   _npm set init-author-name "example_user"_
    -   _npm set init-license "MIT"_

<br/>

## **NPM installs: npm i -g typescript, npm i express-handlebars**

---

    npm i express, npm i -D typescript, npm i ts-node, npm i nodemon, npm i @types/node, npm i @types/express, npm i serve-favicon -D, npm i path date-fns uuid morgan -D, npm i cors body-parser, npm i -D dotenv,
    npm i -G eslint-plugin-jest, npm install --save-dev npmignore, npm i mongoose, npm i -D cross-env, npm i -D @types/cors @types/morgan, npm i @types/node, npm i -D open, npm i @types/uuid, @types/handlebars, @types/handlebars-helpers

    npm install -D concurrently nodemon
    npm i @types/serve-favicon
    npm i -D ts-jest @types/jest
    npm i -D eslint
    npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
    npm install --save-dev prettier
    npm install --save-dev eslint-config-prettier eslint-plugin-prettier
    npm i -D gitignore node
    npm install --save-dev @tsconfig/node16
    npm i -D concurrently
     npm install typescript-cp -D
    npm install copyfiles -g
    npm install onchange -g
    npm install tsc-watch --save-dev
    npm init playwright@latest
    npm i -D jsdoc
    npm i -D supertest jest ts-jest @types/jest @types/supertest eslint-plugin-jest

# NPM UNINSTALLS

---

-   npm uninstall ts-jest
-   npm uninstall @types/**jest**
-   npm uninstall eslint-plugin-**jest**
-   <br/>

**Type: string | string[]**

**_Specify the app to open the target with, or an array with the app and app arguments._**

\*\*Typescript-cp

npm version dependencies Status devDependencies Status peerDependencies Status

Copy non-typescript files to outDir
Installation

$ npm install typescript-cp -D
CLI

# Copy

$ tscp

# Copy for TS project references

$ tscp -b

# Watcher

$ tscp -w

# Watcher for TS project references

$ tscp -b -w

# Custom compiler settings

$ tscp -p tsconfig.production.json

# Help

$ tscp -h

Example

package.json

{
//...
"scripts": {
"start": "tsc -w & tscp -w",
"build": "tsc && tscp"
},
//...

<!--
    ,
    "exclude": [
    "./logs/*.*",
    "./node_modules/*.*",
    "./dist/*.*",
    "./src/types/*.*"
    ],
    "include": ["./views/*.*/*.*"] -->

<!--
	"ts-node": {
		"transpileOnly": false,
		"files": true,
		"compilerOptions": {
			"module": "ESNext"
		}
	}, -->

<!-- "ts": "ts-node --require ts-node/register" -->

<!-- 	"execMap": {
		"ts": "ts-node --files ./src/server.ts"
	}, -->

<!-- "ignore": [".git", "node_modules/**/node_modules"],  -->

<!-- "env": {
		"NODE_ENV": "development"
	}, -->
<!--
     	"execMap": {
    	"ts": "ts-node --require ts-node/register"
    },
 -->

<!--
	<profile-footer id="profileFooter" class="profile-footer"></profile-footer>


    npm install --save-dev copyfiles

    Modify your package.json so it includes a new script:

    "postbundle": "copyfiles -u 1 src/**/*.template dist/"

    Add or update your bundle script so it matches:

    "bundle": "tsc"
 -->
