//string을 lowercase으로 써서 바꾸고
// split랑 join sort 써야할듯
// split를 문자열을 문자배열로 바꾼다음
// sort로 알파벳 순서로 
// join으로 다시 문자열로 


function solution(myString) {
  const lowerString = myString.toLowerCase();
  const newString = lowerString.split('').sort().join('');
  return newString;
}