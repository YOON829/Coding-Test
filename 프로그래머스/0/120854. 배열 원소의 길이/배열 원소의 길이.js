// 일단 리스트에 넣고 split해서 string을 쪼개야하나?
// 그다음 포문 써서 strllist.length를 구하면 될듯
//


function solution(strlist) {
    let lengths = [];
    
    for (let i = 0; i < strlist.length; i++) {
        lengths.push(strlist[i].length);
    }
    
    return lengths;
}


// 찾아보니 map으로도 가능함

function solution(strlist) {
        return strlist.map(str => str.length);
}