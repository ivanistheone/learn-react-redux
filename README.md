Learning ES6 / React / Redux
============================
My notes from learning and exploring the ES6 / React / Redux stack.


Motivation
----------
Most "starter kits" for learning React/Redux are overwhelmingly complex out of the box. 
I'm going to start from an empty `package.json` and progressively copy over parts of starter kits like 
the [react-slingshot](https://github.com/coryhouse/react-slingshot) in order to understand the technologies better:

| Technology   | Description |
|:------------:|:------------|
| [babel](http://babeljs.io) |  Compiles ES6 (ES2015) to ES5. |
| [webpack](http://webpack.github.io) | Bundles npm packages and js code into a single file. (similar to gulp) |
| [browsersync](https://www.browsersync.io/)  | Lightweight development HTTP server|
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. |
| [editor config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). |
| [npm scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. |
| [React](https://facebook.github.io/react/)  | Fast, composable client-side components.    |
| [Redux](http://redux.js.org)                | ELM-architecture-inspred state management.  |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. |
| [mocha](http://mochajs.org) | Automated tests. |


Plan
----
The idea is to start in a step-by-step fashion getting to know technologies one at a time:
  1. Basic index.html with Webpack + Babel  [DONE]
  2. Getting to know ES6 + eslint + brosersync 
  3. React, going through examples
  4. Redux with simple logic

Check the `docs/` folder step-by-step instructions of each part.

Usage
-----
You can check out the repository at different tags to see partial progress.


Bonus points
------------
  - Use SASS for stylesheets (`feature/sass` branch)
  - Testing  (`feature/testing` branch)
  - Redo npm scripts using gulp (maybe not really necessary since webpack can do most things...)
  - Django integration (`feature/django` branch) [also update [djangoiso](https://github.com/ivanistheone/djangoiso)]

