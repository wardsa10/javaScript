const menu = [
  {
    id: 1,
    name: "Burger",
    category: "Food",
    price: 35,
    available: true,
  },
  {
    id: 2,
    name: "Pizza",
    category: "Food",
    price: 50,
    available: true,
  },
  {
    id: 3,
    name: "Pasta",
    category: "Food",
    price: 40,
    available: false,
  },
  {
    id: 4,
    name: "Coffee",
    category: "Drink",
    price: 15,
    available: true,
  },
  {
    id: 5,
    name: "Tea",
    category: "Drink",
    price: 10,
    available: true,
  },
  {
    id: 6,
    name: "Sandwich",
    category: "Food",
    price: 25,
    available: false,
  },
  {
    id: 7,
    name: "Juice",
    category: "Drink",
    price: 20,
    available: true,
  },
  {
    id: 8,
    name: "Ice Cream",
    category: "Dessert",
    price: 18,
    available: true,
  },
];

const customer = {
  name: "David",
  budget: 120,
  isStudent: true,
};

let order = [1, 3, 5];

//_1_____________________
function displayMenu() {
  for (let i = 0; i < menu.length; i++) {
    console.log(
      `${menu[i].id}- ${menu[i].name}- ${menu[i].category}-${menu[i].price}-${menu[i].available}`,
    );
  }
}

displayMenu();

//2____________________________

function getAvailableItems() {
  return menu.filter((item) => item.available === true);
}

console.log(getAvailableItems());

//3___________________
function findItemById(id) {
  return menu.find((item) => item.id === id);
  return "Item not found.";
}

console.log(findItemById(99));

function getOrderItems() {
  return order.map((id) => {
    return menu.find((item) => item.id === id);
  });
}

console.log(getOrderItems());

//4_____________________

function validateOrder() {
  const items = getOrderItems();

  for (let i = 0; i < items.length; i++) {
    if (!items[i]) {
      console.log("This item does not exist.");
      return false;
    }
    if (!items[i].available) {
      console.log("Sorry, this item is currently not available.");
      return false;
    }
  }
}

console.log(validateOrder());

//5_______________________

function calculateTotal() {
  return menu.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
}
console.log(calculateTotal());

//6________________________
function applyDiscount() {
  let total = calculateTotal();
  let discount = 0;
  if (total > 150) [(discount = 0.2)];
  else if (total > 100) {
    discount = 0.15;
  } else if (customer.isStudent) {
    discount = 0.1;
  }

  const discountAmount = total * discount;
  const finalTotal = total - discountAmount;

  return {
    total: total,
    discount: discount * 100 + "%",
    finalTotal: finalTotal,
  };
}

console.log(applyDiscount());

//7_______________________

function canCustomerPay() {
  const final = applyDiscount().finalTotal;
  if (customer.budget >= final) {
    return true;
  }

  return false;
}

console.log(canCustomerPay());

function printReceipt() {
  const items = getOrderItems();
  const total = calculateTotal();
  const discountInfo = applyDiscount();

  const discountAmount = total - discountInfo.finalTotal;

  const canPay = canCustomerPay() 
  if (canPay) {
    console.log("Not Enough Money");
    return
    
  }
  console.log("========== RECEIPT ==========");
  console.log("Restaurant: JavaScript Burger House");
  console.log("Customer:", customer.name);

  console.log("Items:");

  for (let item of items) {
    console.log(`- ${item.name}: ${item.price} NIS`);
  }

  console.log("Original Total:", total + " NIS");
  console.log("Discount:", discountInfo.discount);
  console.log("Discount Amount:", discountAmount.toFixed(1) + " NIS");
  console.log("Final Total:", discountInfo.finalTotal.toFixed(1) + " NIS");
  console.log("Customer Budget:", customer.budget + " NIS");

  const paymentStatus =
    customer.budget >= discountInfo.finalTotal
      ? "Paid Successfully"
      : "Insufficient Funds";

  console.log("Payment Status:", paymentStatus);
  console.log("=============================");
}

printReceipt();

function countItemsByCategory() {
  const items =getOrderItems()
  return items.reduce((acc, item) => {
    if(!item) return acc
    acc[item.category] = (acc[item.category] || 0) + 1
    return acc
  },{})
}

console.log(countItemsByCategory());


function getMostExpensiveItem() {
  const items = getOrderItems();
  let item = items[0]
  for (let index = 1; index < menu.length; index++) {
    if (menu[index].price > item.price) {
     item = menu[index]; 
   }
    
  }
  return `max price : ${item.name}- ${item.price} NIS `
}

console.log(getMostExpensiveItem());


order = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
  { id: 5, quantity: 3 },
];


function QuantityItems() {
 
  let total = 0;

  order.forEach((item) => {
    const product = menu.find((menuItem) => menuItem.id === item.id);

    if (product) {
      const itemTotal = product.price * item.quantity;
      total += itemTotal;

      console.log(
        `${product.name} x${item.quantity} = ${itemTotal}`
      );
    }
  });

}

console.log(`total = ${QuantityItems()}`);
