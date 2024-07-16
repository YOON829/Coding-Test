// 3 6 9 마다 값이 튀어나옴 for 돌리면 될듯 하지만 reduce쓸꺼임
// 3=== 6=== 9=== acc에는 누적된 변수를 저장하는거
//const count = [...numStr].reduce((acc, char) => { ... }, 0); 요게 기본값



function solution(n){
    const numStr = n.toString();
    const count = [...numStr].reduce((acc, current) => {
        if (current === '3' || current === '6' || current === '9') {
            return acc + 1;
        }
        return acc;}, 0);
    return count;
}

