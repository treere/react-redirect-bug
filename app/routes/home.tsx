import { Navigate } from "react-router";
import { useSwitchUser } from "~/hook/useUser";
import { useValidity } from "~/service/validity";

export default function Home() {
  const switchUser  = useSwitchUser();
  const validity = useValidity();

  const onClick = () => {
    switchUser("pippo", "user_page");
  }

  if (validity.isLoading) return "Loading";

  if (!validity.data) {
    return <Navigate to="unauthorized" />;
  }

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl">Welcome</h1>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>Login</button>
    </div>
  );
}
