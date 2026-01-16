import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.object({
      name: z.string(),
      bio: z.string(),
      social: z.object({
        github: z.string(),
        linkedin: z.string(),
        website: z.string(),
      }),
    }),
    published_at: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
