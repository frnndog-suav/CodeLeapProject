import { Container } from "./components/container";
import { Content } from "./components/content";
import { Header } from "./components/header";
import { Post } from "./components/post";
import { PostCreationForm } from "./components/post-creation-form";

export default function HomePage() {
	// const { data } = useFetchPosts();

	return (
		<Container>
			<Header />
			<Content>
				<PostCreationForm />
				<Post
					createdAt="25 minutes ago"
					message={"Hello World\nHello World2"}
					title="My First Post at CodeLeap Network!"
					username="@Victor"
				/>
			</Content>
		</Container>
	);
}
