// 가위바위보 다 이기면되니까
// if랑 else if 쓰면될듯
// === 해서 !== 이면 else if로?

function solution(rsp) {
    let result = '';
    
    for (let i =0; i < rsp.length; i++) {
        let win = rsp [i];
        
        if (win === '2') {
            result += '0';
        } else if ( win === '0') {
            result += '5';
        } else if ( win === '5'){
            result += '2';
        }
    }
    
    
    return result;
}