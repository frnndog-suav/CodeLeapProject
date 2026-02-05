import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export default function HomePage() {
    return <div className="w-screen h-screen bg-[#ddd] flex justify-center">
        <div className="flex flex-col w-[80%] lg:w-[800px]">
            <div className="bg-[#7695EC] py-7 px-9">
                <h4 className="text-xl font-semibold text-white">
                    CodeLeap Network
                </h4>
            </div>

            <div className="bg-white  h-full p-6">
                <Card className="w-full bg-white border border-solid border-[#ccc] gap-4">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">{'What’s on your mind?'}</CardTitle>
                    </CardHeader>
                    <CardContent className="gap-6 flex flex-col">
                        <FieldSet>
                            <Field className="gap-2">
                                <FieldLabel htmlFor="username">Title</FieldLabel>
                                <Input id="username" type="text" placeholder="John doe" />
                                {/* <FieldError className="text-[#FF5151]">{errors.username?.message}</FieldError> */}
                            </Field>
                        </FieldSet>
                        <FieldSet>
                            <Field className="gap-2">
                                <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
                                <Textarea id="textarea-message" placeholder="Type your message here." className="h-[74px]" />
                                {/* <FieldError className="text-[#FF5151]">{errors.username?.message}</FieldError> */}
                            </Field>
                        </FieldSet>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button variant={'blue'} type="submit" className="md:w-[120px]">Create</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
}