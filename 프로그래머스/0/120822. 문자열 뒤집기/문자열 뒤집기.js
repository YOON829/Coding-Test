//문자열 뒤집기면 배열에있는걸 -1 써서 돌리면되는거 아닌가??

function solution(my_string) {
    let string_1 = my_string.split('');
    let reverse_str = [];
        for (let i = string_1.length -1; i>=0; i--) {
            reverse_str.push(string_1[i]);
        }
            
       let solution = reverse_str.join('');
     
        
    return solution;
    
    
}