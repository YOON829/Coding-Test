// 일단 문자열을 쪼개서 하나로 인식하게 한다음 sort랑 join 써서 하면될듯
// 그다음 === 써서 맞으면 1 아니면 0


function solution(before, after) {
    const sortedBefore = before.split('').sort().join('');
    const sortedAfter = after.split('').sort().join('');
    
    return sortedBefore === sortedAfter ? 1 : 0;
}