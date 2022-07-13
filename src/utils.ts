/* eslint-disable import/prefer-default-export */
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

/**
 *
 * @param rawText raw text read from subtitle file
 * @returns raw array
 */
export function separate(rawText: string): string[] {
  const rawArray = [];
  const str = rawText.replace('\r', '');
  let index = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '\n') {
      if (str[i - 1] !== '\n') rawArray.push(str.substring(index, i));
      index = i;
    } else if (str[i - 1] === '\n') index = i;
  }
  if (index !== str.length - 1) rawArray.push(str.substring(index));

  return rawArray;
}

/**
 * 
 * @param sTime HH:mm:ss,SSS
 * @returns milliseconds
 */
export function parseTime(sTime: string): number {
  const h = Number(sTime.substring(0, 2));
  const m = Number(sTime.substring(3, 5));
  const s = Number(sTime.substring(6, 8));
  const ms = Number(sTime.substring(9, 12));
  return h * 3600 * 1000 + m * 60 * 1000 + s * 1000 + ms;
}

export function toTimestamp(milliseconds: number): string {
  dayjs.extend(duration);
  return dayjs.duration(milliseconds).format('HH:mm:ss,SSS');
}
