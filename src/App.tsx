import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Field, FieldLabel, FieldSet } from "./components/ui/field";

function App() {
	return (
		<div className="w-screen h-screen bg-[#ddd] flex items-center justify-center">
			<Card className="md:w-[500px] bg-white border border-solid border-[#ccc] gap-4">
				<CardHeader>
					<CardTitle className="text-xl font-bold">Welcome to CodeLeap network!</CardTitle>
				</CardHeader>
				<CardContent>
					<FieldSet>
						<Field className="gap-2">
							<FieldLabel htmlFor="username">Please enter your username</FieldLabel>
							<Input id="username" type="text" placeholder="John doe" />
						</Field>
					</FieldSet>
				</CardContent>
				<CardFooter className="flex justify-end">
					<Button variant={'blue'}>ENTER</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

export default App;
