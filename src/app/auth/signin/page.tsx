import AuthSignIn from "@/components/auth/AuthSignIn";
import { Suspense } from "react";

export default function Page() {
  return  <Suspense fallback={
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 bg-gray-200 rounded-full animate-spin"></div>
    </div>
  }>
    <AuthSignIn />
  </Suspense>
}
