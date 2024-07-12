// 10만 원 이상 사면 5%, 
// 30만 원 이상 사면 10%, 
// 50만 원 이상 사면 20% 할인

function solution(price) {
    let discount = 0;
    if (price >= 500000) {
        discount = 0.2;
    } else if (price >= 300000) {
        discount = 0.1;
    } else if (price >= 100000) {
        discount = 0.05;
    }
    
    const discountWon = price * discount;
    const result = price  - discountWon;
    
    return Math.floor(result);
}