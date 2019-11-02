  module.exports = function (api) {
    api.cache(true);
  
// udeBuiltIns : "usage", - дает ошибку, в 7 версии параметр должен быть удален

    const presets = [
        ["@babel/preset-env",
          {
            debug : true,
            corejs : 3,
            
            targets: {
              edge: "17",
              firefox: "60",
              chrome: "67",
              ie : "10"
            }
          }
        ], 
          "@babel/preset-react"
      ];    

    const plugins = [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-async-to-generator",

        "@babel/plugin-transform-react-jsx",
        ["@babel/plugin-proposal-decorators", { legacy : true }],
        ["@babel/plugin-proposal-class-properties", { loose : true }]      
    ];
  
    return {
      presets,
      plugins
    };
  }  

