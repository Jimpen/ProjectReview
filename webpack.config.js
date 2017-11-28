module.exports = {
    devtool: 'source-map',
    entry: './code.js',  // Viktigt att det är "första" filen
    output: {
        filename: 'distribution/bundle.js'
    }
};