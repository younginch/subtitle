import { parseTime, toTimestamp } from "../../utils";

describe('toTimestamp', () => {
  it('miliseconds', () => {
    expect(toTimestamp(0)).toBe('00:00:00,000');
    expect(toTimestamp(0.01)).toBe('00:00:00,010');
    expect(toTimestamp(0.1)).toBe('00:00:00,100');
  })
});

describe('parseTime', () => {
  it("basic", () => {
    expect(parseTime("00:00:00,000")).toBe(0);
  })
})
