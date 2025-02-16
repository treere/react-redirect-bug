import { Navigate, useNavigate } from "react-router";
import { useRealSwitch } from "~/hook/useUser";
import { useValidity } from "~/service/validity";

export default function Home() {
  const switchUser  = useRealSwitch();
  const validity = useValidity();
  const navigate = useNavigate();
  
  const onClick = () => {
    switchUser("pippo")
    navigate( "/user_page");
  }

  if (validity.isLoading) return "Loading";

  if (!validity.data) {
    return <Navigate to="/unauthorized" />;
  }

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl">Welcome</h1>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>Login</button>
    </div>
  );
}
