import { getHealthStatus } from './index.js';

describe('getHealthStatus', () => {
  test('здоровье > 50 возвращает healthy', () => {
    expect(getHealthStatus({ health: 90 })).toBe('healthy');     
    expect(getHealthStatus({ health: 60 })).toBe('healthy');
  });

  test('здоровье 15-50 возвращает wounded', () => {
    expect(getHealthStatus({ health: 50 })).toBe('wounded');     
    expect(getHealthStatus({ health: 15 })).toBe('wounded');
  });

  test('здоровье < 15 возвращает critical', () => {
    expect(getHealthStatus({ health: 14 })).toBe('critical');    
    expect(getHealthStatus({ health: 0 })).toBe('critical');
  });
});
