import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import  { Button } from "@/components/ui/button";
import  { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import  { Field, FieldError, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const loginFormSchema = z.object({
    username: z.string().min(1, "Username is invalid."),
})

type TLoginFormFields = z.infer<typeof loginFormSchema>

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<TLoginFormFields>({
        resolver: zodResolver(loginFormSchema),
        mode: "onChange",
    });

    return (
        <div className="w-screen h-screen bg-[#ddd] flex items-center justify-center">
            <form onSubmit={handleSubmit((data) => console.log(data))}>
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