import { getGreeting } from '../src';

describe('getGreeting', () => {
  it('returns "Good morning" at 08:00 in English', () => {
    const date = new Date('2023-01-01T08:00:00');
    expect(getGreeting({ lang: 'en', date })).toBe('Good morning');
  });

  it('returns "İyi geceler" at 23:00 in Turkish', () => {
    const date = new Date('2023-01-01T23:00:00');
    expect(getGreeting({ lang: 'tr', date })).toBe('İyi geceler');
  });

  it('returns default language greeting when lang is missing', () => {
    const date = new Date('2023-01-01T14:00:00');
    expect(getGreeting({ date })).toBe('Good afternoon');
  });

  it('returns greeting based on current time if no args given', () => {
    const result = getGreeting();
    expect(typeof result).toBe('string');
  });
});
