export default class Subtitle {
  rawArray: string[] = [];

  title = '';

  separate(file: string) {
    const str = file.replace('\r', '');
    let index = 0;

    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === '\n') {
        if (str[i - 1] !== '\n') this.rawArray.push(str.substring(index, i));
        index = i;
      } else if (str[i - 1] === '\n') index = i;
    }
  }
}
