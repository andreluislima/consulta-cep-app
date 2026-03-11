import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { UsuarioRequest, UsuarioResponse } from "../../types/Usuario.Type";
import { GLOBAL_KEYS } from "./queryKeys";
import { api } from "../../api";


export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UsuarioRequest) => {
      const response = await api.post<UsuarioResponse>("/criarUsuario", data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: GLOBAL_KEYS.GetUsers(),
      });
    },
  });
};