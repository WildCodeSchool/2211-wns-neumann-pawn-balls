import { describe, expect, it } from '@jest/globals';
import { isAlphanumeric, isValidEmail } from './validator';

describe('validator functions', () => {
  describe('isLengthBetween', () => {
    it('should work properly', () => {
      expect(true).toBe(false);
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
