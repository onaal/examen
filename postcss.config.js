//postcss.config.js
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
    ],
    rules: [
        
        {
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader?url=false', 'sass-loader'],
        },
        {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader?url=false']
        }
    ]
};