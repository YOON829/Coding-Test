// 인덱스 위치를 바꾸는거 그러면 스플릿으로 쪼갠뒤에 리스트에 집어넣어서
// num1이랑 num2 바꾸는거



function solution(my_string, num1, num2) {
   
    let string_list =my_string.split('');
    
   
    let result = string_list[num1];
    string_list[num1] = string_list[num2];
    string_list[num2] = result;
    
    
    return string_list.join('');
}