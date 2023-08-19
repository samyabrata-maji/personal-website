---
title: Chapterize Case Study
date: 2023-08-19
---

[Chapterize](https://chapterize.vercel.app/) is a simple NextJS website that generates youtube chapters from a youtube video. It uses OpenAI's *gpt-3.5-turbo* model to analyze the transcripts of the videos and generate chapters based on that.

<!-- > TODO: add gif that shows the working of chapterize -->

## How does it works?

The working is pretty simple. First, it makes an api requests to an endpoint to fetch the transcript in chunks. Its then feed the chunk to open ai and receives a response. That response is then parsed into a format that YouTube recognizes as valid chapters.

<!-- ![Chapterize](/assets/img/chapterize.png) -->

## What I learned?

Building chapterize was quite fun and I learnt a lot of things. Here's some of them:

### 1. Fast API

For this project, my initial plan was to fetch transcripts via the youtube api and then feed it to open ai. The youtube api is quite limited in that it allows very few requests per user. Luckily I found a [python package](https://pypi.org/project/youtube-transcript-api/) that did what I needed. But using it meant I had to use python and setup my own rest api to communicate with my nextjs application, and deploy it too.

### 2. Open AI and Prompt Engineering

Well, I never used open ai api before (but it was relatively simple to use). Coming up with effective prompts was challenging but fun.

## Future Plans

Here's a list of things I want to implement in this project:

### 1. Server Side Validation and Rate-Limiting

Currently, things like payment validation are implemented only the client side. There is no server side validation, which is a huge security concern. My plan is migrate to something like next-auth or clerk.

I also want to implement rate-limiting as I intend on providing a free trial for new users. Additionally, I'm planning on adding few more pricing models to different consumers.

### 2. Streaming Response

Chapterize fetches the chapters all at once or in chunks. Usually, users have to wait somewhere between 20 seconds to a minute for anything to be generated and that ruins the user experience. One way to solve this would be to stream the response — every time a token is generated, the UI is updated.

### 3. Redis Cache and Firestore

I want to save the response in a firestore database, so that users can access it later on.

I also want to add a feature where every time a new token is generated, it will update an in-memory cache. That way users can continue from where they left, in case some failure happens while generating.

Currently, its not free, but I'm planning to add a free trial for new users.

**Click this link to [Try Chapterize](https://chapterize.vercel.app/)**
