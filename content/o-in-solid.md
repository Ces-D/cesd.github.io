---
title: Understanding the O in SOLID Principles
coverImage: https://images.unsplash.com/photo-1524989899036-b1c54afba1c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80
publishDate: 09/12/2021
tags: cSharp,SOLID,OOP
description: Explaining the Open-Closed of SOLID principles in object-oriented programming.
---

The open-closed principle states that classes, modules, and functions should be _open for extensions, but closed for modification_. This means that these software entities should be allowed to be extended without changing the base source code. The method to achieve this is most often by inheriting or implementing abstract classes/interfaces.

The major benefit of this design pattern is in the adaptability of your code when requirements change. Instead of going back to change your already existing and working code, potentially causing breaks, you will instead add new code to address the new requirements. Interface's or abstracts will act as a loose relationship across your dependencies.

The example below will be an expanded rewrite of my earlier example on the Single-Responsibility principle where I requested from the Spotify Api. This rewrite is coded using CSharp.

## The SOLID principles are

- **Single-Responsibility principle**
- **Open-Closed principle**
- **Liskov Substitution principle**
- **Interface Segregation principle**
- **Dependency Inversion principle**

## CSharp Example

```csharp
namespace Solid.ApiAuthorizations
{
    using System.Threading.Tasks;
    using Solid.Models;


    public interface ISpotifyAuthorization
    {
        public Task<AccessTokenModel> AuthorizationFlow(string clientId, string clientSecret);
    }
}
```

This is the interface that will be inherited on each of my classes responsible for providing the spotify authorization tokens. Spotify currently has three different authorization flows, each providing different levels of access to their apis. In this example I am only writing for the [client-credentials flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow).

```csharp
namespace Solid.ApiAuthorizations
{
    using Solid.Models;
    using System;
    using System.Net.Http;
    using System.Net.Http.Headers;
    using System.Collections.Generic;
    using System.Text.Json;
    using System.Text;
    using System.Threading.Tasks;

    public class ClientCredentials : ISpotifyAuthorization
    {
        private string TOKEN_URL = "https://accounts.spotify.com/api/token";
        public async Task<AccessTokenModel> AuthorizationFlow(string clientId, string clientSecret)
        {
            byte[] clientCredentials = Encoding.UTF8.GetBytes(String.Format("{0}:{1}", clientId, clientSecret));

            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(clientCredentials));
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                List<KeyValuePair<string, string>> requestData = new List<KeyValuePair<string, string>>();
                requestData.Add(new KeyValuePair<string, string>("grant_type", "client_credentials"));

                FormUrlEncodedContent requestBody = new FormUrlEncodedContent(requestData);

                HttpResponseMessage request = await client.PostAsync(this.TOKEN_URL, requestBody);
                string response = await request.Content.ReadAsStringAsync();

                return JsonSerializer.Deserialize<AccessTokenModel>(response);
            }
        }
    }
}
```

Here you can see how I am enforcing the creation of the method `AuthorizationFlow`. If at a later date I wanted to also implement Spotify's [Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow) I could just as easily.

### Summary

The Open Close principle is great because it allows to expand your codes features while avoiding the possibility of introducing bugs into existing and functioning code. If your code has similar functions or solves similar problems but solves it in different ways, this could be a signal to abstract away the functions in case responsibilities change.
