/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // create a variable to store max profit
  let maxProfit = 0;
  // create variable to track min price set it from beginning of array
  let minPrice = prices[0];
  // loop thru the prices array starting from index 1 as selling price
  for ( let i = 1 ; i < prices.length; i++) {
    let sellPrice = prices[i];
    // get profit by sellPice minus minPrice
    let profit = sellPrice - minPrice;
    // if the profit is greater maxProfit, rpelace maxProfit with profit
    maxProfit = Math.max(maxProfit, profit)
    
    // check if current sellPrice is less than minPrice
    if (sellPrice < minPrice) {
      // if it is then move minPrice to next, which is sellPrice
      minPrice = sellPrice;
    }
  }
  return maxProfit;
};