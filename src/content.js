var parsers = require('./lib/content/parser')

var parser = parsers.NewParser()

console.log(parser.getTitle(), parser.getLink())