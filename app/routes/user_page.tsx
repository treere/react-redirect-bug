import { useActiveUserId } from "~/hook/useUser";

export default function UserPage() {
  const userId = useActiveUserId()
  
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl">Welcome user {userId}</h1>
    </div>
  );
}
