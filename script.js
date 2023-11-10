// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

function Grade(score) {
  if (score >= 80) {
    console.log("You did a good job");
  } else if (score >= 70) {
    console.log("Keep trying");
  } else if (score >= 60) {
    console.log("ehhhh");
  } else if (score >= 55) {
    console.log("Not too good");
  } else {
    console.log("Bad Grade But You'll Get Em Next Time");
  }
}

Grade (75)


// // 2.   Write a function that prints out multiples of 10 up to a given input (argument)
function printMultiples(input) {
  for (let m = 10; m <= input; m += 10) {
    console.log(m);
  }
}

// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return
function coinsReturned(howMuch, priceItem) {
  // Calculate the change
  let change = howMuch - priceItem;

  // Calculate the number of quarters
  let quarters = Math.floor(change / 0.25);
  return quarters;
}

//4.    Write a function that prints out how many benjamins you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paind and amount cost
function changeReturned(moneyGiven, moneyCost) {
  let change = moneyGiven - moneyCost;

  const benjamins = {
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    1: 0,
  };

  // Checking the amount of each bill
  while (change >= 100) {
    benjamins["100"]++;
    change -= 100;
  }
  while (change >= 50) {
    benjamins["50"]++;
    change -= 50;
  }
  while (change >= 20) {
    benjamins["20"]++;
    change -= 20;
  }
  while (change >= 10) {
    benjamins["10"]++;
    change -= 10;
  }
  while (change >= 5) {
    benjamins["5"]++;
    change -= 5;
  }
  while (change >= 1) {
    benjamins["1"]++;
    change -= 1;
  }

  // Displaying the result
  for (let bill in benjamins) {
    if (benjamins[bill] !== 0) {
      console.log(`$${bill} benjamins: ${benjamins[bill]}`);
    }
  }
}

// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
for (let k = 1; k <= 100; k++) {
  if (k % 3 === 0 && k % 5 === 0) {
    console.log("FizzBuzz");
  } else if (k % 3 === 0) {
    console.log("Fizz");
  } else if (k % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(k);
  }
}
