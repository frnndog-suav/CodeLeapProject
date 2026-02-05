import z from "zod";

export const postCreationSchema = z.object({
    title: z.string().min(1, "Title is invalid."),
    message:z.string().min(1, "Message is invalid."),

})

export type TPostCreationFormFields = z.infer<typeof postCreationSchema>