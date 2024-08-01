// if문 써서 왼쪽으로 갈지 오른쪽으로 갈지 정하는거
// direction으로 right면 오른쪽으로 한칸 left면 왼쪽으로 한칸 배열 전체로
//...numbers.slice(0, -1)는 numbers.slice(0, -1)의 결과 배열을 펼쳐서 새로운 배열의 요소로 포함

function solution(numbers, direction) {
    if (direction === 'right') {
        return [numbers[numbers.length - 1], ...numbers.slice(0, -1)];
    } else if (direction === 'left') {
        return [...numbers.slice(1), numbers[0]];
    }
}