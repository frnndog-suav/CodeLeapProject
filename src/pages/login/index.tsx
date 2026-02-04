import { LoginView } from "./view";
import { useLoginViewModel } from "./view-model";

export default function LoginPage() {
    const viewModel = useLoginViewModel()

    return (
        <LoginView {...viewModel} />
    );
}