---
title: "Building This Blog: My Assisted Coding Workflow"
slug: "building-blog-ai-coding-workflow"
tags:
  - AI development
  - cursor
  - codex
  - next.js
  - blog development
  - AI tools
  - workflow
  - chatgpt-5
  - frontend
  - developer journey
  - self-reflection
author:
  name: "Mrdjan Stajic"
  bio: "Senior Frontend Engineer with 10+ years of experience building scalable web applications. Passionate about accessibility, performance, and modern web technologies."
  social:
    github: "https://github.com/mrdja026"
    linkedin: "https://www.linkedin.com/in/mrdjan-stajic/"
    website: "https://mrdjan.net"
published_at: "Sun Oct 06 2025"
excerpt: "How I built this blog using an Agentic Tools using my workflow, with concrete examples of when each AI tool excelled in the development process."
---

##picture-content
src: hero_image.png
title: Hero-Picture
id: picture-hero
className: w-full rounded-lg
width: 1200
height: 630
aspectRatio: 16/9
sizes: (min-width: 768px) 768px, 100vw
priority: true
loading: lazy
##end-picture-content

# Building This Blog With Agentic Coding

## The AI Development Landscape in 2025

After taking a career break to explore AI development (as I mentioned in my previous post)[/blog/career-break-ai-projects], I wanted to build a blog that would showcase my projects while also being a showcase of what AI-assisted development can do. The result is what you're reading right now - a Next.js blog with Supabase backend, built almost entirely with AI assistance. I only changed environment variables, typed environment variables, and changed classes.

But here's the interesting part: I didn't use just one tool. I use multiple tools for Agentic Coding.

- Chat GPT Browser for creating high-level prompts for other LLMS (LLMS can make good prompts, or I am experiencing a placebo effect)
- Codex for code explanation, fixing security issues, and making plans
- Cursor for coding (sometimes in addition to Codex). MD File, MCPs, Cursor rules, the whole shebang
    - Cursor rules hold the rules, eg, tech stack, coding standards, KISS, YANGI, etc. They can be found on the internet
    - Every feature has its own requirements.
    - One Chat one Requirements, when the context limit, which I think in Cursor is 256k, is over 60% create: What I did, What I need to do, Impediments, and store as a .md doc to reference in the next step
    - Loop
- Google AI Studio has a context limit of 1M per conversation. When you start a new one, it's basically free
- Builder.IO for initial prototyping. I literally created the blog, pasted the React Project here, and used Codex with a prompt to convert it into a Next.js app with SSR & SSG

## Cost breakdown

- Global AI tool market is saturated; too many options, AI Fatigue incoming
- I spent a months testing workflows, and what works best for **me**
- Worked 10 years with ~4 months in between jobs

**Monthly cost:** ~$30 Average

- Cursor: ~$20 bucks (80% of usage) - Got that sweet LennyNewsletter deal for a bunch of AI tools for a year (~100 euros), and opted out of new Cursor pricing- (so I can calculate in my head how much I can use it)
- Codex: 20 bucks flat, and it comes with ChatGPT's cheapest subscription

## My 80%: Why Cursor Became My Primary Tool

Cursor quickly became my go-to for most development tasks, and for good reason. I can MVP something very quickly. Since there are a lot of models coming out in recent months, there is free usage- Grok-Code-Fast at the time of the post is free, so... use it.

### A couple of reasons why

- **Real-time feedback loop** - I could see immediately if the component rendered correctly
- **Context awareness** - It understands the entire project structure, it's faster in indexing files than VS Code, for example, but that gap is shrinking
- **Iterative refinement** - Easy to make minor adjustments and see the results

### Codex

