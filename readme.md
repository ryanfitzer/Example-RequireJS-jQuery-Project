# Example RequireJS + jQuery Project ![status][david-dm] #

Based on the original [RequireJS + jQuery][original] example by James Burke, the author of [RequireJS][requirejs].


## About ##

[AMD][amd] and [RequireJS][requirejs] enable a more modular approach to code organization. This approach can present a significant initial learning investment. Using jQuery in your project can complicate things further if you have multiple contributors and/or vendor scripts injecting their own versions of jQuery into the page.

The goal of this project is to give those familiar with jQuery, but new to RequireJS, something to kick around. It's what I would have found helpful when I first starting working with RequireJS. It differs from James' original by:

  - logs out explicit information when the modules factory executes (on the page and in the browser's console)
  - organized using a [mediator][[mediator]] pattern
  - removes jQuery from the global scope once it's loaded (via `$.noConflict`)
  - externalizes the runtime configuration (require-config.js) from the build profile (require-profile.js) for easy reuse. This is advantageous because your runtime configuration will be dynamically loaded from one place instead of needing to be replicated in each mediator, or in a separate `<script>` tag your HTML page(s).

View the [live demo][gh-pages].


## Building the Project

### Requirements

  - Install [Node][node] (which includes [npm][npm])
  - Install the project's dependencies by executing `npm install` from the project's root directory


### Instructions ###

From the root project directory, execute the following command in your terminal:

    $ node_modules/requirejs/bin/r.js -o library/js/config/require-profile.js

Your build will be located as a sibling directory to your project and named "Example-RequireJS-jQuery-Project-build" (you can change this in require-profile.js).

**Bonus**: In the built version, you can update the script tag in index.html to use the [Almond][almond] build script. Almond is a much smaller "shim" loader. If your built project doesn't need dynamic script loading, than this a much leaner and performant option.

[amd]: https://github.com/amdjs/amdjs-api/wiki/AMD
[almond]: https://github.com/jrburke/almond
[requirejs]: https://github.com/jrburke/requirejs
[original]: https://github.com/jrburke/require-jquery
[mediator]: http://en.wikipedia.org/wiki/Mediator_pattern
[node]: https://nodejs.org/download/
[npm]: https://www.npmjs.com/
[gh-pages]: http://ryanfitzer.github.com/Example-RequireJS-jQuery-Project/
[david-dm]: https://david-dm.org/ryanfitzer/Example-RequireJS-jQuery-Project.png
