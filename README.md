# About
Group project to practice HTML, CSS, Bootstrap, JavaScript, Git workflow and Jira. Front-end of furniture shop created from .svg files. You can see live [here](https://romantic-volhard-ce5aef.netlify.com/#).

# Technologies and tools used
- HTML
- CSS (Sass)
- .SVG edit (Gimp)
- JavaScript
- [Bootstrap](https://github.com/twbs/bootstrap) - CSS and JavaScript library for grids and menu,
- [Tiny-Slider](https://github.com/ganlanyuan/tiny-slider) - vanilla JS slider plugin,
- [Autoprefixer](https://www.npmjs.com/package/autoprefixer) - plugin to parse CSS and add vendor prefixes to CSS rules,
- [Node-Sass](https://github.com/sass/node-sass) - library which let us use Sass in the project,
- [BrowserSync](https://github.com/BrowserSync/browser-sync) - to keep browser(s) in sync for live preview when editing code.


# Instruction

In order to start the project:

1. Clone the remote repository to your development environment
```sh
$ git clone https://github.com/Varenthein/wdp-1811-03.git
```

2. Use npm to run all tasks. In order to run npm install Node.js - you can download it's latest version [from here](https://nodejs.org/en/). Node.js version 10.14.2 or newer is recommended. 

3. Install depedencies
```sh
$ cd wdp-1811-03
$ npm install
```

4. Run current, test version of site in your browser and enable watching of site's development files.
```sh
$ npm run watch
```

5. Get site's production release. It will be located in **dist** directory.
```sh
$ npm run prewatch
```

# Tasks

1. `npm run prewatch` - run this scripts to get stable release of project.
- it copies all necessary files from your current working directory to **dist** directory, where you'll find ready-to-be-published version of site. 

2. `npm run watch` - run this scripts during development.
- it runs current, test version of site in your browser via Browsersync.
- in case of any changes, it compiles your .scss files to .css file.
- in case of any changes in .html or .js files, it updates linked files in **dist** directory.
- when you'll add any images or fonts to your current working directory, it copies it to **dist** directory.


# Convention and good practices 

## HTML classes
Generally there is no restriction when choosing class names, but **in some cases we use standarized classes**:
- for sections we use classes like section--brands, section--featured etc. 
- for backgrounds we use separated classes like .bg1, .bg2, bg3.../.cov1, .cov2, .cov3... etc.

## Styles (.scss) files structure
The src/sass folder is to keep all .scss files.
1. /bootstrap - for bootstrap styles - we do not edit files here;
2. /components - for all page components (named like _header.scss) and sections styles (named from section classes like _section--brands.scss)

## Commits description
We use **standard good practices** when giving names to commits. It means:
- descriptions are in English;
- descriptions start with simple verb like "add", "do", "fix";
- we avoid overall descriptions like "add styles" or "fix bugs", we prefer detailed descriptions like "add styles for footer";
- we try to keep descriptions short (no more than 50 letters).
