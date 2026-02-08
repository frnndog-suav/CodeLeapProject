import { useQuery } from "@tanstack/react-query";
import { httpRequest } from "@/api/http-request";

const CACHE_KEY = "@codeleap-fetch-posts";

export const DEFAULT_ITEMS_PER_PAGE = 5;

export function useFetchPosts() {
	const { data, isError, isLoading, isFetched, isPending, isFetching } =
		useQuery({
			queryKey: [CACHE_KEY],
			queryFn: async () => {
				return await httpRequest({
					method: "GET",
					url: "careers/",
				});
			},
		});

	return {
		data,
		isError,
		isLoading,
		isFetched,
		isPending,
		isFetching,
	};
}

export { CACHE_KEY as LIST_EDITIONS_CACHE };
