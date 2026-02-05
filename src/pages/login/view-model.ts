import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAppNavigation } from "@/routes/useAppNavigation";
import { loginSchema, type TLoginFormFields } from "./login-schema";

export const useLoginViewModel = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<TLoginFormFields>({
        resolver: zodResolver(loginSchema),
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
