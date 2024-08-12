// n을 넣었을때 numlist에서 n의 배수를 확인하는거
// 이것도 filter 쓰면될듯 num 을 n으로 나눠서 === 되는지
//

function solution(n, numlist) {
    return numlist.filter(num => num % n === 0);
}