import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const birds = defineCollection({
	loader: glob({ base: './src/content/birds', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		commonName: z.string(),
		latinName: z.string(),
		date: z.coerce.date(),
		location: z.string(),
		story: z.string(),
		source: z.string(),
		featured: z.boolean().default(false),
		image: z.string(),
	}),
});

export const collections = { birds };
