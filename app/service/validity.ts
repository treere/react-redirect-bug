import { useQuery } from "@tanstack/react-query";
import { useActiveUserId } from "~/hook/useUser";

const validity = async (userId: string) => {
  if (userId !== "pippo") return true;
  return false;
}

export const useValidity = () => {
  const userId = useActiveUserId();

  return useQuery({queryKey: ["User" , userId], queryFn: () => validity(userId)});
}
