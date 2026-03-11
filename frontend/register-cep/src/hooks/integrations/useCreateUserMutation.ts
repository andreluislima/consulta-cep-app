import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { UsuarioRequest } from "../../types/Usuario.Type";
import { GLOBAL_KEYS } from "./Keys";
import { api } from "../../api";

export const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async(data: UsuarioRequest) => {
            const response = await api.post("/criarUsuario", data);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: GLOBAL_KEYS.useGetUsers()
            });
        }
    })
}