# WebRTC

WebRTC (Web Real-Time Communications) is an open source project that enables real-time voice, text, and video communication capabilities in web browsers and mobile devices through simple APIs. The WebRTC components have been optimized to best serve this purpose.

## How does WebRTC work?

WebRTC uses JavaScript, APIs and HTML5 to embed communications within web browsers. WebRTC APIs perform several key functions, including accessing and recording video, audio, and text based data from devices to initiating, monitoring , and ending P2P connections between devices via browsers and facilitating bidirectional data transfer over multiple data channels.

In most cases, WebRTC connects users by transferring real-time audio, video and data from device to device using P2P communications. In situations where users are on different IP networks that have **NAT (Network Address Translation)** firewalls that prevent RTC, WebRTC can be used in conjunction with **STUN (Session Traversal Utilities for NAT)** servers. This enables a given IP address to be translated into a public internet address so peer communications can be established.

But there are also networks that are so restrictive that even a STUN server cannot be used to translate IP addresses. In these cases, WebRTC is used with a Traversal Using Relays around NAT (TURN) server, which relays traffic between users, enabling them to connect. The Interactive Connectivity Establishment protocol is used to find the best connection.

Before audio and video files are sent, they must be compressed due to their large size. Also, media that is received over a peer connection must be decompressed. WebRTC uses a codec process to do this.

## What is WebRTC used for?

The goal of WebRTC is to facilitate real-time communication over the internet. Some of the most common use cases include:

- WebRTC is used for video chats and meeting on video calling platforms, such as Zoom, Microsoft Teams, and Google Meet.
- Industries, including healthcare, surveillance and monitoring, and internet of things, use WebRTC. For example, WebRTC is used in tele-health applications to enable remote doctor-patient consultations.
- In the field of home and business security, WebRTC is used to enable remote monitoring of homes and businesses.
- WebRTC is used in online gaming to enable real-time communication between players.
- WebRTC is used in online education to enable real-time communication between teachers and students.

## What are the pros and cons of WebRTC?

| Pros                                                                                             | Cons                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| WebRTC is open source and free to use.                                                           |                                                                                                                                                      |
| WebRTC is supported by all major browsers, including Chrome, Firefox, Safari, and Edge.          | WebRTC is not supported by all browsers.                                                                                                             |
|                                                                                                  | WebRTC is not supported by all mobile devices.                                                                                                       |
| Eliminates in-house manual integration work in IT                                                |                                                                                                                                                      |
| Can adjust communication quality, bandwidth and traffic flow whenever network conditions changes |                                                                                                                                                      |
| Does not require third-party components or plugins                                               |                                                                                                                                                      |
|                                                                                                  | Each user must establish a P2P browser connection, making bandwidth an issue                                                                         |
|                                                                                                  | Maintenance costs can be high because WebRTC requires powerful servers                                                                               |
|                                                                                                  | Security and privacy standards are still unclear, leaving it up to IT departments to ensure that corporate security and privacy standards can be met |
|                                                                                                  | There are no definitive _quality of service_ standards, which means that quality of video or audio over the internet may be inconsistent             |
