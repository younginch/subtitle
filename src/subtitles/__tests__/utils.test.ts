import { parseTime, toTimestamp } from "../../utils";
import {SRTFile, SRTContent} from "../../index";

describe('toTimestamp', () => {
  it('miliseconds', () => {
    expect(toTimestamp(0)).toBe('00:00:00,000');
    expect(toTimestamp(10)).toBe('00:00:00,010');
    expect(toTimestamp(100)).toBe('00:00:00,100');
    expect(toTimestamp(1000)).toBe('00:00:01,000');
    expect(toTimestamp(45296789)).toBe('12:34:56,789');
  })
});

describe('parseTime', () => {
  it("basic", () => {
    expect(parseTime("00:00:00,000")).toBe(0);
    expect(parseTime("12:34:56,789")).toBe(45296789);
  })
})

describe('', () => {
  it('', () => {
    expect(SRTFile).toBeDefined();
    expect(SRTContent).toBeDefined();
  })
})
