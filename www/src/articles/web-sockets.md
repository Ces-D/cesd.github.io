# Web Sockets

The _WebSocket_ specification defines a persistent connection between a web browser and a server, allowing both parties to start sending data at any time over a persistent, single-socket connection.

## How does WebSocket work?

There are three main steps:

1. _Opening a WbeSocket connection_ - The process of establish a WebSocket connection is known as the opening handshake, and consists of an HTTP request/response exchange between the client and the server.
2. _Data transmission over WebSockets_ - After a successful WebSocket handshake, the client and server can exchange messages (frames) over the persistent WebSocket connection.
3. _Closing a WebSocket connection_ - Either the client or the server can initiate the closing handshake to close the WebSocket connection at any time by sending a close message.

## Pros and Cons of WebSocket

| Pros                      | Cons                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| Full-duplex communication | Requires new server infrastructure                                                                 |
| Lower latency             |                                                                                                    |
| Less overhead             |                                                                                                    |
| Header compression        |                                                                                                    |
| Binary support            |                                                                                                    |
| Cross-origin support      |                                                                                                    |
|                           | Not optimized for streaming audio and video data                                                   |
|                           | Don't automatically recover when connections are terminated                                        |
|                           | Some environments (such as corporate networks with proxy servers) will block WebSocket connections |
|                           | Stateful, making them hard to use in large-scale systems                                           |

## WebSocket Scalability

Companies like Slack, Netflix, and Uber use WebSockets to power realtime features in their apps for millions of end-users.
However, scaling WebSockets is non-trivial, and involves numerous engineering decisions and technical trade-offs. Among them:

- Should you use vertical or horizontal scaling?
- How do you deal with unpredictable loads?
- How do you manage WebSocket connections at scale?
- How much bandwidth is being used overall, and how is it impacting your infrastructure costs?
- Do you have to deal with traffic spikes, and if so, what is the performance impact on the server layer?
- How will you automatically add additional server capacity if and when it's needed?
- How do you ensure data integrity (guaranteed message ordering and delivery) at scale?

## What are the best alternatives to WebSockets?

Websocket is an excellent choice for use cases where it's critical (or at least desirable) for data to be sent and consumed in realtime or non-realtime. However, there is rarely a one-size-fits-all protocol -- different protocols server different purposes better than others. Realtime alternatives to WebSockets include:

- Server-Sent Events (SSE)
- HTTP Long Polling
- MQTT
- [[WebRTC]]
- WebTransport

## Web Socket API

You can open a WebSocket connection by calling the `WebSocket` constructor:

```javascript
const socket = new WebSocket("ws://localhost:8080");
```

Notice the `ws:`. This is URL schema for WebSocket connections. The `wss:` schema is used for secure connections.

Attaching event handlers immediately to the connection allows you to know when the connection is opened, when you receive data, and when an error occurs.

The second argument accepts optional sub-protocols. It can be a string or an array of string. Each string should represent a sub-proposal name and the server accepts only one of the the passed sub-protocols in the array. Accepted sub-protocols can be determined by accessing `protocol` property of the `WebSocket` object.

```javascript
const socket = new WebSocket("ws://localhost:8080", ["soap", "xmpp"]);

socket.onopen = function () {
  console.log("Connection established.");
  console.log(`Sub-protocols: ${socket.protocol}`);
};

socket.onmessage = function (event) {
  console.log(`Data received: ${event.data}`);
};

socket.onerror = function (error) {
  console.log(`Error: ${error}`);
};
```

### Communicating with the server

As soon as we have a connection to the server (i.e. the `onopen` event handler is called), we can start sending data to the server using the `send()` method. In the latest spec it can send binary messages in addition to strings. To send binary data, you can use either `Blob` or `ArrayBuffer` object.

```javascript
const socket = new WebSocket("ws://localhost:8080");
socket.send("Hello");

const file = document.querySelector("input[type=file]").files[0];
socket.send(file);
```

Equally the server might send us messages at any time. Whenever this happens then `onmessage` callback fires. The callback receives an `event` object and the actual message is accessible via the `data` property.

WebSocket can also receive binary messages in the latest spec. Binary frames can be received in `Blob` or `ArrayBuffer` format. To specify the format of the received binary, set the binaryType property of the WebSocket object.

```javascript
const socket = new WebSocket("ws://localhost:8080");
socket.binaryType = "arraybuffer";
socket.onmessage = function (event) {
  console.log(`Data received: ${event.data.byteLength}`);
};
```

Another new feature of WebSockets is extensions. Using extensions, it will be possible to send frames `compressed`, `multiplexed`, etc. You can find server accepted extensions by examining the extensions property of the WebSocket object after the open event.

### Cross-origin WebSocket connections

Cross-origin communication is baked right into WebSocket. The server can specify which origins are allowed to connect. If the client is not on the list, the server will close the connection. The client can also specify which protocols it is willing to speak. If the server does not support any of the protocols, it will close the connection.

Every new protocol has to deal with proxy servers. WebSocket is no exception. The WebSocket protocol specification defines ws (WebSocket) and wss (WebSocket Secure) as two new uniform resource identifier (URI) schemes that are used for unencrypted and encrypted connections, respectively. The specification also defines a new HTTP header called `Sec-WebSocket-Protocol` that is used by the client to specify the list of protocols it is willing to speak. The server can then select one of the protocols from the list and send it back to the client in the same header. The client can then verify that the server selected one of the protocols from the list and close the connection if it did not.
