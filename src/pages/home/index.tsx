import { useFetchPosts } from "@/features/fetch-posts";
import { Container } from "./components/container";
import { Content } from "./components/content";
import { Header } from "./components/header";
import { Post } from "./components/post";
import { PostCreationForm } from "./components/post-creation-form";

export default function HomePage() {
	const { posts } = useFetchPosts();

	return (
		<Container>
			<Header />
			<Content>
				<PostCreationForm />
				{posts?.map((post) => (
					<Post
						key={post.id}
						title={post.title}
						message={post.content}
						username={post.username}
						createdAt={post.created_datetime.toString()}
					/>
				))}
			</Content>
		</Container>
	);
}
