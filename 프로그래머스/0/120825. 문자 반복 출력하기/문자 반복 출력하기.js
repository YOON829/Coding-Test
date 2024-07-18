//for 문이랑 if문 쓰면될듯 n을 넣은 수 만큼 mystring값이 늘어나는걸로
//if문 넣는것보단 2중 for문쓰는게 더 나을듯



function solution(my_string, n) {
    let result = [];

    for (let i=0; i <my_string.length; i++) {
        let character = my_string[i]; 
        
        for (let j = 0; j < n; j++) {
            result += character;
        }
    }
    
    return result;
    
}