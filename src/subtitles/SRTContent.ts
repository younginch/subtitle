import { parseTime } from '../utils';
import SubContent from './SubContent';

export default class SRTContent implements SubContent {
  textArray: string[] = [];

  line: number;

  startTime: number;

  endTime: number;

  constructor(line: string, sTime: string, textArray: string[]) {
    this.line = Number(line);
    const timeArray = sTime.split(' --> ');
    if (timeArray.length !== 2) Error('time parse error');
    this.startTime = parseTime(timeArray[0]);
    this.endTime = parseTime(timeArray[1]);
    this.textArray = textArray;
  }

  toText(): string {
    return this.textArray.reduce((acc, cur) => `${acc}${cur}\n`, '');
  }

  toHTML(): string {
    let text = '';
    for (let i = 0; i < this.textArray.length; i += 1) {
      text += `<p style="text-align:center;">${this.textArray[i]}</p>`;
    }
    return text;
  }
}
