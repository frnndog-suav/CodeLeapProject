import { useAppNavigation } from "@/routes/useAppNavigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type TLoginFormFields } from "./login-schema";

export const useLoginViewModel = () => {
    const {
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
        goToHome()
    }

    return {
        errors, 
        isValid,
        submit, 
        register,
        handleSubmit, 
    }
}
