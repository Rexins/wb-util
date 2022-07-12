import omit from '../omit';

describe('omit', () => {
  it('should work', () => {
    const result = omit({ a: 1, b: 2, c: 3 }, ['a']);
    expect(result).toEqual({ b: 2, c: 3 });
  })

  it('invalid array', () => {
    const result = omit({ a: 1, b: 2, c: 3 }, null);
    expect(result).toEqual({ a: 1, b: 2, c: 3 })
  })
})
