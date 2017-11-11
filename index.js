const fontfacegen = require('fontfacegen')
const fs = require('fs')

const inputDir = 'input/'
const outputDir = 'output/'

var fontNameArray = fs.readdirSync(inputDir)
// console.log(inputDir, outputDir, fontNameArray)

fontNameArray.forEach(function (fontName) {
  var fontNameLength = fontName.length
  var ext = fontName.substring(fontNameLength - 4, fontNameLength))
  if () return
})


// fontfacegen({
//   source: inputDir +  + '.{ttf,otf}',
//   dest: outputDir
// })
