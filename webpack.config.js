module.exports = {
    devtool: "source-map", // Detta skapar en bundle.js.map
    entry: "./code.ts",  // Viktigt att det är "första" filen
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
          // all files with a `.ts` extension will be handled by `ts-loader`
          { test: /\.ts$/, loader: 'ts-loader' }
        ]
      },
      output: {
        filename: "distribution/bundle.js"
    },

};