function solution(n, k) {
    const sheepPrice = 12000; 
    const drinkPrice = 2000;    

    const sheepCost = n * sheepPrice;
    const drinkCost = k * drinkPrice;

    const freeDrinkCount = Math.floor(n / 10);  
    const actualFreeDrinks = Math.min(freeDrinkCount, k);

    const discountDrinkCost = actualFreeDrinks * drinkPrice;

    const totalCost = sheepCost + drinkCost - discountDrinkCost;

    return totalCost;
}
