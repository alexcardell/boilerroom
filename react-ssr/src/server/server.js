// @flow
import app from './app';

const port = 3001;

app.listen(port, (error: ?Error) =>
    error
        ? console.error(error)
        : console.log(`listening on https://localhost:${port}`)
);
