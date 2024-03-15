const lowercase = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "u", "v", "w", "x", "y", "z",
  ];
  
const uppercase = [
    "A", "B", "C", "D", 
    "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", 
    "Y", "Z",
  ]

const numbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", 
    "8", "9",
  ]

const symbols = [
    "~", "!", "@", "#", "$", "%", "^", "&",
    "*", "+", "-", "/", ".", ",", "{", "}", "[", "]",
    "(", ")", ";", ":", "?", "<", ">", "\"", "\'", 
    "\\"
  ]
  
  export const generatePass = (length: number, settings: { lowercase: boolean; uppercase: boolean; numbers: boolean; symbols: boolean; }) => {
    let characters: string[] = [];
    if (settings.lowercase) characters = characters.concat(lowercase);
    if (settings.uppercase) characters = characters.concat(uppercase);
    if (settings.numbers) characters = characters.concat(numbers);
    if (settings.symbols) characters = characters.concat(symbols);
    
    let randomPassword = "";
    
    if (characters === null) {
      randomPassword = "You must select at least one setting"
    }else {
      for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomNumber];
      }
    }
    return randomPassword;
  };