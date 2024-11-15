// Task 4: Define Product interface and function to calculate total price
// Step 1: Define the Product interface with 'name' and 'price' properties
interface Product {
    name: String;
    price: number;
}
// Step 2: Function to calculate the total price of all products in an array

function getPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

// Test data for Task 4

const products: Product[] = [
    { name: "Apple", price: 2 },
    { name: "Banana", price: 1.0 },
    { name: "Orange", price: 1.5 }
];

const tPrice = getPrice(products);
console.log("Total Price:", tPrice);


// Task 5: Function to check if a string is a valid email address
function isEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  // Test data for Task 5

  console.log(isEmail("yazan@najah.com")); 
  console.log(isEmail("ahmad@gmail.com")); 
  console.log(isEmail("yazanEdali")); 


// ==========================
// ** How to Run TypeScript **
// ==========================

// 1. Install TypeScript globally:
//    npm install -g typescript

// 2. Write TypeScript code in a .ts file (e.g., product.ts).

// 3. Compile TypeScript to JavaScript:
//    tsc product.ts

// 4. Run JavaScript file with Node.js:
//    node product.js