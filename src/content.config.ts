import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    githubUrl: z.url().optional(),
    externalUrl: z.url().optional(),
    order: z.number().default(0),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    duration: z.string(),
    type: z.enum(["professional", "other"]).default("other"),
    order: z.number().default(0),
  }),
});

const educationCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    duration: z.string(),
    year: z.string().optional(),
    details: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  "projects": projectsCollection,
  "experience": experienceCollection,
  "education": educationCollection,
};
