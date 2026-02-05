import { PostCreationFormView } from "./view";
import { usePostCreationFormViewModel } from "./view-model";

export function PostCreationForm() {
    const viewModel = usePostCreationFormViewModel()

    return <PostCreationFormView {...viewModel} />
}