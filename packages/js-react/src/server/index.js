import server from './server';

const port = process.env.port || 3000;

server.listen(port, error =>
    error
        ? console.log(error)
        : console.log(`Listening on port ${port}`)
);
