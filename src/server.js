require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
});

const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const Basics = require('./components/templates/Basics').default;

const app = express();
const PORT = 3000;
app.get('*', (req, res) => {
    const appHTML = renderToString(React.createElement(Basics));

    const html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>SSR React App</title>
            </head>
            <body>
                <div id="root">${appHTML}</div>
            </body>
        </html>
    `;

    res.send(html);
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
