import { z } from 'zod';

export const createWorkspaceSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Workspace name must be at least 2 characters.')
    .max(80, 'Workspace name must be at most 80 characters.'),

  slug: z
    .string()
    .trim()
    .min(3, 'Workspace URL must be at least 3 characters.')
    .max(60, 'Workspace URL must be at most 60 characters.')
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      'Use lowercase letters, numbers, and hyphens only.'
    ),

  description: z
    .string()
    .trim()
    .max(500, 'Description must be at most 500 characters.')
    .optional(),
});

export type CreateWorkspaceInput = z.infer<typeof createWorkspaceSchema>;
