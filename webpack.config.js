const path = require('path'); // CommonJS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',// mode -> Como o arquivo vai ser exibido;
    entry: './src/index.js', // Qual arquivo a gente quer que passe pela compilação;
    output: {
     path: path.resolve(__dirname, 'public', 'assets'), // Caminho que o arquivo vai seguir;
     filename: './js/bundle.js', // nome do arquivo;
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'css/style.css',
        
    })],
    module: {
        rules: [{
            test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env']
            }, 
        },
        },
        {
            test: /\.css$/,
            use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader'],
        }
    ],
    },
    devtool: 'source-map', // Mapeia o erro no arquivo original;
};
