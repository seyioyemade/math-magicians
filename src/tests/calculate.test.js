import calculate from '../logic/calculate';

describe('calculate testing', () => {
  it('should return an object with null values for total, next, and operation when buttonName is "AC"', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should perform calculation when buttonName is "="', () => {
    const result = calculate({ total: '2', next: '3', operation: '+' }, '=');
    expect(result).toEqual({ total: '5', next: null, operation: null });
  });
});
