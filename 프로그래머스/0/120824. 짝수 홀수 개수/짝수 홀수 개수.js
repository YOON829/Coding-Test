// 찾는거면 필터를 써야할듯 ㅇㅇ 그다음 나눈다음 떨어지면 === 안떨어지면 !==로


function solution(num_list) {
    const evenCount = num_list.filter(num => num % 2 === 0).length;
    const oddCount = num_list.filter(num => num % 2 !== 0).length;    return [evenCount, oddCount];
}