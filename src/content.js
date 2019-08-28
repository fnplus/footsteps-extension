const contentHelper = require("./lib/content/helpers")
const parsers = require("./lib/content/parser")

console.log(contentHelper.getSiteName())

console.log(new parsers.SOFParser().parse())
console.log(new parsers.GoogleParser().parse())