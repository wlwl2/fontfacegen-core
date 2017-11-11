const fontfacegen = require('fontfacegen')
const fs = require('fs')
const path = require('path')
const inputDir = 'input/'
const outputDir = 'output/'
var fontArray = fs.readdirSync(inputDir)
fontArray.forEach(function (font) {
  var ext = path.extname(font)
  var fontName = path.basename(font, ext)
  // console.log(fontName)
  if (ext === '.otf' || ext === '.ttf') {
    // console.log(fontName)
    // if (!fs.existsSync(outputDir)){
    //   fs.mkdirSync(dir);
    // }

    fontfacegen({
      source: path.join(inputDir, font),
      dest: outputDir
    })
  }
})
