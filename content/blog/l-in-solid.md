---
title: Understanding the L in SOLID Principles
coverImage: https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80
publishDate: 09/16/2021
tags: typescript,SOLID,OOP
description: Explaining Liskov-Substitution of SOLID principles in object-oriented programming.
---

The Liskov-Substitution principle states that objects created by a superclass should be replaceable with objects created by its subclasses, without breaking an application. The liskov substitution principle is an extension to the open-close principle which was written about in an earlier post. When writing code, you might run into an instance where you want to extend the functionality of one class in order to add further features to your application. In order to complete your task of expanding functionality, while still complying with the open-close principle, you will have to expand functionality by creating a new kind of subclass.

A summary of the liskov-substitution assumptions are as follows:

- Methods of a subclass that override methods of the parent class, should have exactly the same number of arguments.
- Each of the arguments of the overridden method must be of the same type as the parent class.
- The return type of the overridden method must be the sane as that of the parent class.
- The types of exceptions thrown by the overridden method must be the same as that methods from the the parent class.

In the following example I am going to expand upon the working example using the Spotify api.

## The SOLID principles are

- **Single-Responsibility principle**
- **Open-Closed principle**
- **Liskov Substitution principle**
- **Interface Segregation principle**
- **Dependency Inversion principle**

## Typescript Example

In typescript use the **declare** keyword when declaring the methods that will be implemented by any number of classes or functions. This keyword allows you to set a structure for the names of the methods and their return types.

```typescript
declare class SpotifyRequest {
  public _clientId: string;
  public _clientSecret: string;
  public AuthorizationFlow(): Promise<AccessTokens>;
}

class ClientCredentialsRequest implements SpotifyRequest {
  public _clientId = process.env.CLIENT_ID!;
  public _clientSecret = process.env.CLIENT_SECRET!;

  public async AuthorizationFlow(): Promise<AccessTokens> {
    const auth_token = Buffer.from(
      `${this._clientId}:${this._clientSecret}`,
      "utf-8"
    ).toString("base64");
    const body = new URLSearchParams({ grant_type: "client_credentials" });

    return axios
      .post("https://accounts.spotify.com/api/token", body, {
        headers: {
          Authorization: `Basic ${auth_token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        return res.data;
      });
  }
}
class ImplicitGrant implements SpotifyRequest() {
  // This would throw errors because the class does not implement the necessary methods
}

class FeaturePlaylists extends ClientCredentialsRequest {
  constructor() {
    super();
  }
}
```

Typescript is not a perfect example for this pattern. For one your typescript compiler has to compile to es6 javascript otherwise you will receive many errors along the way. Additionally, typescript does ot let you declare an async function, but you can return an async return type aka `Promise<any>`.
