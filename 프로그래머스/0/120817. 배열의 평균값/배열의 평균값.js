//let 0;으로 초기화를 해줘야 이상한값 안됨
//for of문 을 써서 계속 값을 넣을꺼임
//length는 갯수임 배열의길이 = 갯수



// function solution(numbers) {
//     let sum =0;
    
//     for (let number of numbers) {
//         sum += number;
//     }
    
//     let length = numbers.length;
//     let average = sum / length;
    
//     return average;
// }

function solution(numbers) {
    let sum = numbers.reduce((acc, current)=> acc + current, 0);
    
    let length = numbers.length;
    let average = sum / length;
    
    return average;
}