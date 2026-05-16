import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    order: z.number().default(0),
    title: z.string(),
    // description: z.string(),
    tags: z.array(z.string()),
    githubUrl: z.url().optional(),
    demoUrl: z.url().optional(),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    order: z.number().default(0),
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    duration: z.string(),
    type: z.enum(["professional", "other"]).default("other"),
  }),
});

const educationCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    order: z.number().default(0),
    degree: z.string(),
    institution: z.string(),
    yearBatch: z.string(),
  }),
});

const skillsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/skills" }),
  schema: z.object({
    order: z.number().default(0),
    title: z.string(),
    categories: z.array(z.object({
      name: z.string(),
      skills: z.array(z.string()),
    })),
  }),
});

export const collections = {
  "projects": projectsCollection,
  "experience": experienceCollection,
  "education": educationCollection,
  "skills": skillsCollection,
};
