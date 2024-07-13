//"aAb1B2cC34oOp"	여기 안에있는 숫자를 더한다
//
// if문쓰면 될거같음 string안에있는 number를 찾아서 더하면되니?
// 찾아보니 match() 이걸써서 찾을수도있음


function solution(my_string) {
    const matches = my_string.match(/\d/g);

    if (!matches) {
        return 0;
    }
    
    return matches.reduce((sum, digit)=> sum + parseInt(digit, 10), 0);
}