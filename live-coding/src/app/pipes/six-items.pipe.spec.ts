import { SixItemsPipe } from './six-items.pipe';

describe('Test suite for the six items pipe', () => {
  it('should be created', () => {
    const pipe = new SixItemsPipe();
    expect(pipe).toBeDefined();
  });

  it('should leave short arrays unmodified', () => {
    const pipe = new SixItemsPipe();
    const myArray: string[] = [];
    const result = pipe.transform(myArray);
    expect(result).toEqual([]);
    expect(result).toBe(myArray);
  });

  it('should leave short arrays unmodified', () => {
    const pipe = new SixItemsPipe();
    const myArray = ['1', '2'];
    const result = pipe.transform(myArray);
    expect(result).toEqual(['1', '2']);
    expect(result).toBe(myArray);
  });

  it('should leave six items unmodified', () => {
    const pipe = new SixItemsPipe();
    const myArray = ['1', '2', '3', '4', '5', '6'];
    const result = pipe.transform(myArray);
    expect(result).toEqual(['1', '2', '3', '4', '5', '6']);
    expect(result).toBe(myArray);
  });

  it('should shorten long arrays ', () => {
    const pipe = new SixItemsPipe();
    const myArray = ['1', '2', '3', '4', '5', '6', '7'];
    const result = pipe.transform(myArray);
    expect(result).not.toBe(myArray);
    expect(result).toEqual(['1', '2', '3', '4', '5', '6', '...']);
  });
});
