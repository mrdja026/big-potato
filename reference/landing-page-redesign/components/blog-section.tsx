import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    date: "10/30/2025",
    readTime: "5 min read",
    title: "Vibe Coding induced Procastination",
    excerpt: "What I was doing while not writing an article on RAG",
    tags: ["career break", "developer journey", "blogging", "seo experiments", "twitch", "streaming"],
    author: "Mrdjan Stajic",
  },
  {
    date: "10/6/2025",
    readTime: "11 min read",
    title: "Building This Blog: My Assisted Coding Workflow",
    excerpt:
      "How I built this blog using an Agentic Tools using my workflow, with concrete examples of when each AI tool excelled in the development process.",
    tags: [
      "AI development",
      "cursor",
      "codex",
      "next.js",
      "blog development",
      "AI tools",
      "workflow",
      "chatgpt-5",
      "frontend",
      "developer journey",
      "self-reflection",
    ],
    author: "Mrdjan Stajic",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-xl font-semibold tracking-tight">Latest posts</h2>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-transparent border-border hover:border-primary/50 transition-colors">
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-medium text-lg leading-snug">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 4 && (
                    <Badge variant="secondary" className="text-xs font-normal bg-secondary/50">
                      +{post.tags.length - 4}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center font-mono text-primary text-[10px]">
                    MS
                  </div>
                  <span>{post.author}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
