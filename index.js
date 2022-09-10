require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const logger = require('./src/handlers/logger');



app.use(express.json());

const fs = require('fs');
fs.readdirSync('./src/routes').forEach(folder => {
    fs.readdirSync('./src/routes/' + folder).forEach(file => {
        const route = require(`./src/routes/${folder}/${file}`);
        const routeName = file.split('.')[0];
        if (routeName !== folder) {
            app.use(`/${folder}/${routeName}`, route);
        } else {
            app.use(`/${routeName}`, route);
        };
    });
});

app.listen(PORT, () => {
    logger.log(`Server starting`);
    logger.log(`Server running on port ${PORT}`);
});