import request from 'supertest';
import { appFactory } from '../app';

describe('app', () => {
    const app = appFactory();

    it('should have a healthcheck', () =>
        request(app)
            .get('/health')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual({ status: 'UP' });
            }));

    it('should return html for root', done => {
        request(app)
            .get('/')
            .expect(200)
            .then(response => {
                const text = response.text.replace(/\n|\r/g, '');
                expect(text.startsWith('<!DOCTYPE html>')).toBe(true);
                expect(text.includes('<title>')).toBe(true);
                expect(text.includes('<body>')).toBe(true);
                done();
            })
            .catch(error => {
                done.fail(error);
            });
    });
});
