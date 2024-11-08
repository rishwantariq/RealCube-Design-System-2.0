import * as z from 'zod'
export var formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
})
export var FormSchemaCheckbox = z.object({
    mobile: z.boolean().default(false).optional(),
})
export var FormSchemaDatePicker = z.object({
    dob: z.date({
        required_error: 'A date of birth is required.',
    }),
})
