/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  
  let map1 = {};
  for (let trans of transactions) {
    if (map1.hasOwnProperty(trans["category"])) {
      map1[trans["category"]] = map1[trans["category"]] + trans["price"];
    } else {
      map1[trans["category"]] = trans["price"];
    }
  }
  
  let result = [];
  for (let items of Object.entries(map1)) {
    result.push({category: items[0], totalSpent: items[1]});
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
