---
title: "Career Break in Tech: Why I Took One and What I Built"
slug: "career-break-ai-projects"
tags:
  - AI
  - career break
  - rag
  - frontend
  - js fatigue
  - llmops
  - developer journey
  - self-reflection
author:
  name: "Mrdjan Stajic"
  bio: "Senior Frontend Engineer with 10+ years of experience building scalable web applications. Passionate about accessibility, performance, and modern web technologies."
  social:
    github: "https://github.com/mrdja026"
    linkedin: "https://www.linkedin.com/in/mrdjan-stajic/"
    website: "https://mrdjan.net"
published_at: "Tue Sep 30 2025"
excerpt: "Why I took a career break, what I built with AI and RAG systems, and lessons from ~5 months of experimenting."
---

# I took a career break

## Career break in 2025 & Age of AI

## After budgeting and tracking expenses for a year and a half, I did it

## Advice

- The global job market is not good; too many good candidates
- Do not do this on a whim
- I spent a year tracking my budget
- Worked 10 years with ~4 months in between jobs
- Good at planning and Excel sheets
- Think about it

## A couple of reasons why

- **I was tired**
- When I started working in 2015, it was normal for people to take career breaks. I knew people from Serbia and other countries who went traveling for 6–9 months around the world.
- JS Fatigue (that's a term). I'm mainly a frontend dev (JS/TS world), low on backend production projects, but with a lot of side projects.
- I wanted to explore AI — let's call that a **Bet**

## I was tired

Self-explanatory. I really felt I was stagnating in my career and wanted to learn something else, but the options for branching weren't interesting to me.

## What I did while I didn't code or explore

- I read — mostly Sanderson (Stormlight Archive, Mistborn Era 2 read)
- Played video games, RDR2 (rerun), Clair Obscur: Expedition 33 — even if you don't play games, check out the soundtrack, it's on Spotify
- Coded for myself, related to the **Bet**

## JS Fatigue

- I have been in the industry for 10 years, mostly web, full-stack/frontend
- In that time period, I've seen the loop: everything on the server, then with JS, then SPA, then again resurgence of server-rendered content
    - Main difference: **the cloud**
- Only abstractions are added, and the ways of fetching data have changed — the end result is the same
- In my opinion, there are more abstractions now. What really changed is how we draw, fetch data, and interact with the server
- For frontend devs, it's now normal to know more than just frameworks: cloud knowledge, CI/CD, etc., a bit of infra.

## The Bet

- There is a big push in AI, heavily subsidized by Microsoft, Tencent, and private VCs. If you don't know that, you're living under a rock
- ROI must be achieved, so companies are pushing AI-assisted tools — my thought
- People in C-level positions at prominent companies mention that this is a bubble (duh), but I take their opinions with a grain of salt
- The LLM world, as of the time of writing (just after ChatGPT 5 went live), has plateaued — my opinion
- The cycle of bubbles is always there: dot-com, crypto, maybe AI is next
- Nobody knows what will happen in 5–10 years
- Chip providers are the choke point for cheap inference
- If the bubble bursts, my bet is that it'll be cheaper to rent a GPU and deploy your own infra; also, privacy

## What I made

- Blog analyzer
  Enter a blog post address in a CLI; it uses two LLMs (Terrasect and Qwen3) for OCR and summarization. Python for web scraping
  [Blog Analyzer](https://github.com/mrdja026/image_analyzer)

- D&D Agent with TUI, with Fast MCP for rolling dice, attacks, spawning items, and storing local history. Single-player D&D adventure creator that works on Qwen Instruct with tool calling and local Fast MCP for navigating the world with narrative storytelling

##video-content
src: /dnd_agent_demo.mp4
poster: /dnd_agent_demo.jpg
title: DEMO
id: video-1
className: w-full rounded-lg
priority: true
##end-video-content

- Obsidian → RAG  
  I use Obsidian as a brain dump, so I first implemented barebones RAG with cosine similarity, which worked well for structured data. For unstructured data, I hardened it via libraries, and the results are better but not perfect.
  [Obsidian RAG GitHub repo](https://github.com/mrdja026/rag-obsidian)

- Jira (UI & Barebones MCP)
    - Barebones MCP that can be plugged-and-played into VS Code (for example) and works via stdio
    - Has a bridge to Nest, which is connected to the UI in a SPA Vite app
    - Uses MCP to get the current data via HTTP bridge
    - Uses Gemma-Instruct for fuzzy calls to map them to real tool calls
    - Tool call returns JSON (task, issues, sprint, board, epic)
    - Chat about the risks, list subtasks, etc. via LLM (Qwen2.5)

##video-content
src: /jira_mcp_demo.mp4
poster: /jira_mcp_demo.png
title: Jira MCP Demo
id: video-2
className: w-full rounded-lg
priority: true
##end-video-content

- That video on the top ThreeJS scene maker
    - Using ThreeJS ChatGPT 5 for initial prompt.
    - Opened Codex, added prompt as an MD
    - Burned 1.9M tokens in two conversations until I made it
    - Two phases: first with voxels
    - Models
    - **Will write a blog post about it**

## What I have learned

- How to find a model that actually works
- Hugging Face is an awesome place
- Downloading a GGUF is sometimes easier than building it
- llama.cpp maintainers are awesome
- Need to explore more stuff like vLLM
- Quantizing models to run on my hardware
- Model orchestration
- Llama hell
- Different model, different template hell
- Everybody hallucinates
- **Stuff can be delivered as MVPs very easily**

## How I did it

- Using only AI-assisted coding
- Mostly deleting code, writing prompts, and changing environment variables and infra setup
- Will go over every example and maybe add some about me in the future
- I did not code at all (well, 98%)
- Max amount spent monthly: 40 bucks

### Thanks for reading

#### Best of vibes,

Mrdjan

For contact, you can use [LinkedIn](https://www.linkedin.com/in/mrdjan-stajic/) or [Contact](/contact)
