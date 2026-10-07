import { defineCollection, z } from 'astro:content';

const cv = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    location: z.string(),
    email: z.string().email(),
    linkedin: z.string().url(),
    github: z.string().url(),
    downloadLabel: z.string(),
    profileTitle: z.string(),
    profile: z.string(),
    experienceTitle: z.string(),
    educationTitle: z.string(),
    skillsTitle: z.string(),
    experience: z.array(z.object({
      company: z.string(),
      role: z.string(),
      period: z.string(),
      description: z.string(),
      bullets: z.array(z.string())
    })),
    education: z.array(z.object({
      institution: z.string(),
      degree: z.string(),
      period: z.string()
    })),
    skills: z.array(z.string())
  })
});

export const collections = { cv };
