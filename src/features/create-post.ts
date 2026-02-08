import { useMutation, useQueryClient } from "@tanstack/react-query";
import { httpRequest } from "@/api/http-request";
import { LIST_POSTS_CACHE_KEY } from "./fetch-posts";

interface IBody {
	title: string;
	content: string;
	username: string;
}

export function useCreatePost() {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending } = useMutation<IBody, unknown, IBody>({
		mutationFn: async (data: IBody) => {
			await httpRequest<unknown, IBody>({
				method: "POST",
				url: "careers/",
				data,
			});

			return data;
		},
		onSuccess: () => {
			console.log("sucesso");
			queryClient.invalidateQueries({
				queryKey: [LIST_POSTS_CACHE_KEY],
				exact: false,
				refetchType: "all",
			});
		},
		onError: () => {
			console.log("error");
		},
	});

	return { isLoading: isPending, mutateAsync };
}
