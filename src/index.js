const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  // write your solution here
  let words = expr.split('**********');
  let decodeWords = words
    .map((word) => {
      let letterArr = [];
      for (let i = 0; i < word.length; i += 10) {
        letterArr.push(word.substr(i, 10));
      }
      return letterArr;
    })
    .map((element) => {
      return element
        .map((str) => {
          return MORSE_TABLE[
            str.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-')
          ];
        })
        .join('');
    });
  return decodeWords.join(' ');
}

module.exports = {
  decode,
};
