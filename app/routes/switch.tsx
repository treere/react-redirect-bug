import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useRealSwitch } from "~/hook/useUser";

export default function Switch() {
  const switchUser =   useRealSwitch();
  const { state}  = useLocation();
  const navigate = useNavigate();
  const {user, to} = state;

  useEffect(() => {
    console.info(">>>", user, to);
    switchUser(user);
    navigate(to)
  },[user, to, switchUser]);

  return "loading";
}
