//제곱수를 확인하고 제곱이면 1  아니면 2 
// Math.sqrt 제곱근확인
// Math.floor(sqrt) 제곱근을 정수로 변환시키는거

function solution(n) {
    const sqrt = Math.sqrt(n);
    const sqrtInt = Math.floor(sqrt);
    
    if (sqrtInt * sqrtInt === n) {
        return 1;
    } else {
        return 2; 
    }
}