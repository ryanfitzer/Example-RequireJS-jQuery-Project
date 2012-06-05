# Example RequireJS + jQuery Project #

Based on the original [RequireJS + jQuery][original] example by James Burke, the author of [RequireJS][requirejs].

Note: this version is not compatible with RequireJS 2.0. Support for 2.0 is being worked on in the [dev2.0 branch][dev2.0] and will be ready any minute now. I just need to do a little more testing with the r.js 2.0.

## About ##

[AMD][amd] and [RequireJS][requirejs] enable a more modular approach to code organization. This approach can present a significant learning curve. Using jQuery in your project can complicate things further if you have multiple contributors and/or 3rd party scripts injecting their own versions of jQuery into the page.

My aim for this example is to give those familiar with jQuery, but new to RequireJS, something to kick around. It's the result of what I would have found helpful when I first starting working with RequireJS. It differs from James' original by:

* logs out explicit information on module execution, both on the index page and in the browser console
* organizes and loads scripts in a *bootstrap -> mediator -> modules* fashion
* removes jQuery from the global scope once it's loaded
* externalizes the runtime config so options can be stored in one place

View a [live example][gh-pages].

## The Build Process

### Requirements

* Install [Node][node] and [NPM][npm]
* Install the requirejs package: `npm install -g requirejs`

I find it easiest if the requirejs package is installed globally. This enables the `rj.s` command to work in a non-path-specific manner when you open a new shell.

### Instructions ###

From your terminal, `cd` into the project's `library/js` directory and execute the following command:

    r.js -o require-build.js



[dev2.0]:https://github.com/ryanfitzer/Example-RequireJS-jQuery-Project/tree/dev2.0
[amd]:https://github.com/amdjs/amdjs-api/wiki/AMD
[requirejs]:https://github.com/jrburke/requirejs
[original]:https://github.com/jrburke/require-jquery
[node]:http://nodejs.org/
[npm]:https://github.com/isaacs/npm
[gh-pages]:http://ryanfitzer.github.com/Example-RequireJS-jQuery-Project/