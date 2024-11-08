import * as z from 'zod'
export declare const formSchema: z.ZodObject<
    {
        username: z.ZodString
    },
    'strip',
    z.ZodTypeAny,
    {
        username: string
    },
    {
        username: string
    }
>
export declare const FormSchemaCheckbox: z.ZodObject<
    {
        mobile: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>
    },
    'strip',
    z.ZodTypeAny,
    {
        mobile?: boolean | undefined
    },
    {
        mobile?: boolean | undefined
    }
>
export declare const FormSchemaDatePicker: z.ZodObject<
    {
        dob: z.ZodDate
    },
    'strip',
    z.ZodTypeAny,
    {
        dob: Date
    },
    {
        dob: Date
    }
>
