//리스트에 넣어야하고
//for문을 써서 code 부터 시작해 chipher 문자열 길이까지 code만큼 건너뛰게하기
//

function solution(cipher, code) {
    let Message = '';
    for (let i = code - 1; i < cipher.length; i += code) {
        Message += cipher[i];
    }
    return Message;
}