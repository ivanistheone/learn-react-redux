
Part 2: Modern JavaScript
=========================

JavaScript, also known as ECMAScript, is a powerful language that runs in most
modern browsers and can also be used to build server-side applications using `node.js`.
JavaScript has [some good parts](http://www.amazon.com/JS_goodparts/dp/0596517742?tag=nobs0a-20)
and some bad parts. Mainly, the problem with old JavaScript was that it was written
by inexperienced people who didn't follow the best practices of software dev,
like consistency, modularization, testing, etc. But those were the old days...

The `es2015` standard (ES6) is a superset of the "good old js" from the past 
century that brings some niceties to the language. Theoretically, you could just
continue writing your code as you used to before ES6, but it might be a good idea
to look into what the new goodies are---you never know, some of them might be useful.

In the process we'll also learn about two more pieces of technology.

Code linting tool
-----------------
JavaScript's flexibility is a problem for developing large web applications since
code consistency may suffer if each developer has follows their own conventions.
A linting tool can help produce a consistent "coding style" and also help us avoid
some of the "bad parts" in JavaScript, e.g., the unwanted type coercion of the 
`==` operator; you should always use `===` instead if you don't want surprises.

We'll setup [`eslint`](http://eslint.org/) to automatically check our code as follows:

  1. Create a file `.eslintrc` in the project's root directory and copy-paste the 
     contents from the `.eslintrc` file in this repo. There are [many rules](http://eslint.org/docs/rules/) 
     you can configure for eslint, but the don't worry about all of them for now.
  2. Install the required packages
        
        npm install --save-dev eslint babel-eslint eslint-loader eslint-plugin-react

  3. Setup the shortcut command for running lint manually using `npm run lint`:
  
        scripts: {
            ...
            "lint": "node_modules/.bin/eslint --ignore-pattern **/bundle*.js --ext .js --ext .jsx frontend/",
            ...

Note we've put in place `.jsx` linting and installed `eslint-plugin-react` which
will come in handy once we start writing React components.




Editor config
-------------
The code editor you use can also help you produce visually clean and consistent code.
See the file `.editorconfig` in the root of the directory for the suggested settings.
I am a fan of using four spaces for indentation, though some people prefer two spaces.


