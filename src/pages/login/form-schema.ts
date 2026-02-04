import z from "zod";

export const loginFormSchema = z.object({
    username: z.string().min(1, "Username is invalid."),
})

export type TLoginFormFields = z.infer<typeof loginFormSchema>