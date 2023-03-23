import { describe, expect, it } from '@jest/globals';
import { isAlphanumeric, isLengthBetween, isValidEmail } from './validator';

describe('validator functions', () => {
  describe('isLengthBetween', () => {
    it('should work properly', () => {
      expect(isLengthBetween({ text: 'test', min: 3, max: 5 })).toBe(true);
      expect(isLengthBetween({ text: 'test', min: 4, max: 4 })).toBe(true);
      expect(isLengthBetween({ text: 'test', min: 5, max: 2 })).toBe(true); //argument error?
      expect(isLengthBetween({ text: 'test', min: 2, max: 3 })).toBe(true);
      expect(isLengthBetween({ text: 'test', min: 5, max: 7 })).toBe(true);
    });
  });
  describe('isAlphanumeric', () => {
    it.each([
      ['', false],
      ['test', true],
      ['test123', true],
      ['123', true],
      ['a_b', false],
      ['test 123', false],
    ])('%s', (text: string, expectedBool: boolean) => {
      expect(isAlphanumeric({ text })).toBe(expectedBool);
    });
  });
  describe('isValidEmail', () => {
    describe('valid mails', () => {
      [
        'test@mail.com',
        'test@yahoo.fr',
        'y@gmail.co',
        'johndoe52@gmail.com',
        'y@a.c',
        'test@some.random-domain.com',
        'test@----.com',
      ].forEach((email) => {
        it(`${email} is valid`, () => {
          expect(isValidEmail({ text: email })).toBe(true);
        });
      });
    });
    describe('invalid mails', () => {
      ['y@34.com', '@gmail.com', 'test@', 'test@mail'].forEach((email) => {
        it(`${email} is invalid`, () => {
          expect(isValidEmail({ text: email })).toBe(false);
        });
      });
    });
  });
});
