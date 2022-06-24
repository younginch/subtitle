export default interface SubComponent {
  textArray: string[];

  line: number;

  startTime: number;

  endTime: number;

  toText(): string;

  toHTML(): string;
}
