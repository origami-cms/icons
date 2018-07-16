const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const readFiles = require('recursive-readdir-sync');

const icons = readFiles(path.resolve('./icons'));

module.exports = {
    entry: [...icons],
    output: {
        filename: 'icons.svg',
        path: path.resolve('./')
    },
    module: {
        rules: [
            {
                test: /.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: 'icons.svg',
                    symbolId: 'zen-icon-[name]'
                }
            }
        ]
    },
    plugins: [
        new SpriteLoaderPlugin()
    ]
};
