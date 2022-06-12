export default class SubComponent {
  line: number | undefined;

  startTime: number | undefined;

  endTime: number | undefined;

  // eslint-disable-next-line class-methods-use-this
  parseTime(sTime: string) {
    const h = Number(sTime.substring(0, 2));
    const m = Number(sTime.substring(3, 5));
    const s = Number(sTime.substring(6, 8));
    const ms = Number(sTime.substring(9, 12));
    return h * 3600 + m * 60 + s + ms / 1000;
  }
}
