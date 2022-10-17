### constants
- they are always immutable, not just immutable by default.
- declare using the `const` keyword, instead of `let` keyword. The type of the variable must be annotated.
- can be declared in any scope, including global. Global constants are useful for values that many parts of code need.
- must be set to a value that is constant, not computed at runtime.

### shadowing
- re-using a variable name
- the second variable is what the compiler will see when you use the variable. It overshadows the first, taking any uses of the variable name to itself until either it itself is overshadowed or the scope ends.


``` rust
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
    }

    println!("The value of x is: {x}");
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$ cargo run
   Compiling variables v0.1.0 (file:///projects/variables)
    Finished dev [unoptimized + debuginfo] target(s) in 0.31s
     Running `target/debug/variables`
The value of x in the inner scope is: 12
The value of x is: 6
```
- shadowing is different than usin the `mut` keyword, because we'll get a compile-time error if we try to reassign this variable without using the `let` keyword. By using `let` we can perform a few transformations on a value but have the variable be immutable after those transformations have been completed.
- Another difference is that becuase we are creating a new variable when we use the `let` keyword, we can change the type of the value but reuse the same name. 

### Data Types
Every value in Rust is of a certain _data type_. 
- __Scalar__
- __Compound__

#### Scalar Types
Represents a single value. There are four primary scalar types: _integers_, _floating-point numbers_, _Booleans_, and _characters_.

##### Integer Types
| length  | signed | unsigned |
|---------|--------|----------|
| 8-bit   | i8     | u8       |
| 16-bit  | i16    | u16      |
| 32-bit  | i32    | u32      |
| 64-bit  | i64    | u64      |
| 128-bit | i128   | u128     |
| arch    | isize  | usize    |

_Signed_ and _unsigned_ refer to whether it is possible for the number to be negative or only positive. _signed_ means possible negative and _unsigned_ is always positive. The _isize_ and _usize_ types depend on the architecture of the computer. 

- _Integer Overflow_: Rust includes checks for integer overflow in developer mode. In production mode, Rust performs _complement wrapping_, meaning that values loop around back to the lowest possible value. 

##### Floating Point Types
The two types of _floating-point_ are `f32` and `f64`, which are 32 and 64 bits in length. The default type is `f64`.

#### Compound Types
Types that can group multiple values into one type. There are two primitive compose types: _tuples_ and _arrays_.

##### Tuple Type
Tuples have a fixed length and can group together a group of values with a variety of types. The variable `tup` binds to an entire tuple, because a tuple is a single compoind type. You can destructure tuples or access specific values by indexing them using the `.`. A tuple without any values is called a `unit`.

##### Array Type
Unlike a tuple, every element in an array must have the same type. In Rust, arrays also have a fixed length. They are useful when you want your data allocated on the stack rather than the heap or when you want to ensure you always have a fixed number of elements. A `vector` is another type of collection type, but is more flexible since it is able to grow or shrink in size.
```
let a: [i32; 5] = [1, 2, 3, 4, 5];
```
This is how you write an arrays type. If you index outside the length of an array, the program will panic and throw a _runtime error_.
