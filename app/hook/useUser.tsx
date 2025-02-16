import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useCallback } from "react";
import { useNavigate } from "react-router";

const activeUserIdAtom = atomWithStorage<string>("USER_ID", '', undefined, {getOnInit: true});


export const useActiveUserId = () => useAtomValue(activeUserIdAtom);

const switchUserAtom = atom(null, (get, set, userId: string) => {
  const activeUserId = get(activeUserIdAtom);
  if (userId === activeUserId) return;

  set(activeUserIdAtom, userId);
});

export const useRealSwitch = () => {
  const switchUser = useSetAtom(switchUserAtom);
  return useCallback(
    (user: string) => {
      switchUser(user);
  }, [])
}


export const useSwitchUser = () => {
  const switchUser = useSetAtom(switchUserAtom);
  const navigate = useNavigate();
  return useCallback(
    (user: string, to: string) => {
      navigate("switch", {state: {user, to}});
    },
    [switchUser],
  );
};
