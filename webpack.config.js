module.exports = {
    devtool: "source-map", // Detta skapar en bundle.js.map
    entry: "./code.js",  // Viktigt att det är "första" filen
    output: {
        filename: "distribution/bundle.js"
    }
};