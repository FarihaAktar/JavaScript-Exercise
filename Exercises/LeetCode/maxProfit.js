// const pricesArr = [7, 1, 5, 3, 6, 4];
const pricesArr = [7,6,4,3,1];
// const pricesArr = [7,4,3,6,8];
// const pricesArr = [2,6,1];
// const minValue = Math.min(...pricesArr)
// console.log(minValue)

const maxProfit = (prices) => {
    let maxProfit = 0;

    // used two loops to solve the problem
    // for(let buyPrice= 0; buyPrice< prices.length; buyPrice++){
    //     for(let sellPrice= buyPrice +1; sellPrice< prices.length; sellPrice++){
    //         let profit = prices[sellPrice] - prices[buyPrice];
    //         maxProfit = Math.max(maxProfit, profit)
    //     }
    // }
    // console.log(maxProfit)

      // used one loops to solve the problem
    let minPrice = prices[0];
    for(let sell=1; sell< prices.length; sell++){
        let sellPrice = prices[sell];
        let profit = sellPrice - minPrice;
        maxProfit=Math.max(maxProfit, profit);
        if(sellPrice < minPrice) minPrice = sellPrice;
    }
    console.log(maxProfit)

}

console.log(maxProfit(pricesArr))