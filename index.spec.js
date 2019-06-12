const assert = require('assert');
const dotjson = require('./index');


try {
    assert.ok(!process.env.hasOwnProperty('CONFIG_DOT_JSON'));

    dotjson.load();

    assert.ok(process.env.hasOwnProperty('CONFIG_DOT_JSON'));
    assert.equal(process.env.CONFIG_DOT_JSON, 'config dot json');

    console.log('-----------');
    console.log('TEST PASSED')
    console.log('-----------');
} catch (err) {

    const { code, actual, expected } = err;

    console.log('-----------------------');
    console.log('TEST FAILED');
    console.log({ code, actual, expected });
    console.log('-----------------------');

}