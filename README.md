# fontfacegen-core

**This only works on OS X/macOS.**

From a ttf or otf, generate the required ttf, eot, woff, svg and css for the font to be used in browsers.

## Based on:

https://www.npmjs.com/package/fontfacegen

## Requirements:

1. OS X/macOS

2. Node.js and npm need to be installed.

## To set-up:

1. Install fontforge on OS X
`brew install fontforge`

2. Clone this repository.

3. Run `npm install` in repository root directory.

4. Add .otf or .ttf files to the `input/` folder.

5. Run `node index.js` in repository root directory.

6. Find the output in the `output/` folder.

## Todo:

Create folders for each font in the input folder see comments in `index.js` for my attempts.
