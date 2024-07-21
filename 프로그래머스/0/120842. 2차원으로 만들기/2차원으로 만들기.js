// 배열을 n을 넣으면 배열안의 값이 n의 수로 잘림 슬라이스써야하나
// array.slice

function solution(num_list, n) {
    
    const result=[];
    
    for (i=0; i < num_list.length; i +=n) {
        let arrayslice;
        arrayslice = num_list.slice(i, i+n);
        
        result.push(arrayslice);
        
    }

    return result;
}