function calculateTotalSpentByTopCustomers(purchaseAmounts) {
    let totalSpent = 0;
    purchaseAmounts.forEach(i => {
        totalSpent += i;
    });
    return totalSpent;
}

let topCustomerPurchases = [10000, 20000, 30000];
console.log(calculateTotalSpentByTopCustomers(topCustomerPurchases));

// До этого код был совсем не понятный без объяснения.
//Теперь, когда я поменял название переменных и функций, c данным кодом может работать любой человек владеющий английским на базовом уровне