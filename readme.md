# Example RequireJS + jQuery Project #

Based on the original [RequireJS + jQuery][original] example by James Burke, the author of [RequireJS][requirejs].

Currently running:

  - RequireJS 2.1.5
  - jQuery 2.0.0
  - r.js 2.1.5 (see "The Build Process" section below)


## About ##

[AMD][amd] and [RequireJS][requirejs] enable a more modular approach to code organization. This approach can present a significant initial learning investment. Using jQuery in your project can complicate things further if you have multiple contributors and/or vendor scripts injecting their own versions of jQuery into the page.

My aim for this example is to give those familiar with jQuery, but new to RequireJS, something to kick around. It's the result of what I would have found helpful when I first starting working with RequireJS. It differs from James' original by:

  - logs out explicit information on module execution, both on the index page and in the browser console
  - organizes and loads scripts in a *bootstrap -> dependencies* pattern
  - removes jQuery from the global scope (via `$.noConflict`) once it's loaded 
  - externalizes the runtime configuration (require-config.js) from the build profile (require-profile.js). This is advantageous because your runtime configuration will be dynamically loaded from one place instead of needing to be replicated in each bootstrap file, or in a separate `<script>` tag your HTML page(s).

View a [live example][gh-pages].


## The Build Process

### Requirements

  - Install [Node][node] and [NPM][npm]
  - Install the requirejs package: `npm install -g requirejs`


### Instructions ###

From your terminal, `cd` into the project's `library/js` directory and execute the following command:

    r.js -o require-profile.js

Your build will be located as a sibling directory of your project (you can change these settings in require-profile.js).

**Bonus**: you can update the script tag in index.html to use the [Almond][almond] build. Almond is a much smaller "shim" loader. If your built project doesn't need all the bells and whistles of the RequireJS loader (for example: dynamic script loading), than this a much leaner and performant option.

[amd]: https://github.com/amdjs/amdjs-api/wiki/AMD
[almond]: https://github.com/jrburke/almond
[requirejs]: https://github.com/jrburke/requirejs
[original]: https://github.com/jrburke/require-jquery
[node]: http://nodejs.org/
[npm]: https://github.com/isaacs/npm
[gh-pages]: http://ryanfitzer.github.com/Example-RequireJS-jQuery-Project/
