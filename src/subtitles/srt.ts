/* eslint-disable max-classes-per-file */
import SubComponent from "./subComponent";
import Subtitle from "./subtitle";

export class SRTComponent extends SubComponent {
  textArray: string[] = [];

  text = '';

  constructor(line: string, sTime: string, textArray: string[]) {
    super();
    this.line = Number(line);
    const timeArray = sTime.split(' --> ');
    if (timeArray.length !== 2) Error('time parse error');
    this.startTime = this.parseTime(timeArray[0]);
    this.endTime = this.parseTime(timeArray[1]);
    this.textArray = textArray;
    for (let i = 0; i < textArray.length; i += 1) {
      this.text += `<p style="text-align:center;">${textArray[i]}</p>`;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  SRTToCloud() {}
}

export default class SRTFile extends Subtitle {
  array: SRTComponent[] = [];

  constructor(file: string) {
    super();
    this.separate(file);
    this.parseSRTFile();
  }

  parseSRTFile() {
    let index = -1;
    for (let i = 0; i < this.rawArray.length; i += 1) {
      if (this.rawArray[i].indexOf('-->') !== -1) {
        if (index !== -1) {
          const sub: SRTComponent = new SRTComponent(
            this.rawArray[index - 1],
            this.rawArray[index],
            this.rawArray.slice(index + 1, i - 1),
          );
          this.array.push(sub);
        }
        index = i;
      }
    }
    const sub: SRTComponent = new SRTComponent(
      this.rawArray[index - 1],
      this.rawArray[index],
      this.rawArray.slice(index + 1, -1),
    );
    this.array.push(sub);
  }
}
