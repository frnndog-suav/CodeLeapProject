import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { httpRequest } from "@/api/http-request";

const CACHE_KEY = "@codeleap-fetch-posts";

interface IPost {
	id: number;
	username: string;
	created_datetime: Date;
	title: string;
	content: string;
}

interface IResponse {
	count: number;
	results: IPost[];
}

export function useFetchPosts() {
	const { data, isError, isLoading, isFetched, isPending, isFetching } =
		useQuery({
			queryKey: [CACHE_KEY],
			queryFn: async () => {
				return await httpRequest<IResponse>({
					method: "GET",
					url: "careers/",
				});
			},
		});

	const posts = useMemo(() => data?.results, [data]);

	return {
		posts,
		isError,
		isLoading,
		isFetched,
		isPending,
		isFetching,
	};
}

export { CACHE_KEY as LIST_POSTS_CACHE_KEY };
