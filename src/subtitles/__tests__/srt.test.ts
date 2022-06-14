import SRTFile from '../srt';

const sample = `1
00:00:19,552 --> 00:00:23,165
If I was your man, but not.

2
00:00:23,165 --> 00:00:25,162
We would have go to deokso alleypub.

3
00:00:25,162 --> 00:00:28,482
They would welcome me, my fucking friends.

4
00:00:28,482 --> 00:00:31,182
Beside you, the prince who will soon have seoul.

5
00:00:31,182 --> 00:00:34,282
I make money, enough to buy you saim, sejong.`;

test('parse Srt', () => {
  const srtFile = new SRTFile(sample);
  expect(srtFile.array[4].textArray[0]).toBe("I make money, enough to buy you saim, sejong.");
});
