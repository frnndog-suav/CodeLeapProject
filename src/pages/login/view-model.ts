import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAppNavigation } from "@/routes/useAppNavigation";
import { loginFormSchema, type TLoginFormFields } from "./form-schema";

export const useLoginViewModel = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<TLoginFormFields>({
        resolver: zodResolver(loginFormSchema),
        mode: "onChange",
    });
    const { goToHome } = useAppNavigation()

    const submit = (formData: TLoginFormFields) => {
        console.log(formData)
        reset()
        goToHome()
    }

    return {
        submit, register,
        handleSubmit, errors, isValid
    }
}
