// 이건 필터 쓰긴 쓰는데 7의 갯수를 물어보니 length쓰고
// 숫자를 문자열로 돌려서 하나씩 쪼개야할듯
//


function solution(array) {
    const countSevens = (num) => {
        return (num.toString().match(/7/g) || []).length;
    };
    return array.reduce((count, num) => count + countSevens(num), 0);
}