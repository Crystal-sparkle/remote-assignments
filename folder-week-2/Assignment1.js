//Assignment 1: Function and Array
//Complete the function below to find the max number of the passing array of numbers.
//Reminder: you can't use built-in Math.max() or sort() to complete this assignment.

/*function max(numbers) {
const arr1 = [...numbers];
 for (i=0; i< arr1.length; i++)

if ( arr1[0]>=arr1[i]) {
  console.log(arr1[0]);
}
else if ( arr1[1]>=arr1[i]){
    console.log(arr1[1]);
}
else if(arr1[2]>=arr1[i]) {
    console.log(arr1[2]);
}
else if(arr1[3]>=arr1[i]) {
    console.log(arr1[3]);
}
else if(arr1[4]>=arr1[i]) {
    console.log(arr1[4]);
}
else if(arr1[5]>=arr1[i]) {
        console.log(arr1[5]);
}else{ console.log('no amswer!')}

}*/
function max(numbers) {
  const arr1 = [...numbers];
  let NumMax = arr1[0];
  for (i = 0; i < arr1.length; i++) {
    let NumMax = arr1[0];
    if (arr1[i] > NumMax) {
      NumMax = arr1[i];
    }
  }
  console.log(NumMax);
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

//Assignment 2: Function and Object
//Complete the function below to calculate the result of the passing object.

function calculate(args) {
  const { n1, n2, op } = args;
  let value;
  if (op === "+") {
    value = n1 + n2;
  } else if (op === "-") {
    value = n1 - n2;
  } else {
    value = "Not supported";
  }
  return value;
}

console.log(calculate({ n1: 2, n2: 3, op: "+" })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); // expected output: 'Not supported'

//Assignment 3: Function, Array, and Object
//Complete the function below to calculate the total price of all products after applying a discount.

function calculate(data) {
  // 取出object 的price值,在把他們乘以優惠 就會得到答案
  const { discount, products } = data; // 使用 reduce 函數將價格相加
  const total = products.reduce((acc, product) => acc + product.price, 0);
  const totalPrice = discount * total;

  console.log(totalPrice);
}
const discountedPrice = calculate({
  discount: 0.9,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});

// show the total price of all products after applying a discount
