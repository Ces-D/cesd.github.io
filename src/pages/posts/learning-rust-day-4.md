Functions are declared using the `fn` keyword. Rust does not care where the function is defined, only that it is defined somewhere in the scope that can be seen by the caller.

## Statements and Expressions 
Functions are made of statements and optionally end in an expression. _Statements_ are instructions that perform certain actions and do not return values. _Expressions_ evaluate to a resulting value. Calling a function is an expression. Calling a macro is an expression. A new scope block created with curly brackets is an expression. 

``` rust
fn main() {
    let y = {
        let x = 3;
        x + 1
    };

    println!("The value of y is: {y}");
}
```
In this case the expression for `y` evaluates to `4`. Expressions do not include ending semicolons as you can see in `x + 1`. If you were to add the ending semicolon, then the expression would be transformed to a statement and will not return a value. 

## Functions with Return Values
Functions can return values to the code that calls them. The return type must be declared with a `->` arrow. 

## Comments
Comments are created using `//`. 

## `if` Expressions
``` rust
if number < 5 {
    println!("condition is true");
  } else if number == 7 {
    println!("number is 7");
  } else {
    println!("condition is false");
  }
```

## Using `if` in a `let` Expression
Because `if` is an expression, we can use it on the right side of a `let` statement to assign the outcome to a variable. values of an `if` expressions must evaluate to the the same type in this case.  
``` rust
let number = if condition { 5 } else { 6 }
```

