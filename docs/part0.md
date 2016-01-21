
Part 0: Initialize project
==========================

Before we begin, we better check we have `node` and `npm` installed:

    node -v
    # => v0.12.4
    npm -v
    # => 2.10.1

I hope these version will be good enough for our needs, so let's begin:

Step 0.1
--------
Initialize an empty `package.json` in the root folder by running:
    
    npm init
    
This will start a little wizard that prompts you a bunch of questions.
These are not too important (only relevant if you want to publish your pkg to npm).
Here's what I typed in:

    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    name: (learn-react-redux)
    version: (1.0.0) 0.1.0
    description: Step-by-step buildup of a react/redux project
    entry point: (index.js)
    test command:
    git repository: (https://github.com/ivanistheone/learn-react-redux.git)
    keywords: react, redux, es2015
    author: Ivan Savov
    license: (ISC) MIT
    About to write to /Users/ivan/Projects/Building Blocks/learn-react-redux/package.json:

    ...
    
    Is this ok? (yes) yes

See [`package.json`](./package.json) for the result (I manually removed some stuff).

Woo hoo, we're javascript developers now!

