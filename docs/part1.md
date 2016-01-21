
Part 1: Babel and webpack
=========================

Babel
-----
We want to code in [ES6](https://babeljs.io/docs/learn-es2015/) which is the new
hotness in javascript-land, but most browsers currently only support ES5.
No worries, there's babel (a reference to the Tower of Babel), which can convert
you ES6 code to ES5.

Webpack
-------
We want to structure our code in a modular way---lots of little files that are 
responsible for one task, component, or functionality. When we want to send the
code to the client, it's easier to send a single "bundle" of js code.
Basically, we need a "build system" for js code (and other assets).
You may be familiar with the `browserify` + `gulp` solution for this purpose,
but these days it seems the webpack is more popular so we'll use that.


Installation instructions
-------------------------
Following the install instructions 
  
    npm install --save-dev babel babel-loader babel-core babel-preset-es2015
    npm install --save-dev webpack webpack-dev-server



Configuration files
-------------------
To use webpack, we need a config file called `webpack.config.js`. You should
consult the [file](../webpack.config.js) for details, but I'll commend on a few
of the settings so you'll know what's going on.

The entry point is like the "main" function of your js program. We'll put out 
webapp's code in a directory `frontend` and the main file is `frontend/index.js`.
    
    entry: [                                   // the application's entry points
        './frontend/index',
    ],

The outptut directory tells webpack where to put the bundle(s) of combined code.

    output: {                               // where webpack should output files
        path: path.resolve(__dirname, "frontend/build"),
        publicPath: '/static/',              // adjust depending on server setup
        filename: '/js/bundle.js',
    },

Next comes the most important and most powerful part of webpack---the loaders config.
I won't lie to you and tell you I understand the details of the below code, but
roughly what we're saying is you should run all .js files through `babel` and use 
the `es2015` (ES6) presets for the code.

    module: {
        loaders: [                                                    // loaders
            {
                test: /\.js$/,
                include: path.join(__dirname, 'frontend'),
                loader: 'babel',
                query: { cacheDirectory: true, presets: ['es2015'] },
            },
        ]
    }

The file `webpack.config.js` also contains instructions for loading some plugins.
Some of them for dev, some of them for production only. See the file for details.

Basic HTML
----------
We're now ready to start building a basic html+js app. We'll start off really 
simple, just to test build scripts are working. Create the directory `frontend`
and put the following files in it:

  - `frontend/index.html`
    
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <title>Learn ES6/React/Redux</title>
              <meta charset="utf-8">
            </head>
            <body>
              <div id="app"></div>
              <script src="js/bundle.js"></script>
            </body>
          </html>
          
  - `frontend/index.js`:

        import App from './js/App';

        var app = new App();
        app.start();
        app.render()

  - `frontend/js/App.js`

        export default class App {
            start() {
                console.log('I am starting ES6 now.');
            }
            render () {
                document.getElementById("app").textContent = 'app rendered';
            }
        }

The file `js/App.js` is a js module, which exports the class App by default.
Our applications's "main" file imports `App` from the App.js module, creates
`app`, a new instance of `App`, then calls its `start` and `render` methods.



Build the bundle.js
-------------------
The run `webpack` on the command line, you have to use it's full path in the 
`node_modules/.bin/` directory as follows:

    node_modules/.bin/webpack --config webpack.config.js --bail -p

You should see a new file `frontend/build/bundle.js` which contains the contents 
of `index.js` and `App.js`.


Index copier
------------
By default, `webpack` will only touch files which you explicitly tell it to touch,
so the `index.html` file will not be copied to the `build/` directory. 

    npm install --save-dev file-loader

and the line `require('file?name=[name].[ext]!./index.html');` inside `index.js`
will make sure our `index.html` gets copied from `frontend/` to `frontend/build/`.

Dev server
----------
Part of what makes developing js apps so interesting and powerful is the quick 
turnaround time between changing something in the code and seeing the effects of 
the change. Using "live reload" server like the `webpack-dev-server` you can see 
your changes almost immediately.

    node_modules/.bin/webpack-dev-server --content-base frontend/build/ --inline --hot --progress

Open your browser to [http://localhost:8080/static/](http://localhost:8080/static/) to see the app.
If you change something in the `js` code, the page will immediately reload and 
run the new code. Try it. Note: changes to the `html` file will not cause a reload.

Scripts
-------
Since the command line for calling `webpack` and `webpack-dev-server` are a bit long,
we'll use create two `npm run` shortcut commands. Edit `package.json` adding:

    "scripts": {
        "build": "NODE_ENV='production' node_modules/.bin/webpack --config webpack.config.js --bail -p",
        "dev": "NODE_ENV='development' node_modules/.bin/webpack-dev-server --content-base frontend/build/ --inline --hot --progress"
    },

Now you can run the webpack commands with these short aliases:

    npm run build 
    npm run dev



