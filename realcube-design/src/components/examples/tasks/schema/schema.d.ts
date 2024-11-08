import { z } from 'zod'
export declare const taskSchema: z.ZodObject<
    {
        id: z.ZodString
        title: z.ZodString
        status: z.ZodString
        label: z.ZodString
        priority: z.ZodString
    },
    'strip',
    z.ZodTypeAny,
    {
        id: string
        title: string
        status: string
        label: string
        priority: string
    },
    {
        id: string
        title: string
        status: string
        label: string
        priority: string
    }
>
export type Task = z.infer<typeof taskSchema>
