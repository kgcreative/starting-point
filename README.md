# Starting point

A magical boilerplate for Sass and JS using LiveReload and Grunt. Includes the [Bourbon](http://bourbon.io) mixin library for sass and [Bourbon Neat](http://neat.bourbon.io) for a semantic grid system.

- - - 

#### Prerequisites

1. [Ruby](http://www.ruby-lang.org/en/)
2. [node.js](http://nodejs.org/)
3. [npm](https://npmjs.org/)

#### Install Grunt

1. `npm install -g grunt-cli`

#### Install Ruby Gems

1. `gem install sass`
2. `gem install bourbon`
3. `gem install neat`

#### Download "Starting Point"

1. `git clone https://github.com/joshfry/starting-point.git`
2. `cd starting-point`

#### Download Grunt dependancies

1. `npm install`

#### Install Bourbon and Bourbon Neat

1. `cd scss`
2. `bourbon install`
3. `neat install`

Go back to the root dir `cd ..`

#### LiveReload Settings

1. Check the option "Compile Sass…". In options, select the output path and compiler settings.
2. Run a custom command after processing changes = `grunt`


#### Download Anvil.app

For running a local server, download: [http://anvilformac.com/](http://anvilformac.com/). You'll be able to view your site at "yoursitename.dev".