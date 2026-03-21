import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const promesses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/promesses" }),
  schema: z.object({
    title: z.string(),
    theme: z.string(),
    icon: z.string(),
    description: z.string(),
    progress: z.number().min(0).max(100).default(0),
    status: z
      .enum(["non-demarree", "en-cours", "avancee", "realisee"])
      .default("non-demarree"),
    order: z.number().default(0),
    actions: z
      .array(
        z.object({
          label: z.string(),
          done: z.boolean().default(false),
          date: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

const charte = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/charte" }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    order: z.number().default(0),
    status: z
      .enum(["non-demarree", "en-cours", "avancee", "realisee"])
      .default("non-demarree"),
    actions: z
      .array(
        z.object({
          label: z.string(),
          done: z.boolean().default(false),
          date: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { promesses, charte };
