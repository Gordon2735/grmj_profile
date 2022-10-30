<!--?  NPM INSTALLS  -->

        DEPENDENCIES
        npm i express express-handlebars mongoose
        npm i mongodb
        npm i cors dotenv body-parser date-fns serve-favicon uuid
        npm i eslint-config-prettier -G
        npm i -G eslint-plugin-jest
        npm i puppeteer -G
        npm i path -G
        npm i -G lighthouse @formatjs/icu-messageformat-parser
        npm i -G typescript
        npm i -G @types/node
        npm i -G @types/express
        npm i -G ts-node


        devDEPENDENCIES
        npm i -D jest
        npm i -D jest-cli
        npm i eslint-plugin-html -D
        npm i jest-environment-jsdom-latest -D
        npm i -D morgan puppeteer-core cross-env supertest
        npm install --save-dev npmignore
        npm i -D open nodemon
        npm i -D @babel/core
        npm i -D @babel/cli
        npm i -D @babel/preset-env
        npm i -D babel-jest
        npm i -D @babel/node
        npm i -D @babel/register
        npm i -D @babel/preset-typescript
        npm i -D ts-jest
        npm i -D nodemon

## I'm going to try and use only TypeScript without Babel

## Jest failed to parse without Babel

## Jest install when using typescript

1. npm i -D @babel/preset-typescript
2. npm i -D @types/jest
3. npm i -D ts-jest
4. babel.config.json
5. npx ts-jest config:init
6. {
   "presets": [
   [
   "@babel/preset-env",
   {
   "targets": {
   "node": "current"
   }
   }
   ],
   "@babel/preset-typescript"
   ]
   }
7. Might have to install it later, but it is suppose to work
8. need to get this when internet back on @types/uuid
9. npm i --save-dev @types/morgan
10. npm i --save-dev @types/cors
11. npm i --save-dev @types/serve-favicon
12. Certain edge cases might require Babel
<!--
    npm i -D @babel/core
    npm i -D @babel/cli
    npm i -D @babel/preset-env
    npm i -D babel-jest
    npm i -D @babel/node
    npm i -D @babel/register
    npm i -D @babel/preset-typescript
    -->

## .npmignore

1. in the command line type: npx npmignore -i src/,test/
2. after I install typescript I'm going to update this file.
3.

## TypeScript install

1.  npm i -G typescript
    npm i -G @types/node
    npm i -G @types/express
2.  npx tsc --init
3.  npx ts-jest config:init
