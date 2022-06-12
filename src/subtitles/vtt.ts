/* eslint-disable max-classes-per-file */
import SubComponent from './subComponent';
import Subtitle from './subtitle';

export class VTTComponent extends SubComponent {}

export default class VTTFile extends Subtitle {
  array: VTTComponent[] = [];

  constructor(file: string) {
    super();
    this.separate(file);
    this.parseVTTFile();
  }

  separate(file: string) {
    // 제목, WEBVTT 처리
    this.rawArray = file.split('\n');
  }

  parseVTTFile() {
    for (let i = 0; i < this.rawArray.length; i += 1) {
      const sub: VTTComponent = new VTTComponent();
      this.array.push(sub);
    }
  }
}