- **CLI Tool** - When using Codex, I often do not open the editor
    - Create Agents.md file, which is similar to Cursor rules
    - Create a list of features with some tool or write it, and then validate with Gemmini/ClaudeCode/other
    - Star from the first one
      - First, create a plan to execute. When the plan is done
        - Tweak it
        - Run it
    - Iterate
    - Codex on a 20 bucks monthly plan has a 5-hour limit and a weekly limit, which can be checked by the/status command
  -For the Three JS project, I gave it a prompt generated in ChatGPT and had two conversations
      - One for almost everything - ate 1.5m tokens
      - Polish ~.4m tokens
      - In totals 1.9m tokens, mostly for reading, which is strange, they do not seem to cache that aggressively like some other Coding Agents

### Project Setup & Architecture

When I started **this** blog, Cursor handled the foundational setup:
What is really important - you should have knowledge of the language that you are writing code in, if you don't, you won't spot errors, and even if you know, the LLMS will make garbage. This blog, I think, can trim 20% LOC and still work.

```bash
# Cursor helped me initialize the project
pnpm create next-app@latest --typescript --tailwind --eslint
# Then walked me through Supabase integration
# Set up the database schema
# Configured authentication
```

What made Cursor shine here was its ability to maintain context across multiple files. When I was setting up the Supabase client, Cursor understood how it would be used in the API routes and automatically suggested the proper configuration.

### Component Development

The bulk of the UI work - components like [`LatestPosts`](src/components/blog/LatestPosts.tsx), the layout system, and the blog post renderer - was done in Cursor. Here's why:

1. **Real-time feedback**: I could see immediately if the component rendered correctly
2. **Iterative refinement**: Easy to make minor adjustments and see the results

For example, when building the [`MarkdownRenderer`](src/components/MarkdownRenderer.tsx), I started with a basic React Markdown implementation:

```tsx
// Initial version from Cursor
import ReactMarkdown from "react-markdown";

export function MarkdownRenderer({ content }: { content: string }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
```

Then, I iteratively added features like video support, picture handling, and custom components. Cursor was perfect for this incremental development approach.

### Debugging & Performance Optimization

Cursor excelled at the debugging phase. When I had issues with the blog post rendering or the SEO metadata, Cursor could:

- Analyze error messages and suggest fixes
- Profile performance bottlenecks
- Recommend optimizations for the Next.js app router

### The ThreeJS Demo - One-Shot Method

The most impressive example was the ThreeJS scene you see in the header of this article [/blog/career-break-ai-projects]. This is where Codex's "one-shot" capability really shone:

1. I provided a detailed prompt describing the interactive 3D scene - One prompt to one shot it
2. Codex generated the entire implementation in one go
3. Result: Complete ThreeJS scene with proper lighting, animations, and interactions

This cost me about 1.9M tokens in two conversations, but the result was worth it. Trying to build this incrementally in Cursor would have taken much longer and likely wouldn't have achieved the same cohesive result.

I need to investigate more the OpenRouter BYOK with KilloCode, RooCode, and Cline, since the payment is more transparent, and you go directly to the source.

### Cursor Markdown Implementation

Codex was also invaluable for complex, self-contained logic. For example, the markdown parsing logic in [`MarkdownRenderer.tsx`](src/components/MarkdownRenderer.tsx) that handles custom video and picture content blocks:

```tsx
// This complex regex and parsing logic was generated by Codex
function splitContent(content: string): Segment[] {
  // Complex parsing logic for ##somecontet-content and ##somecontent-content blocks
  // Handles nested structures, error cases, and edge conditions
}
```

### Boilerplate Generation

Cursor was perfect for generating boilerplate code:

- API route templates
- Database schema definitions
- Configuration files
- Type definitions

## Concrete Workflow Examples

### Example 1: Building the Blog Post Page

**Cursor handled:**

- The page structure and layout
- Integration with the layout component
- Basic metadata handling
- Responsive design

```tsx
// Cursor helped with the basic structure
export default async function BlogPostPage({ params }) {
  const { post } = await getBlogPost(slug);
  return (
    <Layout>
            <h1>{post.title}</h1>
            <MarkdownRenderer content={post.body} />   {" "}
    </Layout>
  );
}

{
  (() => {
    const body = post.body || "";
    const hasVideo = /<video[\s\S]*?>|\.mp4\b/i.test(body);
    if (!hasVideo) return null; // Complex video schema generation...
  })();
}
```

