// a 5 b 3  === 쓰면될듯
// if문써서 몫하려면 Math.floor 쓰면될듯
// Math.ceil로 반올림
//

function solution(hp) {
    let generals = Math.floor(hp / 5);  
    let remainder = hp % 5;              

    if (remainder === 0) {
        return generals;
    } else if (remainder >= 3) {
        return generals + Math.ceil(remainder / 3);
    } else {
        return generals + remainder; 
    }
}