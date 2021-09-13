---
title: Handling TypeScript Return Declarations in Factory Functions
coverImage: https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80
publishDate: 09/08/2021
tags: Typescript,Factory,OOP,JavaScript,Type
description: Showing you how to declare multiple return types in TypeScript from a single function.
---

In this example I am going to walk through how to declare the multiple return types of factory functions written in Typescript, so that you can take advantage of your IDE's intellisense. JavaScript is not a statically typed language and any function can return any number of different values, making maintenance difficult and reformatting troublesome. Typescript extends Javascript by providing return types for the language, solving the issue of difficult maintenance.

## Factory Functions

Factory functions are an object oriented language design pattern where a single function creates and returns a new instance of multiple different values depending on its inputs. This is beneficial because it separates concerns between consumer and provider, where the consumer does not need to know any of the logic involved in making the provided object. The consumer only needs to call the factory, providing the correct parameters or filters for their desired return type, and bingo they get the correct value back.

## Typescript Syntax

**Overloads** - Typescript allows overloading functions. This means that you can vary the accepted parameter types and values for each function. When compiled these overloads do not create different functions. There only purpose is to avoid compile errors from typescript and improve on the intellisense.

## Example

```
export type BlogDataLevel = "Post" | "Card" | "Paths";

interface OverLoads {
  ["Post"]: BlogPost;
  ["Card"]: BlogCard;
  ["Paths"]: BlogPaths;
}

export default class BlogDataFactory {
  static async returnData<D extends BlogDataLevel>(
    dataLevel: D,
    fileName?: string
  ): Promise<OverLoads[D]>;
  static async returnData(dataLevel: BlogDataLevel, fileName?: string) {
    if (typeof fileName === "undefined") {
      throw new Error("The file name does not exist");
    }

    let data: PostData | CardData | PathsData;

    switch (dataLevel) {
      case "Card":
        data = new CardData(fileName);
        break;
      case "Post":
        data = new PostData(fileName);
        break;
      case "Paths":
        data = new PathsData(fileName);
        break;
      default:
        throw new Error("You did not enter the correct Blog Data Level");
    }

    return data.toJson();
  }
}

```

In this example the factory function is deciding on the return type based on the value of the variable `dataLevel`. The accepted values of dataLevel are declared in the type of `BlogDataLevel`. The static method `returnData` has an overload where we create a variable `D` extending BlogDataLevel and assigning that type to our parameter dataLevel. Since our function is `async` our return type has to be a `Promise` of a specific type. `Overloads` is an interface object mapping the value of D to its appropriate return type. Putting all this together we get a function of return type `Promise<Overloads[D]>`.

I should note that our `BlogDataFactory` is a class with one static method and this could just as easily be a function. I chose to place this as a static class because these design patterns are typically coded using object oriented languages.
