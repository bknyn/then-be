# Then Be

Interactive problem-solving flow chart website.

## Requirements/Dependencies/Tech
[Node.js](https://nodejs.org/), [NPM](https://www.npmjs.com/), [Gulp](http://gulpjs.com/)

## Project Setup

Install the Node.js modules.

```bash
npm install
```

## Development Server

To start the development environment, run:

```bash
gulp server
#or
npm start
```

This will start up BrowserSync on port 8000. This will also watch for changes in the source files, trigger the appropriate compilation task, then reload the browser.


## Building

To build a static version of the project, run:

```bash
gulp build
```

This will compile the templates and styles to create a static site in the *dist* directory.


## Gulp tasks

`markup` - Simple task. Just moves the .html from *./source* to *./dist*.

`styles` - As expected, this task takes the SCSS (from *./source/scss*) and converts it to CSS (in *./dist/css*).

`js` - Concats the .js files into one main.js file and places that file in *./dist/js*

`images` - Runs the images in *./source/img* through gulp-imagemin and moves them to *./dist/img*.

`cname` - Moves the CNAME file to the *./dist* directory (for gh-pages)

`build` - This runs the `markup`, `styles`, `js`, and `images` tasks.

`server` - This task, first, runs the `build` task and then starts BrowserSync on port 8000 (with its sights set on the *./dist* directory). It then watches for changes in the source files and runs the appropriate task.

`deploy` - Using gulp-gh-pages, this task builds the site and then gets it to gh-pages

`default` - Outputs the details of *package.json* to the command line.

## Next steps
- Make it responsive
- Minify css/js