### Example 2: SEO Implementation

**Cursor's approach:**

- Basic Open Graph tags
- Simple meta descriptions
- Standard Twitter cards

**KiloCode's contribution:**

- Complete structured data implementation
- BreadcrumbList schema
- VideoObject schema for video content
- Advanced SEO optimizations

The result is a blog that scores 100% on SEO audits, with comprehensive structured data that helps search engines understand the content. Tested in laboratory conditions, need Webvitals for that.

### Example 3: The Media Component

The [`Media`](src/components/Media.tsx) component that handles images, videos, and GIFs is a perfect example of the Cursor/Codex collaboration:

```tsx
// Cursor started with the basic structure
export function Media({ src, kind, className }: Props) {
  if (kind === "video") {
    return <video src={src} />;
  }
  return <img src={src} />;
}
```

### The Cost-Benefit Analysis

While Codex is more expensive per token, it's often more cost-effective for complex tasks because:

- I opted out of the Cursor predatory non-transparent pricing plan :)
- It generates complete solutions in one shot
- Reduces the time spent on iterative development
- Often produces more robust code with better edge case handling

Cursor is more cost-effective for:

- Incremental development
- Debugging and refinement
- Tasks that require visual feedback

### Experience

I've actually used both tools extensively and can speak from experience about their strengths and limitations. This isn't theoretical - it's based on real-world usage of building this blog.

### Expertise

The technical details and code examples demonstrate a genuine understanding of the technologies involved. I'm not just repeating marketing copy - I'm showing actual implementation details.

### Authoritativeness

I'm honest about what worked and what didn't. The 80/20 split isn't a magic formula - it's what worked for this specific project. I acknowledge the limitations and trade-offs.

### Trustworthiness

I don't deny using AI-assisted development for everything that is showcased in this blog. Even the hero image is created by NanoBanana (free).

## The Future of AI-Assisted Development

This 80/20 workflow between Cursor and Codex represents what I believe is the future of software development. It's not about replacing developers - it's about augmenting our capabilities.

The key insight is that different AI tools have different strengths. Rather than trying to use one tool for everything, the optimal approach is to use each tool for what it does best. For every model, you need to know "how" to talk with it. I learned how to speak with Sonnet models, until ChatGPT5 came out, then I set its reasoning to medium, started adding more harnessing (add phrases like, make a minor adjustment, create a plan for a minimal change)

## Conclusion

Building this blog with an 80/20 Cursor/Codex workflow was an experiment that paid off. The result is a fully functional, SEO-optimized blog that would have taken much longer to build traditionally. This blog was built in one week (source Github), while the Agent was working, I was playing video games, doing research on another topic. But making blogs is easy, to be honest.

For other developers considering AI-assisted development, my recommendation is:

1. **Start with Copilot**: Has a free trial, ChatGPT models are free
2. **Use Codex/Cursor strategically** for complex algorithms or one-shot implementations
3. **Maintain human oversight** - Read the thought process of the Agent, and interrupt it if it's bad.
4. **GIT** - I cannot overstate this; you must know the basics of git to do this effectively
5. **Be transparent** about your AI usage
6. **Focus on the strengths** of each tool rather than trying to use one for everything

The total cost of ~$40 is reasonable for the productivity gains, and the ability to build complex applications quickly is game-changing.

Does it make me a 10x dev? Like everything else, it depends. If it is a green field, it's a great boilerplate generator. If it is a legacy brownfield, it will yield poor results. But never 10x, most 3-4x for greenfield.

Would I recommend this workflow to other developers? **NO**. Try your own if you have the resources. But there is a lot of free stuff there. Gemmini CLI and Google AI Studio can be used as long as you can create another Gmail account. There are sometimes free models that will work even if you don't have a Cursor subscription.

### Thanks for reading

#### Best of vibes,

Mrdjan

For contact, you can use [LinkedIn](https://www.linkedin.com/in/mrdjan-stajic/) or [Contact](/contact)
