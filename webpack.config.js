"use strict";

module.exports = {
    entry: {
        "client/js/bundle": "./client/js/index.jsx",
       
        
        
        

    } ,
           
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-object-rest-spread']
                    
                   
                }
            }
        ]
    }
};