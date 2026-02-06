import { httpRequest } from "@/api/http-request";
import { useMutation } from "@tanstack/react-query";

interface IBody {
    title: string
    content: string
    username: string
};

export function useCreateBoosterPackFeature() {
    const { mutateAsync, isPending } = useMutation<
        IBody,
        unknown,
        IBody
    >({
        mutationFn: async (data: IBody) => {
            await httpRequest<unknown, IBody>({
                method: "POST",
                url: "careers/",
                data,
            });

            return data;
        },
        onSuccess: () => {
            console.log("sucesso")
            // await REACT_QUERY_CLIENT.invalidateQueries({
            //     queryKey: [LIST_BOOSTER_PACKS_CACHE],
            //     exact: false,
            //     refetchType: "all",
            // });

            // await REACT_QUERY_CLIENT.invalidateQueries({
            //     queryKey: [GET_BOOSTER_PACK_CACHE],
            //     exact: false,
            //     refetchType: "all",
            // });
        },
        onError: () => {
            console.log("error")
        }
    });

    return { isLoading: isPending, mutateAsync };
}
