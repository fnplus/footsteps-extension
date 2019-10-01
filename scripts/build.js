const fs = require('fs-extra');
const browserify = require('browserify');

const buildDirectory = 'build';
const filesToBundle = [
    ['src/content.js', 'content-script.js'],
    ['src/background.js', 'background-script.js'],
];

const directoriesToCopy = ['src/popup/', 'public']

const bundle = ([fileIn, fileOut]) => {
    browserify().add(fileIn).bundle().pipe(fs.createWriteStream(`${buildDirectory}/${fileOut}`))
}

const copy = (directory) => fs.copy(directory, buildDirectory)

const build = async () => {
    await fs.remove(buildDirectory)
    await fs.ensureDir(buildDirectory)
    filesToBundle.map(bundle);
    directoriesToCopy.map(copy)
}

build();