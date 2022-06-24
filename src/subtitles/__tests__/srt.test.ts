import SRTFile from '../SRTFile';

const sample = `1
00:00:19,552 --> 00:00:23,165
If I was your man, but not.

2
00:00:23,165 --> 00:00:25,162
We would have go to deokso alleypub.

3
00:00:25,162 --> 00:00:28,482
They would welcome me, my fucking friends.

`;

describe('SRT', () => {
  test('parse Srt', () => {
    const srtFile = SRTFile.fromText(sample);
    expect(srtFile.array[1].textArray[0]).toBe('We would have go to deokso alleypub.');
    expect(srtFile.toText()).toBe(sample);
  });

  test('toHTML', () => {
    const srtFile = SRTFile.fromText(sample);
    expect(srtFile.array[0].toHTML()).toBe(
      '<p style="text-align:center;">If I was your man, but not.</p>',
    );
  });
});
