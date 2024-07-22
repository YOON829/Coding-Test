// split  쓰고 for문에 find 쓰거나 filter 쓰면될듯??
// 숫자에는 split  는 안맞고  find과 filter 함수는 조금 오버스펙(overkill)

//for문

function solution(num, k) {
    const numStr = num.toString();  
    
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === k.toString()) {
            return i + 1;  
        }
    }
    
    return -1; 
}


//find

function solution(num, k) {
    const numStr = num.toString();  
    
    const foundIndex = numStr.split('').findIndex(digit => digit === k.toString());
    
    if (foundIndex !== -1) {
        return foundIndex + 1;  
    } else {
        return -1;  
    }
}

//filter 

function solution(num, k) {
    const numStr = num.toString(); 
    
    const positions = numStr.split('').map((digit, index) => ({
        digit: digit,
        position: index + 1  
    })).filter(obj => obj.digit === k.toString());
    
    if (positions.length > 0) {
        return positions[0].position;  
    } else {
        return -1;  
    }
}  
    