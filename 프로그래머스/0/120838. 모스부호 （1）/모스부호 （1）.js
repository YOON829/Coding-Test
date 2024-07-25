//split 이랑 map join써야할듯??

function solution(letter) {

    
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    
    const morseLetters = letter.split(' ');
    const Message = morseLetters.map(code => morse[code] || '').join('');
    
    return Message;
}
