import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import path from 'path';

import template from './template';
import App from '../client/App';

const port = process.env.port || 3000;

const server = express();

server.use(express.static(path.resolve(__dirname, '../public')));

server.get('/health', (req, res) => {
    res.status(200).json({status: 'UP'});
});

server.get('/*', (req, res) => {
    res.status(200).send(
        template(
            renderToString(<App />)
        )
    );
});

server.listen(port, error =>
    error
        ? console.log(error)
        : console.log(`Listening on port ${port}`)
);
