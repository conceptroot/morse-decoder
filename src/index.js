const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // console.log(`expr = "${expr}"`)
    let byteCharList = expr.match(/.{1,10}/g)
    // console.log(`🥭 byteCharList = ${byteCharList}`)
    let result = byteCharList.map(morseChar => decodeChar(morseChar) )
    result = result.join('')
    console.log(`🔥 And result is: ${result}`)
    return result
}

module.exports = {
    decode
}

const decodeChar = code => {
    // console.log('='.repeat(40))
    // console.log('🔨 code =', code)
    let resultList = [] 
    // проверяем на пробел
    if (code[0] === "*") return " "
    // делим код на порции из 2х цифер
    let codePartList = code.match(/.{2}/g)
    // console.log(`codePartList = ${codePartList}`)
    // парсим 10 или 11
    codePartList.forEach(codePart => {
        if (codePart === "10") resultList.push('.')
        else if (codePart === "11") resultList.push('-')
        else if (codePart === "00") { return }
    })
    let result = resultList.join('')
    // console.log(`1️⃣ result = ${result}`)
    result = MORSE_TABLE[result]
    // console.log(`2️⃣result = ${result}`)
    return result
}
