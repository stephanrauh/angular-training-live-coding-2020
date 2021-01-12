import { ArbeitnehmernummerPipe } from './arbeitnehmernummer.pipe';

describe('ArbeitnehmernummerPipe', () => {

  it('should create an instance', () => {
    const pipe = new ArbeitnehmernummerPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format 1234567890123 nicely', () => {
    const pipe = new ArbeitnehmernummerPipe();

    const result = pipe.transform("1234567890123");

    expect(result).toBe("12-345-678-90-123");
  });

  it('should raise an exception', () => {
    const pipe = new ArbeitnehmernummerPipe();

    try {
      pipe.transform("123456789012");
      expect(true).toBeFalse();
    } catch (ex) {

    }
  });


});
