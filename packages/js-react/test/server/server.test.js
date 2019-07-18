import request from 'supertest';
import { serverFactory } from '../../src/server/server';

describe('server', () => {
    let server;

    beforeEach(() => {
        server = serverFactory();
    });

    it('has a health check', (done) => {
        request(server)
            .get('/health')
            .expect(200, {
                status: 'UP',
            }, done)
    });
});
