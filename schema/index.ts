import * as z from 'zod';

export const ContactSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email"
    }),
    message: z.string().min(10, {
        message: "Please enter a message of at least 10 characters"
    })
})