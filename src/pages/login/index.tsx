import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAppNavigation } from "@/routes/useAppNavigation";
import { loginFormSchema, type TLoginFormFields } from "./form-schema";

export default function LoginPage() {
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

    return (
        <div className="w-screen h-screen bg-[#ddd] flex items-center justify-center">
            <form onSubmit={handleSubmit(submit)}>
                <Card className="md:w-[500px] bg-white border border-solid border-[#ccc] gap-4">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Welcome to CodeLeap network!</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <FieldSet>
                            <Field className="gap-2">
                                <FieldLabel htmlFor="username">Please enter your username</FieldLabel>
                                <Input {...register('username')} id="username" type="text" placeholder="John doe" />
                                <FieldError className="text-[#FF5151]">{errors.username?.message}</FieldError>
                            </Field>
                        </FieldSet>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button variant={'blue'} disabled={!isValid} type="submit">ENTER</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>


    );
}