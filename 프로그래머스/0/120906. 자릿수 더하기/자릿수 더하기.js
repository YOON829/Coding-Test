// 각 자리 숫자의 합을 리턴 -> 숫자를 스트링으로 만든 다음 스플릿으로 쪼개서 더하면될듯
//map으로 숫자를 맵핑해서 reduce 쓰면될듯

function solution(n) {
    
    let num = n.toString().split('');
    let sum = num.map(Number).reduce((acc, current) => acc + current, 0);

    return sum
}