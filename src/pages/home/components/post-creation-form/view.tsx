import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { usePostCreationFormViewModel } from "./view-model";

interface IProps extends ReturnType<typeof usePostCreationFormViewModel> {}

export function PostCreationFormView({
	errors,
	isValid,
	isSubmitting,
	submit,
	register,
	handleSubmit,
}: IProps) {
	return (
		<form onSubmit={handleSubmit(submit)}>
			<Card className="w-full bg-white border border-solid border-[#ccc] gap-4">
				<CardHeader>
					<CardTitle className="text-xl font-bold">
						{"What's on your mind?"}
					</CardTitle>
				</CardHeader>
				<CardContent className="gap-6 flex flex-col">
					<FieldSet>
						<Field className="gap-2">
							<FieldLabel htmlFor="title">Title</FieldLabel>
							<Input
								{...register("title")}
								id="title"
								type="text"
								placeholder="Hello World"
								disabled={isSubmitting}
							/>
							<FieldError className="text-[#FF5151]">
								{errors.title?.message}
							</FieldError>
						</Field>
					</FieldSet>
					<FieldSet>
						<Field className="gap-2">
							<FieldLabel htmlFor="textarea-message">Message</FieldLabel>
							<Textarea
								{...register("message")}
								id="textarea-message"
								placeholder="Content here"
								className="h-[74px]"
								disabled={isSubmitting}
							/>
							<FieldError className="text-[#FF5151]">
								{errors.message?.message}
							</FieldError>
						</Field>
					</FieldSet>
				</CardContent>
				<CardFooter className="flex justify-end">
					<Button
						type="submit"
						variant={"blue"}
						disabled={!isValid || isSubmitting}
						className="md:w-[120px]"
					>
						Create
					</Button>
				</CardFooter>
			</Card>
		</form>
	);
}
