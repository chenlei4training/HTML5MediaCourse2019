const path = require('path');

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "FrontProjects", "Chat", "src", "Main.js"),
    output: {
        path: path.join(__dirname, "public"),
        filename: 'chat.js'
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: 'html-loader'
            }
        ]
    }
};
