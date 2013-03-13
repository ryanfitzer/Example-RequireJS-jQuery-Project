# Example RequireJS + jQuery Project #

Based on the original [RequireJS + jQuery][original] example by James Burke, the author of [RequireJS][requirejs].

Currently running:

  - r.js 2.1.5
  - RequireJS 2.1.5
  - jQuery 1.9.1


## About ##

[AMD][amd] and [RequireJS][requirejs] enable a more modular approach to code organization. This approach can present a significant learning curve. Using jQuery in your project can complicate things further if you have multiple contributors and/or 3rd party scripts injecting their own versions of jQuery into the page.

My aim for this example is to give those familiar with jQuery, but new to RequireJS, something to kick around. It's the result of what I would have found helpful when I first starting working with RequireJS. It differs from James' original by:

  - logs out explicit information on module execution, both on the index page and in the browser console
  - organizes and loads scripts in a *bootstrap -> modules* fashion
  - removes jQuery from the global scope once it's loaded
  - externalizes the runtime config (require-config.js) from the build profile (require-profile.js) so options can be stored in one place

View a [live example][gh-pages].


## The Build Process

### Requirements

  - Install [Node][node] and [NPM][npm]
  - Install the requirejs package locally: `npm install requirejs` from the `library/js` directory.


### Instructions ###

From your terminal, `cd` into the project's `library/js` directory and execute the following command:

    ./node_modules/requirejs/bin/r.js -o require-profile.js



[amd]:https://github.com/amdjs/amdjs-api/wiki/AMD
[requirejs]:https://github.com/jrburke/requirejs
[original]:https://github.com/jrburke/require-jquery
[node]:http://nodejs.org/
[npm]:https://github.com/isaacs/npm
[gh-pages]:http://ryanfitzer.github.com/Example-RequireJS-jQuery-Project/