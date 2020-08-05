# Big Int

## Discovery 
What made this one difficult was the fact I was unaware about Big Int and the problems 
large calculations present. I could pass all my tests except square of 64. It wasn't until 
I looked at some other solutions that I saw "BigInt" and therefore had a new avenue to explore.
The following will be my notes on BigInt in attempt to better learn it.

## Learning
"The BigInt data type aims to enable JavaScript programmers to represent integer values larger than the range supported by the Number data type". When Number is used as a function, it converts a string or other values to a Number type, and if it cant, NaN.

>`Number('123')`  // returns the number 123 
>
>`Number('123') === 123`  // true
>
>`Number("unicorn")`  // NaN
>
>`Number(undefined)`  // NaN

 The following example shows the minimum and maximum integer values that can be represented as Number object.

>`const biggestInt  = Number.MAX_SAFE_INTEGER`  //  (253 - 1) =>  9007199254740991
>
>`const smallestInt = Number.MIN_SAFE_INTEGER`  // -(253 - 1) => -9007199254740991

Another example: 
>`console.log(9999999999999999);` // 10000000000000000
>
>`9007199254740992 === 9007199254740993;`    // true

These examples happen because when a number is beyond what Number can handle, unexpect rounding will occur. 
One workaround to this is the String type, but with BigInt, workarounds aren't needed. 
To create a BigInt, add "n" to the end of an integer:

>`console.log(9007199254740995n);`    // 9007199254740995n
>
>`console.log(9007199254740995);`     // 9007199254740996

Or use the BigInt( ) constructor: 

>`BigInt("9007199254740995");`    // 9007199254740995n

### Things to note:
**BigInt and Number are not === but they are ==**

100n === 100 // false

100n == 100 // true

**Urnary plus is not supported with BigInt**

>`console.log(typeof +"10");` // number
>
>`console.log(typeof +10n);` // TypeError

**When using BigInt operand division, it is automatically rounded down**

>`35/10;` // 3.5
>
>`35n/10n` // 3n

**Mixed operations with BigInt and Number are not allowed**

>`100 + 100n` // TypeError

## Final thoughts
BigInt was designed to be used for numbers beyond what is supported by Number while keeping precision. And note to self: read the top of the specs! Additional information and on BigInt here!