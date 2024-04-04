import { z, defineCollection } from "astro:content";

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(),
        tags: z.array(z.string()),
        webUrl: z.string().optional(),
        repository: z.string().optional(),
    })
});

export const collections = {
    projects
}