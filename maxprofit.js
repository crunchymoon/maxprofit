/*Task:
Given an array of positive integers, representing the price of a single stock on a single day. (each index is a day from monday-friday). Also given an integer (k) which represents the numbef of transactions. A transaction consist of buying a stock on a day and selling it on any other days. 

Write a program that calculates the max profit of selling the stocks on given days.
*/

function maxProfitWithKTransactions(prices, k) {
    //here define the prices ([4,6,3...])
    let myPrices = []
    myPrices = [...prices];
    let [Monday, Tuesday, Wednesday, Thursday, Friday] = myPrices;

    //here define the transactions (3)
    let numOfTransactions = k;
    let buyValues = [];
    let sellValues = [];
    //buy stocks maximum numOfTransactions (k) times
    for (let i = 0; i < numOfTransactions; i++) {
        buyStock();
    }
    for (let j = 0; j < numOfTransactions; j++) {
        sellStock();
    }
    //after we have the buyValues variable's prices,
    //we can add them together
    let totalBuys =buyValues.reduce((a, b) => a + b, 0);
    console.log(totalBuys);
    
    //after we have the sellValues variable's prices,
    //we can add them together
    let totalSells =sellValues.reduce((a, b) => a + b, 0);
    console.log(totalSells);
    
    



    //choose when do you want to buy
    function buyStock() {
        let buyDay = prompt(`When do yo want to buy your stock? 
Monday: ${Monday}$,
Tuesday: ${Tuesday}$,
Wednesday: ${Wednesday}$,
Thursday: ${Thursday}$,
Friday: ${Friday}$`);

        if (buyDay == "monday") {
            buyDay = Monday;
            buyValues.push(buyDay);
        } else if (buyDay == "tuesday") {
            buyDay = Tuesday;
            buyValues.push(buyDay);
        } else if (buyDay == "wednesday") {
            buyDay = Wednesday;
            buyValues.push(buyDay);
        } else if (buyDay == "thursday") {
            buyDay = Thursday;
            buyValues.push(buyDay);
        } else if (buyDay == "friday") {
            buyDay = Friday;
            buyValues.push(buyDay);

        } else {
            console.log("You can only buy from monday-friday")
        }

//        console.log(buyValues);
    }
    
    //choose when do you want to sell
    function sellStock() {
        let sellDay = prompt(`When do yo want to sell your stock? 
Monday: ${Monday}$,
Tuesday: ${Tuesday}$,
Wednesday: ${Wednesday}$,
Thursday: ${Thursday}$,
Friday: ${Friday}$`);

        if (sellDay == "monday") {
            sellDay = Monday;
            sellValues.push(sellDay);
        } else if (sellDay == "tuesday") {
            sellDay = Tuesday;
            sellValues.push(sellDay);
        } else if (sellDay == "wednesday") {
            sellDay = Wednesday;
            sellValues.push(sellDay);
        } else if (sellDay == "thursday") {
            sellDay = Thursday;
            sellValues.push(sellDay);
        } else if (sellDay == "friday") {
            sellDay = Friday;
            sellValues.push(sellDay);

        } else {
            console.log("You can only buy from monday-friday")
        }

//        console.log(sellValues);
    }
    

    function calcProfit(buy,sell){
        let totalProfit = sell-buy;
        alert(`You bought stocks for ${totalBuys}$,
You sold stocks for ${totalSells}$,
Your total profit is ${totalProfit}$`)
    }
    calcProfit(totalBuys,totalSells);
}
console.log(maxProfitWithKTransactions([4, 6, 3, 10, 12], 2))

