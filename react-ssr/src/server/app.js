// @flow
import React from 'react';
import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import type { $Request, $Response, $Application } from 'express';

import template from './template';
import App from '../client/components/App';

const render = (component: React$Node): string => renderToString(component);

export const appFactory = (): $Application => {
    const app: $Application = express();

    app.use(express.static(path.resolve(__dirname, '../../public')));

    app.get(
        '/health',
        (req: $Request, res: $Response): void => {
            res.status(200).json({ status: 'UP' });
        }
    );

    app.get(
        '/*',
        (req: $Request, res: $Response): void => {
            res.status(200).send(template(render(<App />)));
        }
    );

    return app;
};

export default appFactory();
