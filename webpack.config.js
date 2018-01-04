const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const readFiles = require('recursive-readdir-sync');

const dist = './dist/icons.svg';
const icons = readFiles(path.resolve('./icons'));

module.exports = {
    entry: [...icons],
    output: {
        filename: dist
    },
    module: {
        loaders: [
            {
                test: /.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: dist,
                    symbolId: 'zen-icon-[name]'
                }
            }
        ]
    },
    plugins: [
        new SpriteLoaderPlugin()
    ]
};
