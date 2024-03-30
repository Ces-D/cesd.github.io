---
id: "Reference and Borrowing"
tags:
  - "Rust"
  - "Ownership"
---

# References and Borrowing

A _reference_ is like a pointer in that it's an address we can follow to access the data stored at a memory address; that is owned by some other variable. Unlike a pointer, a reference is guaranteed to point to a valid value of a particular type for the life of that reference. The `&` syntax creates a reference that refers to a value but does not own it. Becuase it does not own it, the value it points to will not be dropped when the reference stops being used. The action of creating a reference is known as _borrowing_.

## Mutable References

References by default are immutable. In order to create a _mutable reference_, you use the `mut` keyword when instantiating or passing in a variable. Mutable references have one major restriction: you can only have a single reference to that value. this restriction allows for mutation in a controlled fashion. The benefit is that Rust can prevent data races at compile time. A _data race_ is similar to a race condition and happens when:

- two or more pointers access the same data at the same time
- at least one of the pointers is being used to write to the data
- theres no mechanism being used to synchronize access to the data

We can use curly brackts to create a new scope, allowing for multiple mutable references, but not _simultaneous_ ones

```
fn main() {
    let mut s = String::from("hello");

    {
        let r1 = &mut s;
    } // r1 goes out of scope here, so we can make a new reference with no problems.

    let r2 = &mut s;
}
```

## Dangling References

A _dangling pointer_ is a pointer that references a location in memory that may have been given to someone else, by freeing some memory while preserving a pointer to that memory.

```
fn main() {
    let reference_to_nothing = dangle();
}

fn dangle() -> &String { // dangle returns a reference to a String

    let s = String::from("hello"); // s is a new String

    &s // we return a reference to the String, s
} // Here, s goes out of scope, and is dropped. Its memory goes away.
  // Danger!
```
