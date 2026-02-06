import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreatePost } from "@/features/create-post";
import { postCreationSchema, type TPostCreationFormFields } from "../../post-creation-schema";

export function usePostCreationFormViewModel() {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<TPostCreationFormFields>({
        resolver: zodResolver(postCreationSchema),
        mode: "onChange",
    });
    const { isLoading, mutateAsync: createPost } = useCreatePost()

    const submit = async (formData: TPostCreationFormFields) => {
        console.log(formData)
        await createPost({ title: formData.title, content: formData.message, username: 'teste' })
        reset()
    }

    return {
        errors,
        isValid,
        isSubmitting: isLoading,
        submit,
        register,
        handleSubmit,
    }
}