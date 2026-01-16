import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-16">
      <div className="mx-auto max-w-2xl px-6 py-16 w-full text-center">
        <div className="space-y-6">
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Hello, I am</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-primary">Mrdjan</span>
            <br />
            <span className="text-foreground">Software Developer</span>
          </h1>

          <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
            Frontend, backend, devops. Currently tinkering with AI projects and exploring Go, Python, and whatever
            sparks curiosity.
          </p>

          <pre className="font-mono text-xs sm:text-sm text-muted-foreground inline-block text-left mx-auto">
            {`┌──────────────────────┐
│  ~ terminal          │
├──────────────────────┤
│  > thinking...       │
│  > building...       │
│  > coffee...         │
│  > _                 │
└──────────────────────┘`}
          </pre>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button className="font-medium">Read Blog</Button>
            <Button variant="outline" className="font-medium bg-transparent border-border">
              View Work
            </Button>
            <Button variant="ghost" className="font-medium text-muted-foreground">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
