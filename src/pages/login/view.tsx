import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { useLoginViewModel } from "./view-model";

interface IProps extends ReturnType<typeof useLoginViewModel> { }

export function LoginView({ errors, handleSubmit, isValid, register, submit, }: IProps) {
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
                        <Button variant={'blue'} disabled={!isValid} type="submit" className="md:w-[111px]">ENTER</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
}