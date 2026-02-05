import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

    const submit = (formData: TPostCreationFormFields) => {
        console.log(formData)
        reset()
    }

    return {
        errors, isValid, submit, register,
        handleSubmit,
    }
}