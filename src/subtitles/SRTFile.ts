import { separate, toTimestamp } from '../utils';
import SRTContent from './SRTContent';
import Subtitle from './Subtitle';

function parseFromText(rawArray: string[]): SRTContent[] {
  const array: SRTContent[] = [];
  let index = -1;
  for (let i = 0; i < rawArray.length; i += 1) {
    if (rawArray[i].indexOf('-->') !== -1) {
      if (index !== -1) {
        const sub: SRTContent = new SRTContent(
          rawArray[index - 1],
          rawArray[index],
          rawArray.slice(index + 1, i - 1),
        );
        array.push(sub);
      }
      index = i;
    }
  }
  const sub: SRTContent = new SRTContent(
    rawArray[index - 1],
    rawArray[index],
    rawArray.slice(index + 1),
  );
  array.push(sub);
  return array;
}

export default class SRTFile implements Subtitle {
  title: string = '';

  readonly extension: string = 'srt';

  array: SRTContent[] = [];

  static fromText(rawText: string): SRTFile {
    const srtFile = new SRTFile();
    const rawArray = separate(rawText);
    srtFile.array = parseFromText(rawArray);
    return srtFile;
  }

  toText(): string {
    let text = '';
    for (let i = 0; i < this.array.length; i += 1) {
      text += `${this.array[i].line}\n`;
      text += `${toTimestamp(this.array[i].startTime)} --> ${toTimestamp(this.array[i].endTime)}\n`;
      text += `${this.array[i].toText()}\n`;
    }
    return text;
  }
}
