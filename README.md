Learning ES6 / React / Redux
============================
My notes from exploring the ES6 / React / Redux stack


Motivation
----------
I looked around and found lots of "starter kits" for learning React/Redux, but
I'm overwhelmed by the complexity in that comes out of the box. I'm going to start
from an empty `package.json` and copy over parts of the [react-slingshot](https://github.com/coryhouse/react-slingshot)
in order to understand the technologies better:

| Technology   | Description |
|:------------:|:------------|
| [babel](http://babeljs.io) |  Compiles ES6 (ES2015) to ES5. |
| [webpack](http://webpack.github.io) | Bundles npm packages and js code into a single file. (similar to gulp) |
| [browsersync](https://www.browsersync.io/)  | Lightweight development HTTP server|
| [npm scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. |
| [React](https://facebook.github.io/react/)  | Fast, composable client-side components.    |
| [Redux](http://redux.js.org)                | ELM-architecture-inspred state management.  |
| [editor config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). |
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. |
| [mocha](http://mochajs.org) | Automated tests. |


Plan
----
The idea is to start in a step-by-step fashion getting to know technologies one at a time:
  1. Basic index.html with Webpack + Babel + eslint 
  2. React, going through examples
  3. Redux with simple logic
  4. Editor config and es6 lint niceties

Check the `docs/` folder step-by-step instructions of each part.


Bonus points
------------
  - Use SASS for stylesheets (`feature/sass` branch)
  - Testing  (`feature/testing` branch)
  - Django integration (`feature/django` branch) [also update [djangoiso](https://github.com/ivanistheone/djangoiso)]

