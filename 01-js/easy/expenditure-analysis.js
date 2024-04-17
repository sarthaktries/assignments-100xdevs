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

  const expenses = {};
  for (let obj of transactions) {
    if (expenses.hasOwnProperty(obj.category)) {
      expenses[obj.category] = obj.price + expenses[obj.category];
    } else {
      expenses[obj.category] = obj.price;
    }
  }

  const temp = Object.entries(expenses);
  const result = [];
  for (let x = 0; x < temp.length; x++) {
    result[x] = {category : temp[x][0], totalSpent : temp[x][1]}
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
