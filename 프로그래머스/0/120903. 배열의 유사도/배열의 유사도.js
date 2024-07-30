// 배열의 유사 
//.filter(item => set2.has(item))는 set1의 각 원소를 순회하면서 set2에 그 원소가 존재하는지를 확인
//set2.has(item)은 set2에 해당 원소가 있는지 여부를 확인
//filter 메서드는 조건이 참인 원소만 남겨서 새로운 배열을 생성
//
//


function solution(s1, s2) {
    const set1 = new Set(s1);
    const set2 = new Set(s2);
    
    const intersection = [...set1].filter(item => set2.has(item));
    
    return intersection.length;
}