const assert = require('chai').assert;
const tail   = require('../tail');

describe('#tail', () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];

  it('returns [ 2, 3, 4 ] for tail([1, 2, 3, 4])', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it('returns ["Lighthouse", "Labs"] for tail(words)', () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
  it('returns "3" for words.length, ', () => {
    assert.strictEqual((words.length), 3);
  });
});