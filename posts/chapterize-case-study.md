---
title: Chapterize Case Study
date: 2021-12-24
---

[Chapterize](https://chapterize.vercel.app/) is a simple NextJS website that generates youtube chapters from a youtube video. It uses OpenAI's *gpt-3.5-turbo* model to analyze the transcripts of the videos and generate chapters based on that.

<!-- > TODO: add gif that shows the working of chapterize -->

## How does it works?

The working is pretty simple. First, it makes an api requests to an endpoint to fetch the transcript in chunks. Its then feed the chunk to open ai and receives a response. That response is then parsed into a format that YouTube recognizes as valid chapters.

![Chapterize](/assets/img/chapterize.png)

## Challenges I faced while building chapterize

## Future Plans

Here's a list of things I want to implement in this project:

### Server Side Validation and Rate-Limiting

Currently, things like payment validation are implemented only the client side. There is no server side validation, which is a huge security concern. My plan is migrate to something like next-auth or clerk.

I also want to implement rate-limiting as I intend on providing a free trial for new users. Additionally, I'm planning on adding few more pricing models to different consumers.

### Streaming Response

Chapterize fetches the chapters all at once or in chunks. Usually, users have to wait somewhere between 20 seconds to a minute for anything to be generated and that ruins the user experience. One way to solve this would be to stream the response — every time a token is generated, the UI is updated.

### Redis Cache and Firestore

I want to save the response in a firestore database, so that users can access it later on.

I also want to add a feature where every time a new token is generated, it will update an in-memory cache. That way users can continue from where they left, in case some failure happens while generating.

Currently, its not free, but I'm planning to add a free trial for new users.

[Try Chapterize](https://chapterize.vercel.app/)