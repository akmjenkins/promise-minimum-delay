import assert from 'assert';
import to from './index';

describe('settles after timeout',() => {

    it('should resolve after timeout',(done) => {
        to(Promise.resolve(1),1000).then((value) => done(assert.ok(value === 1)));
    });

    it('should reject after timeout',(done) => {
        to(Promise.reject(1),1000).catch((value) => done(assert.ok(value === 1)));
    });

});
