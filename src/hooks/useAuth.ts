import { useSession } from "next-auth/react";
import { Session } from "next-auth";

export function useAuth() {
  const { data: session, status, update } = useSession();

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  const isError = status === "unauthenticated";

  const user = session?.user;
  const accessToken = session?.accessToken;

  const hasPermission = (permission: bigint) => {
    if (!user) return false;
    return (BigInt(user.flags || 0) & permission) === permission;
  };

  return {
    session,
    status,
    update,
    isAuthenticated,
    isLoading,
    isError,
    user,
    accessToken,
    hasPermission,
  };
} 