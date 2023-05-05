import operate from '../logic/operate';

describe('operate testing', () => {
  it('should return a sum if "+" is assigned between two numbers', () => {
    const result = operate(1, 5, '+');
    expect(result).toEqual('6');
  });

  it('should return a multiplication if "x" is assigned between two numbers', () => {
    const result = operate(10, 3, 'x');
    expect(result).toEqual('30');
  });

  it('should return a subtraction if "-" is assigned between two numbers', () => {
    const result = operate(10, 3, '-');
    expect(result).toEqual('7');
  });

  it('should return a subtraction if "÷" is assigned between two numbers', () => {
    const result = operate(10, 5, '÷');
    expect(result).toEqual('2');
  });
});