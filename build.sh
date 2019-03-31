rm -rf build
browserify src/index.js -o build/content-script.js
cp public/* build/.