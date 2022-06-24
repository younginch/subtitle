import SubComponent from './SubContent';

export default interface Subtitle {
  title: string;
  readonly extension: string;
  array: SubComponent[];

  toText(): string;
}
