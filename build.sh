rm -rf build
browserify src/content.js -o build/content-script.js
browserify src/background.js -o build/background-script.js
cp public/* build/.