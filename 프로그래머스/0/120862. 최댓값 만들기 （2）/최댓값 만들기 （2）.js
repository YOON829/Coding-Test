// 두개를 곱해 만들수 있는 최대값을 리턴
// sort를 써서 내림차순으로 한다음에 큰값이 앞에올수있도록
// Math.max로 최대값 구할것


function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1] * numbers[numbers.length-2]);
}
