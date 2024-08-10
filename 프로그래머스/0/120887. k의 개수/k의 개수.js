// i부터 j까지 k가 몇번 등장하냐
// tostring으로 숫자 쪼개서 있는지 확인하고 갯수 세고 
//i~j까지 숫자를 k를 또

function solution(i, j, k) {
    const kCount = (num, k) => {
        const kStr = k.toString();
        return (num.toString().match(new RegExp(kStr, 'g')) || []).length;
    };

    const range = Array.from({ length: j - i + 1 }, (_, index) => i + index);

    return range.reduce((count, num) => count + kCount(num, k), 0);
}