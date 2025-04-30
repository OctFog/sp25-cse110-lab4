# Part 2 of Lab 4
- CSE 110
- Spring 2025
- Xiaogeng Xu

## 1
The variable `i` (which is 3) will be printed because `i` is defined by `var` which it can be access in function scope, which it can be access in the function `discountPrices`, and the length of the `prices` is 3.

## 2
The variable `discountedPrice` (which is 150) will be printed because `discountedPrice` is defined by `var` which it can be access in function scope, which it can be access in the function `discountPrices`. Also, the value will be 150 since after last iteration of `for` block the last value in prices is 300, and then 300 multiply by (1 - 0.5).

## 3
The variable `finalPrice` (which is 150) will be printed because `finalPrice` is defined by `var` which it can be access in function scope, which it can be access in the function `discountPrices` and change in `discountPrices`. Then, after each iteration, `finalPrice` will be 150 by the the math operation.

## 4
The function return a `list` **[50, 100, 150]** because, in each iteration of the for loop, it calculates the discounted price for each item in prices by multiplying by (1 - discount). Each discounted price is rounded to two decimal places and pushed into the discounted array. After the loop finishes, the full array [50, 100, 150] is returned.

## 5
There will be an error since `i` is defined by `let` which it only accessible in the `for` block.

## 6
There will be an error because `discountedPrice` is defined using `let` inside the `for` block. Variables declared with `let` have block scope, so `discountedPrice` cannot be accessed outside the `for` loop when trying to `console.log(discountedPrice)`.

## 7
The variable `finalPrice` (which is 150) will be printed because `finalPrice` is defined using `let` at the function level, not inside the `for` block. So it is still accessible after the loop ends. After the final iteration, the last `finalPrice` value is 150, from calculating `300 * (1 - 0.5)`.

## 8
The function returns a list `[50, 100, 150]` because, during the `for` loop, each price is multiplied by `(1 - discount)`, rounded to two decimal places, and pushed into the `discounted` array. The array `[50, 100, 150]` is then returned after all iterations.

## 9
There will be an error since `i` is defined by `let` which it only accessible in the `for` block.

## 10 
The variable `length` (which is 3) will be printed  because `length` is defined using `const` at the function level, and the `console.log(length)` also executing at the function level. It equals the length of the list `prices`.

## 11
The function returns a list `[50, 100, 150]` because, during the `for` loop, each price is multiplied by `(1 - discount)`, and pushed into the `discounted` array. The array `[50, 100, 150]` is then returned after all iterations.

## 12
- A. student.name
- B. student['Grad Year'] 
- C. student.greeting() 
- D. student['Favorite Teacher'].name 
- E. student.courseLoad[0]

## 13
- A. '32'
'+' operator with a string will convert 2 to '2', so '3' + '2' becomes '32'.
- B. 1
'-' operator forces both sides to be numbers so '3' will be converted to 3, then 3 - 2 = 1.
- C. 3
`null` is 0 in numeric operations. So 3 + 0 = 3.
- D. '3null'
'+' operator with a string will convert `null` to 'null', so '3' + 'null' = '3null'
- E. 4
The `true` will converted to 1 in numeric operations, so 1 + 3 = 4. 
- F. 0
The `false` will converted to 0, `null` will also convert to 0. 0 + 0 = 0.
- G. '3undefined'
'+' with a string will convert `undefined` to string 'undefined', so '3' + 'undefined' = '3undefined'.
- H. `NaN`
'-' forces numeric coercion. '3' becomes 3, but undefined becomes NaN (Not a Number), so 3 - NaN = NaN.

## 14
- A. true
'2' will be converted to 2 (number), then 2 > 1 is true.
- B. false
Both '2' and '12' are strings, so it compares the first letter.
- C. true
`==` allows type coercion. '2' is coerced to 2, so 2 == 2 is true.
- D. false
`===` does **not** allow type coercion. 2 (number) and '2' (string) are different types, so it is false.
- E. false
`true` will be converted to number which is 1, so 1 == 2 is false.
- F. true
Boolean(2) is true, so `true === true` is true.

## 15
The `==` operator is loose equality, it compares two values for equality **after** converting them to a common type.
The `===` operator is strict equality, it compares both **value and type** without any type conversion.

## 17
**[2, 4, 6]**
Calling modifyArray([1, 2, 3], doSomething) returns [2, 4, 6] because it applies the doSomething function (which doubles each number) to every element in the array.

## 19
```
1
4
3
2
```

