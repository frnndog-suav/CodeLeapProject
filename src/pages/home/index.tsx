import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { postCreationSchema, type TPostCreationFormFields } from "./post-creation-schema";

export default function HomePage() {
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

    return <div className="w-screen h-screen bg-[#ddd] flex justify-center">
        <div className="flex flex-col w-[80%] lg:w-[800px]">
            <div className="bg-[#7695EC] py-7 px-9">
                <h4 className="text-xl font-semibold text-white">
                    CodeLeap Network
                </h4>
            </div>

            <div className="bg-white h-full p-6">
                <form onSubmit={handleSubmit(submit)}>
                    <Card className="w-full bg-white border border-solid border-[#ccc] gap-4">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">{"What's on your mind?"}</CardTitle>
                        </CardHeader>
                        <CardContent className="gap-6 flex flex-col">
                            <FieldSet>
                                <Field className="gap-2">
                                    <FieldLabel htmlFor="title">Title</FieldLabel>
                                    <Input {...register('title')} id="title" type="text" placeholder="John doe" />
                                    <FieldError className="text-[#FF5151]">{errors.title?.message}</FieldError>
                                </Field>
                            </FieldSet>
                            <FieldSet>
                                <Field className="gap-2">
                                    <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
                                    <Textarea  {...register('message')} id="textarea-message" placeholder="Type your message here." className="h-[74px]" />
                                    <FieldError className="text-[#FF5151]">{errors.message?.message}</FieldError>
                                </Field>
                            </FieldSet>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <Button variant={'blue'} type="submit" disabled={!isValid} className="md:w-[120px]">Create</Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </div>
    </div>
}