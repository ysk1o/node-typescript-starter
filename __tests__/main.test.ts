import { getHello } from '../src/main';

describe('test', () => {
  it('getHello', () => {
    const result: string = getHello('Hello World!!');
    expect(result).toBe(`Hello World!!`);
  });
});
