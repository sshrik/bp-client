import { useQuery } from "@tanstack/react-query"
import API from "utils/API"

export const useFetchGithub = ()=> useQuery({
  queryKey: ["useFetchGithub"],
  queryFn: async () => {
    const { data } = await API.get("/users/sshrik")

    return data
  },
})