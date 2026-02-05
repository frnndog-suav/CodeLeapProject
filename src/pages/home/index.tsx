import { Container } from "./components/container";
import { Content } from "./components/content";
import { Header } from "./components/header";
import { PostCreationForm } from "./components/post-creation-form";

export default function HomePage() {
    return <Container>
        <Header />
        <Content>
            <PostCreationForm />
        </Content>
    </Container>
}