---
title: "Vibe Coding induced Procastination"
slug: "vibe-code-procatstination"
tags:
  - career break
  - developer journey
  - blogging
  - seo experiments
  - twitch
  - streaming
author:
  name: "Mrdjan Stajic"
  bio: "Senior Frontend Engineer with 10+ years of experience building scalable web applications. Passionate about accessibility, performance, and modern web technologies."
  social:
    github: "https://github.com/mrdja026"
    linkedin: "https://www.linkedin.com/in/mrdjan-stajic/"
    website: "https://mrdjan.net"
published_at: "Fri Oct 30 2025"
excerpt: "What i was doing while not writing an article on RAG"
---

![Hero-Picture](/hero_image.png)

## Vibe code induced procrastination

## Why new RAG post is taking its time - Read below TLDR: I'm having fun vibe coding

### Shoutout to the Cursors team for Plan mode, although it is a token eater.

- Making products that serve some purpose that I'm not really that into
    - Nobody as a kid dreams to bring value to their employer ROI (wizards that you click and populate forms... be honest people)
- I watch a lot of Twitch (a Platform where you watch people play video games), and Twitch extensions and overlays are something that I have always wanted to make. Even freelance or like a side gig.
- In the past, I didn't have the discipline/time to make it all into one part. There were bits and pieces as separate POCs: auth there, send a message there, listen to this event, etc.

## Bring into LLM Assisted coding.

- This project was made by a methodology that is good enough for what purpose it serves, and for **ME**

**Purpose**:

- I want to have a fancy overlay on stream while I'm driving trucks (Euro Truck Simulator West Balkans DLC is good).
- I want to have an app that I can use to see my messages from viewers, and have two commands !song name_of_the_song and !commands that say how you can use !song
- You need OBS (Open Broadcast Source program for streaming)

<video src="/vibe-coding-blog/vibe-coding-demo.mp4" poster="/vibe-coding-blog/vibe-coding-demo.png" title="DEMO" id="video-1" class="w-full rounded-lg" controls preload="auto"></video>

**Architecture overview**:

- React Vite SPA For Overlays
- One page equals one overlay eg: /live -> Live screen, /pause -> Pause Screen
- Express JS proxy between Twitch, OBS, and a React Native Expo app
- React Native Expo app, so I don't need to look at the other monitor to monitor OBS to know the status of the stream - Running on tablet
- Everything in development mode, so it only works when I run ./start_all.sh

**About avatar - Animated PNG**

- Making sprites is hard; there are rules you need to follow. Dimensions and stuff..
- First, I want to try Comfy UI to animate it. It is interesting.
- Support the some artist. I will do that at the end.
    - I need three small GIFs (based on a provided PNG reference — my glorious likeness must be preserved)
      - Me chilling, like blinking, moving head slightly
      - Me talking, opening my mouth mimicking that talking to chat
      - Me coding with a serious face with slight movements
- If you know anyone with the skills to create these, drop a comment!

**What is good enough**:

- I don't know, that's for you to decide. I settled:

- Separation of concerns
    - **No pooling except where unavoidable**
    - it works only on my machine, tokens can be stored in memory or local JSONs if they are long-lasting - **TERRIBLE, DO NOT DO THIS**
    - It looks okayish - I am not on Twitch to make money, I don't even use a microphone (plan for voice modulator is in place), I'm at this point just vibing.
    - Kudos to Cursor and Codex for navigating the docs and setting up the proxies for https so everything can run securely while in dev mode, on Expo WebUI, and on the iPad.

- I have previously made all of these parts in isolation, before LLM-assisted coding, and when I was working. Now I wanted to make it resemble a product with constraints mentioned above.

- It took me 3 hours to push something that I can have a local version of React Native Expo App, 3 screens (Live/Pause/Other), and a twitch-obs-spotify-expo proxy REST Server.

- It was not pretty. I left some comments in the code because it just doesn't follow best practices. Then, when I had that, I used Codex and Cursor primarily to fix it while streaming, playing a video game. Alt tab, read the result, smoke test prompt in, alt tab, go into the game. I did that for 4-5 days and **Good enough for me is accomplished**

**Acceptance criteria are accomplished**

- I have an OBS stream overlay
- I can change a scene by clicking a button on my fancy Stream Deck since I have spare hardware
- **WEBSOCKETS** - why, because I wanted to, fight me in the comments, pooling was a better option in some cases
- I can see messages sent into my chat on my React Native App
- I can send messages in a React Native App
- Viewers can request a song via !song Deep Purple Lazy (DMCA Strikes Incoming)
    - Which will search Spotify, find the best result, and add it to the queue on the React Native App
    - I can remove/skip/play the song
    - All of the above works

**Total time**

Under 20 hours (most of that while playing games or reading —just another prompt), with refactors done offline (10h), main functionality was built on stream —again, only agentic coding. I could not do that under 30 hours before. Skill issue or not, I made something, and to be honest, the code is not terrible. Of course, if I were to make this into a "serious" project, I would start from zero. But I have a working prototype and know what the problems are to expect
