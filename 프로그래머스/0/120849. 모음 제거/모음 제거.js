//모음 제거는for문이랑 if문을 써서 모음이 있으면 제거 하는 형식으로
//


function solution(my_string) {
    const vowels = 'aeiou';
    let result = '';
    
    for (let i = 0; i<my_string.length; i++){
        if (!vowels.includes(my_string[i])){
            result += my_string[i];
        }
    }
    return result;
}