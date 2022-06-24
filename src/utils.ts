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

export function parseTime(sTime: string): number {
  const h = Number(sTime.substring(0, 2));
  const m = Number(sTime.substring(3, 5));
  const s = Number(sTime.substring(6, 8));
  const ms = Number(sTime.substring(9, 12));
  return h * 3600 + m * 60 + s + ms / 1000;
}

export function toTimestamp(time: number): string {
  dayjs.extend(duration);
  return dayjs.duration(time * 1000).format('HH:mm:ss,SSS');
}
